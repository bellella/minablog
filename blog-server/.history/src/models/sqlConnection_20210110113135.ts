import { Sequelize } from 'sequelize'
import { SqlModel } from '../types/types'
import blogSettingModel from './blogSetting.model';
import postModel from './post.model'
import postCategoryModel from './postCategory.model';
import postReplyModel from './postReply.model';
import postTagModel from './postTag.model';

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
    }

}

export default new SqlConnection();