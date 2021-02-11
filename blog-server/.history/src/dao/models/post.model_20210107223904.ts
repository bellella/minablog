import * as sequelize from 'sequelize'
import { Sequelize } from 'sequelize';

class PostModel {
    private post;
    public getModel(){
        return this.post;
    }
    public initModel(sqlCon: Sequelize) {
       this.post = sqlCon.define('Post', {
            id: {
                type: sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            category_id: {
                type: sequelize.BIGINT,
            },
            title: {
                type: sequelize.STRING(50),
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
        });
    }
}

export default new PostModel();


// export function initModel(sqlCon: Sequelize) {
//     return sqlCon.define("Post", {
//         id: {
//             type: DataTypes.BIGINT,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         category_id: {
//             type: DataTypes.BIGINT,
//         },
//         title: {
//             type: DataTypes.STRING(50),
//             allowNull: true
//         },
//         show: {
//             type: DataTypes.INTEGER,
//             get() {
//                 return this.getDataValue('show') == 1
//             },
//             set(value) {
//                 this.setDataValue('show', value ? 1 : 0);
//             }
//         },
//         content: {
//             type: DataTypes.TEXT,
//             allowNull: true,
//         },
//         thumbnail: {
//             type: DataTypes.TEXT,
//             allowNull: true
//         },
//         view: {
//             type: DataTypes.BIGINT,
//             defaultValue: 0
//         }
//     });
// }
export interface BlogSettingAttribute {
    id?: number
    title: number
    profile?: string
    meta?: any
    use: number | boolean
}