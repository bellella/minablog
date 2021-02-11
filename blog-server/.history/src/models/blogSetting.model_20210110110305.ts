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
                type: sequelize.BIGINT(20),
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: sequelize.BIGINT(50)
            },
            use: {
                type: sequelize.INTEGER(1),
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
        this.blogSetting = sqlCon.define('blog_setting', attr);
    }
}

export default new PostModel();

export interface PostsAttribute {
    id?: number
    category_id: number
    title: string
    content?: string
    show: number | boolean
    tags?: string[]
    meta?: string
    thumbnail?: string
    view: number
}