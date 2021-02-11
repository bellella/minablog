import {Model, DataTypes } from 'sequelize'
import { Sequelize } from 'sequelize';

export default class PostModel extends Model {
    static initModel(sqlCon: Sequelize) {
        return super.init({
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            category_id: {
                type: DataTypes.BIGINT,
            },
            title: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            show: {
                type: DataTypes.INTEGER,
                get() {
                    return this.getDataValue('show') == 1
                },
                set(value) {
                    this.setDataValue('show', value ? 1 : 0);
                }
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            thumbnail: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            view: {
                type: DataTypes.BIGINT,
                defaultValue: 0
            }
        },{sqlCon});
    }

}

export function initModel(sqlCon: Sequelize) {
    return sqlCon.define("Post", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        category_id: {
            type: DataTypes.BIGINT,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        show: {
            type: DataTypes.INTEGER,
            get() {
                return this.getDataValue('show') == 1
            },
            set(value) {
                this.setDataValue('show', value ? 1 : 0);
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        thumbnail: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        view: {
            type: DataTypes.BIGINT,
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