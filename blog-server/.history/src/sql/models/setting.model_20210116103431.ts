import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel } from '../../types/types'

class SettingModel implements SqlModel{
    private setting: any;
    public getModel(){
        return this.setting;
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
                type: sequelize.BIGINT
            },
            use: {
                type: sequelize.INTEGER,
                get() {
                    return this.getDataValue('use') == 1
                },
                set(value) {
                    this.setDataValue('use', value ? 1 : 0);
                }
            },
            profile: {
                type: sequelize.TEXT,
                allowNull: true,
            },
            meta: {
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
        this.setting = sqlCon.define('setting', attr,
        {
            tableName: 'setting',
            underscored: true
        });
    }
}

export default new SettingModel();

export interface SettingAttribute {
    id?: number
    title: number
    profile?: string
    meta?: any
    use: number | boolean
}
