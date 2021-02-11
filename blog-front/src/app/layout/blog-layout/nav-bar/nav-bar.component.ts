import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/index.reducer';
import { selectNavCategories } from 'src/app/store/post/post.reducer';
import { selectHeaderTitle } from 'src/app/store/setting/setting.reducer';
import { PostCategoriesAttribute } from 'src/app/types/types';

@Component({
    selector: "nav-bar",
    templateUrl: "./nav-bar.component.html",
    styleUrls: ["./nav-bar.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit{
    public categoryList$: Observable<PostCategoriesAttribute[]>;
    public headerTitle$: Observable<string>;
    
    constructor(
        public router: Router,
        private store: Store<AppState>
        ) {
        this.categoryList$ = store.select(selectNavCategories);
        this.headerTitle$ = store.select(selectHeaderTitle);
    }

    ngOnInit() {
    }
}
