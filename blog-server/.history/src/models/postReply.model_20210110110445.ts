import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel } from '../types/types'

class PostReplyModel implements SqlModel{
    private postReply: any;
    public getModel(){
        return this.postReply;
    }
    public initModel(sqlCon: Sequelize) {
        let attr = {
            id: {
                type: sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            post_id: {
                type: sequelize.BIGINT
            },
            user_name: {
                type: sequelize.STRING(15)
            },
            email: {
                type: sequelize.STRING(25)
            },
            content: {
                type: sequelize.TEXT
            },
            ip: {
                type: sequelize.STRING(20)
            },
            show: {
                type: sequelize.INTEGER,
                get() {
                    return this.getDataValue('show') == 1
                },
                set(value) {
                    this.setDataValue('show', value ? 1 : 0);
                }
            }
        }
        this.postReply = sqlCon.define('post_replies', attr);
    }
}

export default new PostReplyModel();

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