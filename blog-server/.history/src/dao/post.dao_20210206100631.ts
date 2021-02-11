import PostModel, { PostsAttribute } from '../sql/models/post.model'
import PostCategoryModel, { PostCategoriesAttribute } from '../sql/models/postCategory.model'
import PostReplyModel, { PostRepliesAttribute } from '../sql/models/postReply.model'
import PostTagModel, { PostTagsAttribute } from '../sql/models/postTag.model'
import SqlConnection from '../sql/sqlConnection'
import * as sequelize from 'sequelize'

class PostDAO {
    public getBasePostQuery() {
        let postQuery: any = {
            attributes: ['id', 'title', 'createdAt', 'content', 'thumbnail', 'view',
                [sequelize.fn('COUNT', sequelize.col('replies.id')), 'replyCount']],
                include: [
                    {
                        attributes: ['name'],
                        model: PostCategoryModel.getModel(), required: false, as: 'category',
                        duplicating: false
                    },
                    { attributes: [], model: PostReplyModel.getModel(), required: false, as: 'replies', duplicating: false }
                ],
            where: { show: 1 },
            order: [['id', 'DESC']],
            group: ['id']
        };
        return postQuery;
    }
 
    public getList(isAdmin: boolean = false) {
        let query = this.getBasePostQuery();
        if(!isAdmin) {
            query['where'] = { show: 1 };
        }
        return PostModel.getModel().findAll(query);
    }
    
    public getListInIds(ids: number[]) {
        let query = this.getBasePostQuery();
        query['where'] = { id : ids };
        query['order'] = [[sequelize.fn('FIELD', sequelize.col('post.id'), ...ids)]]
        return PostModel.getModel().findAll(query);
    }

    public limitedList(isPopular: boolean = false, limit: number = 3, category_id?: number) {
        let query = this.getBasePostQuery();
        query['limit'] = limit;
        if(isPopular) {
            query['order'].unshift(['view', 'DESC']);
        }
        if(category_id) {
            query['where'] = { category_id };
        }
        return PostModel.getModel().findAll(query);
    }

    public recommendList(tagList = [], categoryId) {
        let query: any = {
            attributes: ['id', 'title', 'createdAt', 'content', 'thumbnail', 'view', 'categoryId'],
            where: { show: 1, categoryId },
            order: [['view', 'DESC'], ['id', 'DESC']],
            group: ['id'],
            limit: 300
        };
        if(tagList.length != 0) {
            query['attributes'] = ['id', 'title', 'createdAt', 'content', 'thumbnail', 'view', 'categoryId', [sequelize.fn('COUNT',  sequelize.col("tags.post_id")), 'tagCount']];
        
            query['include'] = [
                { model: PostTagModel.getModel(), required: false, as: 'tags', where: { name : tagList }, duplicating: false}
            ];
            query['order'].unshift([sequelize.literal('tagCount'), 'DESC']);
        }
        console.log(query,'queryqueryquery')
        return PostModel.getModel().findAll(query);
    }

    public searchList(type: string, value: string ) {
        let query = this.getBasePostQuery();
        if (type == 'tag') {
            query.include.push({ model: PostTagModel.getModel(), required: true, as: 'tags' });
            query['where'] = {'$tags.name$': value }
        } else if (type == 'keyword') {
            if(value) {
                query['where'] = { title: { $like: `%${value}%` } };
            }
        }
        return PostModel.getModel().findAll(query);
    }

    public categorizedList(categoryId?: number) {
        let query = this.getBasePostQuery();
        if(categoryId) {
            query['where']['category_id'] = categoryId;
        }
        return PostModel.getModel().findAll(query);
    }

    public async view(id: string) {
        return PostModel.getModel().findByPk(id,{
            attributes: ['id', 'title', 'createdAt', 'content', 'thumbnail', 'view', 'categoryId'],
            include: [
                {model: PostTagModel.getModel(), required: false, as: 'tags'}
            ]
        }).then(r => {
            r.increment('view');
            return r;
        });
    }

    public async save(post: PostsAttribute) {
        let {id: postId} = await PostModel.getModel().create(post);
        if(post.tags && post.tags.length > 0) {
            let tags: PostTagsAttribute[] = post.tags.map(t => ({post_id: postId, name: t }));
            await PostTagModel.getModel().bulkCreate(tags);
        }
        return postId;
    }

    public async edit(post: PostsAttribute) {
        await PostModel.getModel().update(post, {
            where: { id: post.id }
        });
        if(post.tags && post.tags.length > 0) {
            let tags: PostTagsAttribute[] = post.tags.map(t => ({post_id: post.id, name: t }));
            await PostTagModel.getModel().destroy({
                where: {
                    post_id: post.id
                }
            });
            await PostTagModel.getModel().bulkCreate(tags);
        }
        return;
    }
    
    public getAdminCategoryList(type: string) {
        return PostCategoryModel.getModel().findAll({
            order: [['priority','ASC']]
        });
    }

    public getBlogCategoryList() {
        return PostCategoryModel.getModel().findAll({
            attributes: ['id', 'name','sideShow', [sequelize.fn('COUNT', sequelize.col('posts.id')), 'postCount']],
            include: [{
                attributes: [],
                model: PostModel.getModel(), required: false, as: 'posts',
                where: { show : 1 }
                },
            ],
            order: [['priority','ASC']],
            group: ['id']
        });
    }

    public editCategoryList(categoryList: PostCategoriesAttribute[], deletedList: number[]) {
        return SqlConnection.getSqlCon().transaction(async (t) => {
            await PostCategoryModel.getModel().destroy({
                where: { id : deletedList },
                truncate: true,
                transaction: t });
            let promises = [];
            
            categoryList.forEach((c,i) => {
                c.priority = i + 1;
                promises.push(PostCategoryModel.getModel().upsert(c));
            });
            return Promise.all(promises);
        });
    }

    public getReplyList(postId: string) {
        return PostReplyModel.getModel().findAll({
            where: { post_id: postId }
        })
    }

    public saveReply(reply: PostRepliesAttribute, ip: string) {
        reply.ip = ip;
        return PostReplyModel.getModel().create(reply);
    }

    public getTagList() {
        return PostTagModel.getModel().findAll({
            group: ['name']
        });
    }
}

export default new PostDAO();
