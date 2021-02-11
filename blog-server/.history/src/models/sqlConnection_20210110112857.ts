import { Sequelize } from 'sequelize'
import PostModel from './post.model'
import { SqlModel } from '../types/types'

class SqlConnection {
    private sqlCon: Sequelize;
    public getSqlCon() {
        return this.sqlCon;
    }
    public initSql() {
        let modelList: SqlModel[] = [
            PostModel
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