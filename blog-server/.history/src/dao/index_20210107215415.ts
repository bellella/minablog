import { Sequelize } from 'sequelize'
//import * as post from './models/post.model'
import PostModel from './models/post.model'
let Post;
//let modelArray = [post];
let exportObject = {};
export function initSql() {
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
    PostModel.initModel(sqlcon);
    //Post = post.initModel(sqlcon);
    // modelArray.forEach(m => {
    //     m.initModel(sqlcon);
    //     Object.assign(exportObject,m);
    // });
}

export {
    exportObject
}