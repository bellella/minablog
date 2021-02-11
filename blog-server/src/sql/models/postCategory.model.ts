import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize'
import { SqlModelCreator, SqlModel } from '../../types/types'

class PostCategoryModel implements SqlModelCreator{
    private postCategory: SqlModel;
    public getModel(){
        return this.postCategory;
    }
    public associate() {
    }
    public initModel(sqlCon: Sequelize) {
        let attr = {
            id: {
                type: sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: sequelize.STRING(15),
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
            sideShow: {
                field: 'side_show',
                type: sequelize.INTEGER,
                get() {
                    return this.getDataValue('sideShow') == 1
                },
                set(value) {
                    this.setDataValue('sideShow', value ? 1 : 0);
                }
            },
            priority: {
                type: sequelize.INTEGER,
                allowNull: true,
            }
        }
        this.postCategory = <SqlModel>sqlCon.define('post_categories', attr,
        {
            tableName: 'post_categories',
            underscored: true,
            timestamps: false
        });
    }
}

export default new PostCategoryModel();

export interface PostCategoriesAttribute {
    id?: number
    name: string
    priority?: number
    show: number | boolean
    sideShow: number | boolean
    uiType: string
}