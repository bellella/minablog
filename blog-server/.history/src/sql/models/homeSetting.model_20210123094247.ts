import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'
import { PostsAttribute } from './post.model';

class HomeSettingModel implements SqlModelCreator{
    private model: SqlModel;
    public getModel(){
        return this.model;
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
            title: {
                type: sequelize.STRING
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
            ui_type: {
                type: sequelize.STRING
            },
            list_type: {
                type: sequelize.STRING
            },
            category_id: {
                type: sequelize.INTEGER
            },
            priority: {
                type: sequelize.INTEGER,
                allowNull: true,
            },
            postList: {
                type: sequelize.TEXT,
                allowNull: true,
                get() {
                    return JSON.parse(this.getDataValue('postList'));
                },
                set(value) {
                    this.setDataValue('postList', JSON.stringify(value));
                }
            }
        }
        this.model = <SqlModel>sqlCon.define('home_setting', attr,
        {
            tableName: 'home_setting',
            underscored: true,
            timestamps: false
        });
    }
}

export default new HomeSettingModel();

export interface HomeSettingAttribute {
    id?: number
    title: string
    uiType: string
    listType: string
    categoryId: number
    postList: number[] | PostsAttribute[]
    priority: number
    show: number | boolean
}
