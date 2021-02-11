import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post/post.service';
import { PostAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public postList: PostAttribute[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.postList = await this.postService.list();
  }

}
