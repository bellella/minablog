import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel, SqlModelCreator } from '../../types/types'

class SettingModel implements SqlModelCreator{
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
            key: {
                type: sequelize.STRING
            },
            value: {
                type: sequelize.TEXT,
                allowNull: true,
            },
            type: {
                type: sequelize.STRING
            }
        }
        this.model = <SqlModel>sqlCon.define('setting', attr,
        {
            tableName: 'settings',
            underscored: true,
            timestamps: false
        });
    }
}

export default new SettingModel();

export interface SettingAttribute {
    id?: number
    key: string
    value?: string,
    type: string
}
