import SettingModel, { SettingAttribute } from '../sql/models/setting.model'
import * as sequelize from 'sequelize'
import SqlConnection from '../sql/sqlConnection'

class SettingDAO {

    constructor() {
    }
    public getList() {
        return SettingModel.getModel().findAll({
            order: [['id', 'desc']]
        });
    }

    public async view(id?: string) {
        if (id) {
            return SettingModel.getModel().findOne({
                where: {
                    use: 1
                }
            })
        } else {
            return SqlConnection.getSqlCon().model('blog_setting').findByPk(id);
        }

    }

    public async save(setting: SettingAttribute[], profileImage: string, profileDesc: string) {
        let uniqueList = setting.filter(s => s.type === 'unique');
        SqlConnection.getSqlCon().transaction(async t => {
            let promises = [];
            await SettingModel.getModel().destroy({ where: { type: 'unique' }, transaction: t });
            promises.push(SettingModel.getModel().upsert({ key: 'PROFILE_IMAGE', value: profileImage, type: 'default'}, { transaction: t }));
            promises.push(SettingModel.getModel().upsert({ key: 'PROFILE_DESCRIPTION', value: profileDesc, type: 'default'}, { transaction: t }));
            promises.push(SettingModel.getModel().bulkCreate(setting, { transaction: t }));
            return Promise.all(promises);
        });

    }

    public async edit(setting: SettingAttribute) {
        return SettingModel.getModel().update(setting, {
            where: { id: setting.id }
        });
    }
}

export default new SettingDAO();
