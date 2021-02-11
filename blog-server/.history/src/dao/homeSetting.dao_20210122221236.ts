import SettingModel, { SettingAttribute } from '../sql/models/setting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../sql/sqlConnection'
import HomeSettingModel, { HomeSettingAttribute } from '../sql/models/homeSetting.model';

class HomeSettingDAO {

    constructor() {
    }
    public getList(): Promise<HomeSettingDAO[]> {
        return HomeSettingModel.getModel().findAll({
            order: [['priority','asc']]
        });
    }

    public async save(setting: HomeSettingAttribute[]) {
        SqlConnection.getSqlCon().transaction(async t => {
            await HomeSettingModel.getModel().destroy({where: {}, truncate: true, transaction: t});
            return HomeSettingModel.getModel().bulkCreate(setting,{transaction: t});
        });
    }

    public async list(setting: HomeSettingAttribute[]) {
        SqlConnection.getSqlCon().transaction(async t => {
            await HomeSettingModel.getModel().destroy({where: {}, truncate: true, transaction: t});
            return HomeSettingModel.getModel().bulkCreate(setting,{transaction: t});
        });
    }
}

export default new HomeSettingDAO();
