import { Component, ViewEncapsulation } from '@angular/core';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector     : 'content',
  templateUrl  : './content.component.html',
  styleUrls    : ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent {
  public status: string = 'loading';
  constructor(private postService: PostService) { 

  }
}
