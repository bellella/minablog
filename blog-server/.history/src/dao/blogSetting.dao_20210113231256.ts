import BlogSettingModel, { BlogSettingAttribute } from '../models/blogSetting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../models/sqlConnection'

class BlogSettingDAO {
    public getList() {
        return BlogSettingModel.getModel().findAll({
            order: [['id','desc']]
        });
    }

    public async view(id: number | string) {
        if(id == 'selected') {
            return BlogSettingModel.getModel().findOne({
                where: {
                    use: 1
                }
            })
        }else {
            console.log(BlogSettingModel.getModel(),'안됨?')
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

export default new BlogSettingDAO();
