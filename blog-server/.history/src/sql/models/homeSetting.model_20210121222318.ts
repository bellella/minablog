import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel } from '../../types/types'

class HomeSettingModel implements SqlModel{
    private model: any;
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
                    return JSON.parse(this.getDataValue('meta'))
                },
                set(value) {
                    this.setDataValue('meta', JSON.stringify(value));
                }
            }
        }
        this.model = sqlCon.define('setting', attr,
        {
            tableName: 'setting',
            underscored: true
        });
    }
}

export default new HomeSettingModel();

export interface HomeSettingAttribute {
    id?: number
    title: string
    ui_type: string
    list_type: string
    category_id: number
    post_list: number[]
    priority: number
    show: number | boolean
}
