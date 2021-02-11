import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel } from '../types/types'

class PostTagModel implements SqlModel{
    private postTag: any;
    public getModel(){
        return this.postTag;
    }
    public initModel(sqlCon: Sequelize) {
        let attr = {
            post_id: {
                field: 'post_id',
                type: sequelize.STRING(50),
                allowNull: true,
                primaryKey: true
            },
            name: {
                type: sequelize.STRING(15),
                primaryKey: true
            }
        }
        this.postTag = sqlCon.define('post_tags', attr);
    }
}

export default new PostTagModel();

export interface PostTagsAttribute {
    post_id?: number
    name: any
}