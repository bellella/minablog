import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from '../base.api.service';
import { HomeSettingAttribute } from 'src/app/types/types';


@Injectable()
export class HomeSettingService extends BaseAPIService {
    private ROUTES = {
        list: '/api/setting/home/list',
        save: '/api/setting/home',
        saveOrder: '/api/setting/home/order',
        setPosts: '/api/setting/home/posts',
        delete: '/api/setting/home/:settingId'
    };

    constructor(protected http: HttpClient) {
        super(http);
    }

    list(): Promise<any> {
        return this.GET(this.ROUTES.list).toPromise();
    }

    save(setting: HomeSettingAttribute): Promise<any> {
        return this.POST(this.ROUTES.save, { setting }).toPromise();
    }

    saveOrder(settings: Object[]): Promise<any> {
        return this.POST(this.ROUTES.saveOrder, { settings }).toPromise();
    }

    setPosts(): Promise<any> {
        return this.GET(this.ROUTES.setPosts).toPromise();
    }

    delete(settingId: number): Promise<any> {
        return this.DELETE(this.ROUTES.delete, { settingId }).toPromise();
    }

}
