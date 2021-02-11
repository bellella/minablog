import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core'
import { SettingService } from 'src/app/service/admin/setting.service'
import * as _ from 'lodash'
import { Store } from '@ngrx/store';
import { setPostCategories } from 'src/app/store/post/post.actions';
import { PostCategoryService } from 'src/app/service/post/postCategory.service';
import { AppState } from 'src/app/store/index.reducer';
import { setSettings } from 'src/app/store/setting/setting.actions';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogLayoutComponent implements OnInit {
  constructor(private elRef: ElementRef,
    private settingService: SettingService,
    private postCategoryService: PostCategoryService,
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit(): void {
    this.setStyle();
    this.setPostCategories();
    this.setRouteEvent();
  }

  async setStyle() {
    let settingList = await this.settingService.list();
    let setting = _.chain(settingList).keyBy('key').mapValues('value').value();
    if (settingList) {
      this.elRef.nativeElement.style.setProperty('--blog-highlight-color', setting.HIGH_COLOR);
      this.elRef.nativeElement.style.setProperty('--blog-category-color', setting.CAT_COLOR);
      this.elRef.nativeElement.style.setProperty('--blog-footer-color', setting.FOOTER_COLOR);
      this.elRef.nativeElement.style.setProperty('--blog-profile-image', `url(${setting.PROFILE_IMAGE})`);
    }
    this.store.dispatch(setSettings({
      settingList,
      profileImage: setting.PROFILE_IMAGE,
      profileDescription: setting.PROFILE_DESCRIPTION,
      profileText: setting.PROFILE_TEXT
    }
    ));
  }

  async setPostCategories() {
    let categories = await this.postCategoryService.list();
    this.store.dispatch(setPostCategories({ categories }));
  }

  setRouteEvent() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

}
