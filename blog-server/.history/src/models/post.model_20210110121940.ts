import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel } from '../types/types'

class PostModel implements SqlModel{
    private post: any;
    public getModel(){
        return this.post;
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
        this.post = sqlCon.define('post', attr,
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