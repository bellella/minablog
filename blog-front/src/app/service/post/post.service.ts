import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIService } from '../base.api.service';
import { PostAttribute, PostCategoriesAttribute, PostRepliesAttribute } from 'src/app/types/types';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class PostService extends BaseAPIService {
    public searchSub$: Subject<any> = new Subject<any>();
    public loadingSub$: Subject<any> = new Subject<any>();
    private ROUTES = {
        save: '/api/post',
        view: '/api/post/view/:id',
        list: '/api/post/list',
        searchList: '/api/post/list/:type/:value',
        categorizedList: '/api/post/list/category/:categoryId',
        topNList: '/api/post/topN/list/:topN',
        recommendList: '/api/post/recommend/list',
        replyList: '/api/post/reply/list/:postId',
        saveReply: '/api/post/reply',
        tagList: '/api/post/tag/list'
    };

    constructor(protected http: HttpClient) {
        super(http);
    }

    list(): Promise<PostAttribute[]> {
        return this.GET(this.ROUTES.list).toPromise();
    }

    searchList(type: string, value: string): Promise<PostAttribute[]> {
        return this.GET(this.ROUTES.searchList, { type, value }).toPromise();
    }

    categorizedList(categoryId: string): Promise<PostAttribute[]> {
        return this.GET(this.ROUTES.categorizedList, { categoryId }).toPromise();
    }

    topNList(topN: number): Promise<PostAttribute[]> {
        return this.GET(this.inject(this.ROUTES.topNList, { topN })).toPromise();
    }

    recommendList(postId: any, categoryId: number, tagList: string[] = []): Promise<PostAttribute[]> {
        return this.POST(this.ROUTES.recommendList, { postId, categoryId, tagList }).toPromise();
    }

    view(id: string): Promise<PostAttribute> {
        return this.GET(this.inject(this.ROUTES.view, { id })).toPromise();
    }

    save(post: PostAttribute): Promise<any> {
        return this.POST(this.ROUTES.save, post).toPromise();
    }

    edit(post: PostAttribute): Promise<any> {
        return this.PATCH(this.ROUTES.save, post).toPromise();
    }

    replyList(postId: string): Promise<PostRepliesAttribute[]> {
        return this.GET(this.inject(this.ROUTES.replyList, { postId })).toPromise();
    }

    saveReply(reply: PostRepliesAttribute): Promise<any> {
        return this.POST(this.ROUTES.saveReply, { reply }).toPromise();
    }

    tagList(): Promise<any> {
        return this.GET(this.ROUTES.tagList).toPromise();
    }

    fromEvent() {
        return new Observable((observer) => {
            //   const handler = (e) => observer.next(e);

            //   // 대상 엘리먼트에 이벤트 핸들러를 추가합니다.
            //   target.addEventListener(eventName, handler);

            //   return () => {
            //     // 이벤트 핸들러를 제거합니다.
            //     target.removeEventListener(eventName, handler);
            //   };
            observer.next('!!!');
        });
    }
}
