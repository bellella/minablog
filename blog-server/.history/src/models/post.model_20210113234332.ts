import * as sequelize from 'sequelize'
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import { SqlModel } from '../types/types'
import PostCategoryModel from './postCategory.model'
import PostReplyModel from './postReply.model'
import PostTagModel from './postTag.model'

export interface UserModel extends Model<PostsAttribute>, PostsAttribute {}
export class User extends Model<UserModel, PostsAttribute> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions);
};

class PostModel implements SqlModel {
    private post: typeof Model  & {
        new (values?: object, options?: BuildOptions);
    };
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
            category_id: {
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
        this.post = <typeof Model>sqlCon.define('post', attr,
            {
                tableName: 'posts',
                underscored: true
            });
    }
}

export default new PostModel();


export interface PostsAttribute {
    id?: number
    category_id: number
    title: string
    content?: string
    show: number | boolean
    tags?: string[]
    meta?: string
    thumbnail?: string
    view: number
}