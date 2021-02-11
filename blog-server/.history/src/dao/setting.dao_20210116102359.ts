import BlogSettingModel, { BlogSettingAttribute } from '../models/blogSetting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../models/sqlConnection'

class SettingDAO {
    public getList() {
        return BlogSettingModel.getModel().findAll({
            order: [['id','desc']]
        });
    }

    public async view(id?: string) {
        if(id) {
            return BlogSettingModel.getModel().findOne({
                where: {
                    use: 1
                }
            })
        }else {
            return SqlConnection.getSqlCon().model('blog_setting').findByPk(id);
        }

    }

    public async create(setting: BlogSettingAttribute) {
        delete setting.id;
        return BlogSettingModel.getModel().create(setting);
    }

    public async edit(setting: BlogSettingAttribute) {
        return BlogSettingModel.getModel().update(setting, {
            where: { id: setting.id }
        });
    }
}

export default new SettingDAO();
