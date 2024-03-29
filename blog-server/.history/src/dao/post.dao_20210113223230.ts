import PostModel, { PostsAttribute } from '../models/post.model'
import PostCategoryModel, { PostCategoriesAttribute } from '../models/postCategory.model'
import PostReplyModel, { PostRepliesAttribute } from '../models/postReply.model'
import PostTagModel, { PostTagsAttribute } from '../models/postTag.model'
import SqlConnection from '../models/sqlConnection'
import * as sequelize from 'sequelize'

class PostDAO {

    constructor() {
        PostModel.getModel().hasMany(PostTagModel.getModel(), {
            foreignKey: 'post_id',
            as: 'tags'
        });
        PostTagModel.getModel().belongsTo(PostModel.getModel(), { foreignKey: 'post_id', targetKey: 'id' });
        PostCategoryModel.getModel().hasMany(PostModel.getModel(), { foreignKey: 'category_id' });
        PostModel.getModel().belongsTo(PostCategoryModel.getModel(), { as: 'category', foreignKey: 'category_id', targetKey: 'id' });
        PostModel.getModel().hasMany(PostReplyModel.getModel(), { as: 'replies', foreignKey: 'post_id' });
    }
    public getList(isTopN = false, topN: string = '3') {
        let query = {};
        query = {
            attributes: ['id', 'title', 'created_at', 'content', 'thumbnail', 'view',
                [sequelize.fn('COUNT', sequelize.col('replies.id')), 'replyCount']],
            include: [
                {
                    attributes: ['name'],
                    model: PostCategoryModel.getModel(), required: false, as: 'category',
                    duplicating: false
                },
                { attributes: [], model: PostCategoryModel.getModel(), required: false, as: 'replies', duplicating: false }
            ],
            order: [['id', 'DESC']],
            group: ['id']
        };
        if (isTopN) {
            query['order'].unshift(['view', 'DESC']);
            query['limit'] = parseInt(topN);
        }
        return PostModel.getModel().findAll(query);
    }

    public searchList(data: { type: string, value: string }) {
        let query = {};
        if (data.type == 'category') {
            query = { where: { category_id: data.value } }
        } else if (data.type == 'tag') {
            query = {
                include: [{ model: PostTagModel.getModel(), required: true, as: 'tags' }],
                where: {
                    '$tags.name$': data.value
                }
            }
        } else if (data.type == 'keyword') {
            query = data.value ? {where: { title: { $like: `%${data.value}%` } }} : {}
        }
        return PostModel.getModel().findAll(query);
    }

    public async view(id: string) {
        return PostModel.getModel().findById(id,{
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
        return PostCategoryModel.getModel().findAll({
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
