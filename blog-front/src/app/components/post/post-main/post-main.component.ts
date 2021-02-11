import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss']
})
export class PostMainComponent implements OnInit {
  @Input() public post: PostAttribute;
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.post,'post~~')
  }

  setContent(content: string): string {
    let newContent = content ? content.replace(/<[^>]*>/g, "") : '';
    return newContent.length > 140 ? newContent.substring(0,140) + '...' : newContent;
  }
}
