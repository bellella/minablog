import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/service/post/post.service';
import { PostAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-post-cat-list',
  templateUrl: './post-cat-list.component.html',
  styleUrls: ['./post-cat-list.component.scss']
})
export class PostCatListComponent implements OnInit {

  public postList: PostAttribute[] = [];
  public type: string;
  public categoryId: string;
  public isEmpty: boolean = false;
  constructor(private postService: PostService,
    route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(r => {
      this.categoryId = r.categoryId || null;
      this.searchData();
    })
  }

  ngOnInit(): void {
  }
  searchData() {
      this.postService.categorizedList(this.categoryId)
      .then(r => {
        if(r.length == 0) {
          this.isEmpty = true;
        }else {
          this.isEmpty = false;
        }
        this.postList = r;
        //this.postService.loadingSub$.next('finished');
      });
  }
}
