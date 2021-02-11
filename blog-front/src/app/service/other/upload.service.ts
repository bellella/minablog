import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIService } from '../base.api.service';

@Injectable()
export class UploadService extends BaseAPIService{

    private ROUTES = {
        uploadImage: '/api/upload/image'
    };

    constructor(protected http: HttpClient) {
        super(http);
    }

    uploadImage(data: FormData): Promise<any> {
        return this.http.post(this.ROUTES.uploadImage, data).toPromise();
    }

}
