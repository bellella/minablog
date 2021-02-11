import SettingModel, { SettingAttribute } from '../sql/models/setting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../sql/sqlConnection'

class SettingDAO {

    constructor() {
        console.log('setting dao created')
    }
    public getList() {
        return SettingModel.getModel().findAll({
            order: [['id','desc']]
        });
    }

    public async view(id?: string) {
        if(id) {
            return SettingModel.getModel().findOne({
                where: {
                    use: 1
                }
            })
        }else {
            return SqlConnection.getSqlCon().model('blog_setting').findByPk(id);
        }

    }

    public async save(setting: SettingAttribute[]) {
        SettingModel.getModel().destroy({ truncate: true });
        return SettingModel.getModel().bulkCreate(setting);
    }

    public async edit(setting: SettingAttribute) {
        return SettingModel.getModel().update(setting, {
            where: { id: setting.id }
        });
    }
}

export default new SettingDAO();
