import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize';

export function initModel(sqlCon: Sequelize) {
    return sqlCon.define("Post", {
        id: {
            type: sequelize.BIGINT(20),
            autoIncrement: true,
            primaryKey: true
        },
        category_id: {
            type: sequelize.BIGINT(20)
        },
        title: {
            type: sequelize.STRING(50),
            allowNull: true
        },
        show: {
            type: sequelize.INTEGER(1),
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
            type: sequelize.BIGINT(20),
            defaultValue: 0
        }
    });
}
export interface BlogSettingAttribute {
    id?: number
    title: number
    profile?: string
    meta?: any
    use: number | boolean
}