import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-post-middle',
  templateUrl: './post-middle.component.html',
  styleUrls: ['./post-middle.component.scss']
})
export class PostMiddleComponent implements OnInit {
  @Input() public post: PostAttribute;
  @Input() public catShow: boolean = true;
  @Input() public textShow: boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  setContent(content: string): string {
    let length = this.post.thumbnail ? 25 : 100;
    let newContent = content ? content.replace(/<[^>]*>/g, "") : '';
    return newContent.length > length ? newContent.substring(0,length) + '...' : newContent;
  }


}
