  
import * as sequelize from 'sequelize'
import * as sqlCon from './index'

export class Post extends sequelize.Model {

    constructor() {
        super();
        Post.init({
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
        },
        {
            sqlCon,
            modelName: 'Language' 
        });
            
}

export interface BlogSettingAttribute {
    id?: number
    title: number
    profile?: string
    meta?: any
    use: number | boolean
}