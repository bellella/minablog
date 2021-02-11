import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/service/other/snackbar.service';
import { PostService } from 'src/app/service/post/post.service';
import { PostCategoryService } from 'src/app/service/post/postCategory.service';
import { PostCategoriesAttribute } from 'src/app/types/types';
import * as _ from 'lodash';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categoryList: PostCategoriesAttribute[];
  public thisCateogry: PostCategoriesAttribute;
  public deletedList: number[] = [];
  public selectedIndex: number = -1;
  public vacantCategory: PostCategoriesAttribute = {
    name: '',
    priority: -1,
    show: false,
    sideShow: false
  }
  constructor(private postCategoryService: PostCategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.thisCateogry = Object.assign({},this.vacantCategory);
    this.deletedList.length = 0;
    this.postCategoryService.adminList()  
      .then(r => {
        this.categoryList = r;
      });
  }

  selectCategory(category: PostCategoriesAttribute, index) {
    this.selectedIndex = index;
    this.thisCateogry = category;
  }

  addCategory() {
    this.categoryList.push(_.cloneDeep({...this.vacantCategory, name: 'New category'}));
  }

  deleteCategory() {
    if(this.selectedIndex === -1) {
      return;
    }
    if(this.thisCateogry.id) {
      this.deletedList.push(this.thisCateogry.id);
    }
    this.categoryList.splice(this.selectedIndex,1);
    this.selectedIndex = -1;
  }

  editCategoryList() {
    this.postCategoryService.edit(this.categoryList, this.deletedList)
      .then(r => {
        
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categoryList, event.previousIndex, event.currentIndex);
  }

}
