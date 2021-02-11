import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'

class PostReplyModel implements SqlModelCreator{
    private postReply: SqlModel;
    public getModel(){
        return this.postReply;
    }
    associate() {
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
        this.postReply = <SqlModel>sqlCon.define('post_replies', attr,
        {
            tableName: 'post_replies',
            underscored: true
        });
    }
}

export default new PostReplyModel();

export interface PostRepliesAttribute {
    id?: number
    post_id: number
    user_name: string
    email?: string
    content?: string
    show: number | boolean
    ip: string
    created_at?: string
    updated_at?: number
}