import PostModel from '../models/post.model'
import * as sequelize from 'sequelize'

class PostDAO {
    public getList(isTopN = false, topN: string = '3') {
        let query = {};
            query = {
                attributes: ['id', 'title', 'created_at', 'content', 'thumbnail', 'view'],
                 //   [sequelize.fn('COUNT', sequelize.col('replies.id')), 'replyCount']],
                // include: [
                //     {
                //         attributes: ['name'],
                //         model: this.postCategoriesSchema.getSchema(), required: false, as: 'category',
                //         duplicating: false
                //     },
                //     { attributes: [], model: this.postRepliesSchema.getSchema(), required: false, as: 'replies', duplicating: false }
                // ],
                order: [['id', 'DESC']],
                group: ['id']
            };
            if (isTopN) {
                query['order'].unshift(['view', 'DESC']);
                query['limit'] = parseInt(topN);
            }
            return PostModel.getModel().findAll(query);
    }
}

export default new PostDAO();
