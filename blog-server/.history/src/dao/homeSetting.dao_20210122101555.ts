import SettingModel, { SettingAttribute } from '../sql/models/setting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../sql/sqlConnection'
import HomeSettingModel, { HomeSettingAttribute } from '../sql/models/homeSetting.model';

class HomeSettingDAO {

    constructor() {
    }
    public getList() {
        return HomeSettingModel.getModel().findAll({
            order: [['priority','asc']]
        });
    }

    public async save(setting: HomeSettingAttribute[]) {
        await HomeSettingModel.getModel().destroy();
        return HomeSettingModel.getModel().bulkCreate(setting);
    }
}

export default new HomeSettingDAO();
