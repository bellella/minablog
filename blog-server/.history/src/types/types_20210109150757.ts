import { Sequelize } from 'sequelize'

export interface SqlModel {
    initModel(sqlCon: Sequelize)
    getModel()
}

export interface SqlClass {
    initModel(sqlCon: Sequelize)
}