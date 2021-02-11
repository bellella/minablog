import * as sequelize from 'sequelize'
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import { SqlModelCreator, SqlModel } from '../../types/types'
import PostCategoryModel from './postCategory.model'
import PostReplyModel from './postReply.model'
import PostTagModel from './postTag.model'

class PostModel implements SqlModelCreator {
    private post: SqlModel;
    public getModel() {
        return this.post;
    }

    associate() {
        this.post.hasMany(PostTagModel.getModel(), {
            foreignKey: 'post_id',
            as: 'tags'
        });
        PostTagModel.getModel().belongsTo(this.post, { foreignKey: 'post_id', targetKey: 'id' });
        PostCategoryModel.getModel().hasMany(this.post, { foreignKey: 'category_id' });
        this.post.belongsTo(PostCategoryModel.getModel(), { as: 'category', foreignKey: 'category_id', targetKey: 'id' });
        this.post.hasMany(PostReplyModel.getModel(), { as: 'replies', foreignKey: 'post_id' });
    }
    public initModel(sqlCon: Sequelize) {
        let attr = {
            id: {
                type: sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            categoryId: {
                field: 'category_id',
                type: sequelize.BIGINT,
            },
            title: {
                type: sequelize.STRING(50),
                allowNull: true
            },
            show: {
                type: sequelize.INTEGER,
                get() {
                    return this.getDataValue('show') == 1
                },
                set(value) {
                    this.setDataValue('show', value ? 1 : 0);
                }
            },
            content: {
                type: sequelize.TEXT,
                allowNull: true,
            },
            thumbnail: {
                type: sequelize.TEXT,
                allowNull: true
            },
            view: {
                type: sequelize.BIGINT,
                defaultValue: 0
            }
        }
        this.post = <SqlModel>sqlCon.define('post', attr,
            {
                tableName: 'posts',
                underscored: true
            });
    }
}

export default new PostModel();


export interface PostsAttribute {
    id?: number
    categoryId: number
    title: string
    content?: string
    show: number | boolean
    tags?: string[]
    meta?: string
    thumbnail?: string
    view: number,
    createdAt: Date
    updatedAt: Date
}