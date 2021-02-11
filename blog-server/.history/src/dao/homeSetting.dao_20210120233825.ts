import SettingModel, { SettingAttribute } from '../sql/models/setting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../sql/sqlConnection'
import homeSettingModel from '../sql/models/homeSetting.model';

class HomeSettingDAO {

    constructor() {
    }
    public getList() {
        return homeSettingModel.getModel().findAll({
            order: [['priority','asc']]
        });
    }
}

export default new HomeSettingDAO();
