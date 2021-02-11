import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-post-left',
  templateUrl: './post-left.component.html',
  styleUrls: ['./post-left.component.scss']
})
export class PostLeftComponent implements OnInit {
  @Input() public post: PostAttribute;
  @Input() public catShow: boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  setContent(content: string): string {
    let newContent = content ? content.replace(/<[^>]*>/g, "") : '';
    return newContent.length > 180 ? newContent.substring(0,180) + '...' : newContent;
  }

}
