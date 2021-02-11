import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from '../base.api.service';
import { PostCategoriesAttribute } from 'src/app/types/types';

@Injectable()
export class PostCategoryService extends BaseAPIService {
    private ROUTES = {
        list: '/api/post/category/list',
        adminList: '/api/post/admin/category/list',
        edit: '/api/post/category/list'
    };

    constructor(protected http: HttpClient) {
        super(http);
    }

    list(): Promise<PostCategoriesAttribute[]> {
        return this.GET(this.ROUTES.list).toPromise();
    }

    adminList(): Promise<PostCategoriesAttribute[]> {
        return this.GET(this.ROUTES.adminList).toPromise();
    }
    
    edit(categoryList: PostCategoriesAttribute[], deletedList?): Promise<any> {
        return this.PATCH(this.ROUTES.edit, { categoryList, deletedList }).toPromise();
    }

}
