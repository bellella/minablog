
import { Sequelize } from 'sequelize'

console.log('sdfsdf',process.env.MARIA_PW)
const sqlCon = new Sequelize(
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

export default sqlCon