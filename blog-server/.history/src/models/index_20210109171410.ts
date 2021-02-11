import { Sequelize } from 'sequelize'
import PostModel from './post.model'
import { SqlModel } from '../types/types'

let exportObject = {};
export function initSql() {
    let modelList: SqlModel[] = [
        PostModel
    ];
    const sqlcon = new Sequelize(
        <string>process.env.MARIA_DB,
        <string>process.env.MARIA_USER,
        <string>process.env.MARIA_PW,
        {
            host: process.env.MARIA_HOST, omitNull: false, pool: {
                max: 60,
                min: 0,
                idle: 10000
            },
            port: 3307,
            dialect: 'mysql'
        }
    );
    modelList.forEach((m: SqlModel) => {
        m.initModel(sqlcon);
    });
}

export {
    exportObject
}