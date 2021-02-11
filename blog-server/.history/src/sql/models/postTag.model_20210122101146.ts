import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'

class PostTagModel implements SqlModelCreator{
    private postTag: SqlModel;
    public getModel(){
        return this.postTag;
    }
    public associate() {
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
        this.postTag = <SqlModel>sqlCon.define('post_tags', attr,
        {
            tableName: 'post_tags',
            timestamps: false,
            underscored: true
        });
    }
}

export default new PostTagModel();

export interface PostTagsAttribute {
    post_id?: number
    name: any
}