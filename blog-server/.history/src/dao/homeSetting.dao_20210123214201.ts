import SettingModel, { SettingAttribute } from '../sql/models/setting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../sql/sqlConnection'
import HomeSettingModel, { HomeSettingAttribute } from '../sql/models/homeSetting.model';

class HomeSettingDAO {

    constructor() {
    }
    public getList(): Promise<HomeSettingAttribute[]> {
        return HomeSettingModel.getModel().findAll({
            order: [['priority', 'asc']]
        });
    }

    public getListBlog(): Promise<HomeSettingAttribute[]> {
        return HomeSettingModel.getModel().findAll({
            where: { show: 1 },
            order: [['priority', 'asc']]
        });
    }

    public async save(setting: HomeSettingAttribute[]) {
        return HomeSettingModel.getModel().upsert(setting);
    }

    public saveOrder(settings: number[]) {
        console.log(settings);
        let promises = [];
        settings.forEach((s, i) => {
            promises.push(HomeSettingModel.getModel().update({ 
                priority: i + 1
             },{ where: {id: s} }));
        })
        return Promise.all(promises);
    }
}

export default new HomeSettingDAO();
