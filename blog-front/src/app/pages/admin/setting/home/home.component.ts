import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post/post.service';
import { HomeSettingAttribute, PostAttribute, PostCategoriesAttribute } from 'src/app/types/types';
import { HomeSettingService } from 'src/app/service/admin/homeSetting.service';

import * as _ from 'lodash';
import { PostCategoryService } from 'src/app/service/post/postCategory.service';

@Component({
  selector: 'app-home-setting',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeSettingComponent implements OnInit {

  public categoryList: PostCategoriesAttribute[] = [];
  public settingList: HomeSettingAttribute[] = [];
  public thisSetting: HomeSettingAttribute;
  public originSetting: HomeSettingAttribute;
  public deletedList: number[] = [];
  public selectedIndex: number = -1;
  public vacantSetting: HomeSettingAttribute = {
    title: 'New category',
    priority: -1,
    show: false,
    postList: [],
    selectedPostList: [],
    listType: 'popular',
    uiType: 'main',
    categoryId: -1
  }

  public postList: SettingPostAttribute[] = [];
  public searchPostList: SettingPostAttribute[] = [];
  public selectedPostList: SettingPostAttribute[] = [];

  constructor(private postService: PostService,
    private postCategoryService: PostCategoryService,
    private homeSettingService: HomeSettingService) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.getData();
  }

  getData() {
    this.homeSettingService.list().then(s => {
      this.settingList = s;
    });
    this.postService.list()
    .then(r => {
      this.postList = r.map(p => (
        {title: p.title, id: p.id, categoryName: p.category.name ,label: `${p.id} : ${p.category.name} : ${p.title}`}
      ));
    });
    this.postCategoryService.adminList().then(c => {
      this.categoryList = c;
    });
  }

  getCategoryList() {
    this.thisSetting = Object.assign({},this.vacantSetting);
    this.deletedList.length = 0;
    this.postCategoryService.adminList().then(c => {
      this.categoryList = c;
    });
  }

  selectCategory(setting: HomeSettingAttribute, index) {
    if(this.originSetting && !this.changeCheck(setting)) {
      return;
    }
    this.selectedIndex = index;
    this.thisSetting = setting;
    this.searchPostList = this.postList.filter(s => {
      return !this.thisSetting.postList.includes(s.id);
    });
    this.selectedPostList = this.postList.filter(s => {
      return this.thisSetting.postList.includes(s.id);
    });
    this.originSetting = _.cloneDeep(this.thisSetting);
  }

  addCategory() {
    let firstCategoryId = this.categoryList[0] ? this.categoryList[0].id : -1;
    this.settingList.push(_.cloneDeep({...this.vacantSetting, categoryId: firstCategoryId}));
  }

  deleteCategory() {
    if(this.selectedIndex === -1) {
      alert('Nothing is selected.')
      return;
    }
    if(!this.settingList[this.selectedIndex].id) {
      this.settingList.splice(this.selectedIndex,1);
      this.selectedIndex = -1;
      return;
    }
    this.homeSettingService.delete(this.selectedIndex)
    .then(r => {
      this.getData();
      alert('Delete completed!')
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    this.selectedIndex = -1;
    moveItemInArray(this.settingList, event.previousIndex, event.currentIndex);
  }

  selectPost(post: SettingPostAttribute) {
    this.thisSetting.postList.push(post.id);
    this.searchPostList = this.searchPostList.filter(s => s.id != post.id);
    this.selectedPostList.push(post);
  }

  deletePost(post: SettingPostAttribute, index: number) {
    this.thisSetting.postList.splice(index,1);
    this.searchPostList.push(post);
    this.searchPostList = [...this.searchPostList];
    this.selectedPostList.splice(index,1);
  }

  saveSettings() {
    if(this.thisSetting.priority === -1) {
      this.thisSetting.priority = this.settingList.length;
    }
    this.homeSettingService.save(this.thisSetting)
    .then(r => {
      this.getData();
      this.originSetting = _.cloneDeep(this.thisSetting);
      alert('Save completed!');
    })
  }

  saveOrder() {
    let settings = this.settingList.filter(s=>s.id).map(s => s.id);
    this.homeSettingService.saveOrder(settings)
    .then(r => {
      this.getData();
    })
  }

  changeCheck(setting: HomeSettingAttribute) {
    if(JSON.stringify(this.thisSetting) != JSON.stringify(this.originSetting)) {
      let answer = confirm('You didn\'t save the update, do you wanna go on?');
      if(answer) {
        this.settingList[this.selectedIndex] = _.cloneDeep(this.originSetting);
      }
      return answer;
    }
    return true;
  }
}

type SettingPostAttribute = {
  label: string
  categoryName: string
} & PostAttribute