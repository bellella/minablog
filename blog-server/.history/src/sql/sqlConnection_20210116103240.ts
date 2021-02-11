import { Sequelize } from 'sequelize'
import { SqlModel } from '../types/types'
import blogSettingModel from './models/setting.model';
import postModel from './models/post.model'
import postCategoryModel from './models/postCategory.model';
import postReplyModel from './models/postReply.model';
import postTagModel from './models/postTag.model';

class SqlConnection {
    private sqlCon: Sequelize;
    public getSqlCon() {
        return this.sqlCon;
    }
    public initSql() {
        /*sequelize models initialize*/
        let modelList: SqlModel[] = [
            postModel,
            postCategoryModel,
            postReplyModel,
            postTagModel,
            blogSettingModel
        ];
        this.sqlCon = new Sequelize(
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
            m.initModel(this.sqlCon);
        });
        modelList.forEach((m: SqlModel) => {
            m.associate();
        });
    }

}

export default new SqlConnection();