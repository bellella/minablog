import PostModel, { PostsAttribute } from '../sql/models/post.model'
import PostCategoryModel, { PostCategoriesAttribute } from '../sql/models/postCategory.model'
import PostReplyModel, { PostRepliesAttribute } from '../sql/models/postReply.model'
import PostTagModel, { PostTagsAttribute } from '../sql/models/postTag.model'
import SqlConnection from '../sql/sqlConnection'
import * as sequelize from 'sequelize'

class PostDAO {
    private postQuery: any = {
        attributes: ['id', 'title', 'created_at', 'content', 'thumbnail', 'view',
            [sequelize.fn('COUNT', sequelize.col('replies.id')), 'replyCount']],
        include: [
            'category',
            'replies'
        ],
        order: [['id', 'DESC']],
        group: ['id']
    };

    public getList() {
        let query = Object.assign({}, this.postQuery);
        return PostModel.getModel().findAll(query);
    }
    
    public getListInIds(ids: number[]) {
        let query = Object.assign({}, this.postQuery);
        //query['order'] = sequelize.literal("FIELD(post.id,"+ids.join(',')+")");
        query['order'] = [[sequelize.fn('FIELD', sequelize.col('post.id'), ...ids)]]
        return PostModel.getModel().findAll(query);
    }

    public getLimiedList(popular: boolean = false,limit: number = 3, category_id?: number) {
        let query = Object.assign({}, this.postQuery);
        query['limit'] = limit;
        if(popular) {
            query['order'].unshift(['view', 'DESC']);
        }
        if(category_id) {
            query['where'] = { category_id };
        }
        return PostModel.getModel().findAll(query);
    }

    public searchList(data: { type: string, value: string }) {
        let query = Object.assign({}, this.postQuery);
        if (data.type == 'category') {
            query['where'] = { category_id: data.value };
        } else if (data.type == 'tag') {
            query.include.push({ model: PostTagModel.getModel(), required: true, as: 'tags' });
            console.log(query,
            'qieer')
            query['where'] = {'$tags.name$': data.value }
        } else if (data.type == 'keyword') {
            if(data.value) {
                query['where'] = { title: { $like: `%${data.value}%` } };
            }
        }
        return PostModel.getModel().findAll(query);
    }

    public categorizedList(category_id?: number) {
        let query = Object.assign({}, this.postQuery);
        query['where'] = { category_id };
    }

    public async view(id: string) {
        return PostModel.getModel().findByPk(id,{
            include: [
                {model: PostTagModel.getModel(), required: false, as: 'tags'},
                //{model: this.postRepliesSchema.getSchema(), required: false, as: 'replies'}
            ]
        }).then(r => {
            r.increment('view');
            return r;
        });
    }

    public async save(post: PostsAttribute) {
        console.log(post,'post..')
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
    
    public getCategoryList(type: string) {
        if (type === 'blog') {
            return PostCategoryModel.getModel().findAll({
                where: { show : 1 },
                order: [['priority','ASC']]
            });
        } else if(type == 'sidebar') {
            return PostCategoryModel.getModel().findAll({
                where: { show : 1, sideShow : 1},
                order: [['priority','ASC']]
            });
        }else if(type == 'admin') {
            return PostCategoryModel.getModel().findAll({
                order: [['priority','ASC']]
            });
        }
    }

    public getCategoryListWithCount() {
        return PostCategoryModel.getModel().findAll({
            attributes: ['id','name',[sequelize.fn('COUNT', sequelize.col('posts.id')), 'postCount']],
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
