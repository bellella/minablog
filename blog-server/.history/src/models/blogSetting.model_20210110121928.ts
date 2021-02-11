import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModel } from '../types/types'

class BlogSettingModel implements SqlModel{
    private blogSetting: any;
    public getModel(){
        return this.blogSetting;
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
                    console.log('get은 아니라고..',this.getDataValue('meta'))
                    return JSON.parse(this.getDataValue('meta'))
                },
                set(value) {
                    console.log(value);
                    console.log('parsing')
                    this.setDataValue('meta', JSON.stringify(value));
                }
            }
        }
        this.blogSetting = sqlCon.define('blog_setting', attr,
        {
            tableName: 'blog_setting',
            underscored: true
        });
    }
}

export default new BlogSettingModel();

export interface BlogSettingAttribute {
    id?: number
    title: number
    profile?: string
    meta?: any
    use: number | boolean
}