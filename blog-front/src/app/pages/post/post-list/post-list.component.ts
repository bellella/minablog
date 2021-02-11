import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PostService } from 'src/app/service/post/post.service';
import { PostAttribute } from 'src/app/types/types';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public postList: PostAttribute[];
  public type: string;
  public value: string;
  public isEmpty: boolean = false;
  constructor(private postService: PostService,
    route: ActivatedRoute,
    private router: Router) {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    route.params.subscribe(r => {
      this.type = r.type || null;
      this.value = r.value || null;
      this.searchData();
    })
  }

  ngOnInit(): void {
  }

  getData() {
  }

  searchData() {
    console.log(this.type,'tpye',this.value)
    this.postService.searchList(this.type, this.value)
      .then(r => {
        if(r.length == 0) {
          this.isEmpty = true;
        }else {
          this.isEmpty = false;
        }
        this.postList = r;
      });
    //this.postService.loadingSub$.next('loading');
    // if(!this.type) {
    //   this.postService.list()
    //   .then(r => {
    //     this.postList = r;
    //     //this.postService.loadingSub$.next('finished');
    //   });
    // } else {
    //   this.postService.searchList(this.type, this.value)
    //   .then(r => {
    //     console.log(r,'postlist,,')
    //     this.postList = r;
    //   });
    // }
  }
}
