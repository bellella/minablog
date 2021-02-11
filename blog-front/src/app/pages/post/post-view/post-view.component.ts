import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/other/login.service';
import { PostService } from 'src/app/service/post/post.service';
import { PostAttribute, PostRepliesAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostViewComponent implements OnInit {
  public id: string;
  public recommendList: PostAttribute[];
  public post: PostAttribute = {
    title: '',
    category: {
      id: 0,
      name: ''
    },
    thumbnail: '',
    content: '',
    show: false,
    tags: []
  }
  public isAdmin: boolean = false;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    public router: Router,
    private loginService: LoginService) {
    // this.id = route.snapshot.params.id || null;
    route.params.subscribe(r => {
      this.id = r.id || null;
      this.getData();
    })
  }

  async ngOnInit() {
    this.isAdmin = await this.loginService.isAdmin();
  }

  async getData() {
    this.post = await this.postService.view(this.id);
    this.recommendList = await this.postService.recommendList(this.id, this.post.categoryId, this.post.tags.map(t => t.name));
  }

}
