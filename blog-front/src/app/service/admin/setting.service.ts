import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from '../base.api.service';
import { SettingAttribute } from 'src/app/types/types';


@Injectable()
export class SettingService extends BaseAPIService {
    private setting: SettingAttribute;
    private ROUTES = {
        list: '/api/setting/list',
        save: '/api/setting',
        edit: '/api/setting',
        view: '/api/setting/:id',
        selectedView: '/api/setting'
    };

    constructor(protected http: HttpClient) {
        super(http);
    }

    list(): Promise<any> {
        return this.GET(this.ROUTES.list).toPromise();
    }

    view(id: string | number): Promise<any> {
        return this.GET(this.inject(this.ROUTES.view, { id })).toPromise();
    }

    async selectedView(): Promise<any> {
        this.setting = await this.GET(this.ROUTES.selectedView).toPromise();
        return this.setting;
    }

    public async getSetting() {
        if(this.setting) {
            return this.setting;
        }else {
            return this.selectedView();
        }
    }

    save(settingList: SettingAttribute[], profileImage: string, profileDesc: string): Promise<any> {
        return this.http.post(this.ROUTES.save, { settingList, profileImage, profileDesc }).toPromise();
    }

    edit(setting: SettingAttribute): Promise<any> {
        return this.http.patch(this.ROUTES.save, { setting }).toPromise();
    }

}
