import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/service/other/login.service';
import { PostService } from 'src/app/service/post/post.service';
import { AppState } from 'src/app/store/index.reducer';
import { selectPostCategories } from 'src/app/store/post/post.reducer';
import { selectProfile } from 'src/app/store/setting/setting.reducer';
import { PostAttribute, PostCategoriesAttribute, PostTagsAttribute } from 'src/app/types/types';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public categoryList: PostCategoriesAttribute[];
  public topNList: PostAttribute[];
  public tagList: PostTagsAttribute[];
  public categoryAllCount: number = 0;
  public profile$: Observable<{
    text: string
    image: string
  }>;
  public isLogin: boolean = true;
  public isAdmin: string = this.route.snapshot.queryParams.isAdmin || '';
  constructor(private postService: PostService,
              public router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private store: Store<AppState>) {
                store
                .select(selectPostCategories)
                .subscribe(this.setCategoryListCount);
                this.profile$ = store.select(selectProfile);
  }

  async ngOnInit() {
    this.getTopNList();
    this.getTagList();
    this.isLogin = await this.loginService.isAdmin();
  }

  setCategoryListCount = (categoryList: PostCategoriesAttribute[]) => {
    this.categoryList = categoryList;
    this.categoryAllCount = categoryList.reduce((a,b) => a + b.postCount,0);
  }

  getTopNList() {
    this.postService.topNList(3)
      .then(r => {
        console.log(r, 'topNLISt')
        this.topNList = r;
      })
  }

  getTagList() {
    this.postService.tagList()
      .then(r => {
        console.log(r, 'tagLsit')
        this.tagList = r;
      })
  }

  getData() {
    //this.postService.searchSub$.next();
  }

  async login() {
    await this.loginService.login();
    this.isLogin = await this.loginService.isAdmin();
    this.router.navigate(['post','home'],{ replaceUrl: true });
  }

  async logout() {
    await this.loginService.logout()
    this.isLogin = await this.loginService.isAdmin();
    this.router.navigate(['post','home'],{ replaceUrl: true });
  }
}
