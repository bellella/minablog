import * as sequelize from 'sequelize'
import sqlCon from './index'

export class Post extends sequelize.Model {
    static initModel() {
        Post.init({
            id: {
                type: sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            category_id: {
                type: sequelize.INTEGER
            },
            title: {
                type: sequelize.STRING,
                allowNull: true
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
            content: {
                type: sequelize.TEXT,
                allowNull: true,
            },
            thumbnail: {
                type: sequelize.TEXT,
                allowNull: true
            },
            view: {
                type: sequelize.BIGINT,
                defaultValue: 0
            }
        },
            {
                sequelize: sqlCon,
                modelName: 'post'
            });
    }
}
export interface BlogSettingAttribute {
    id?: number
    title: number
    profile?: string
    meta?: any
    use: number | boolean
}