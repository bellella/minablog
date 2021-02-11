import * as sequelize from 'sequelize'

export function initModel(sequelize) {
    return sequelize.define("Post", {
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
    });
}
export interface BlogSettingAttribute {
    id?: number
    title: number
    profile?: string
    meta?: any
    use: number | boolean
}