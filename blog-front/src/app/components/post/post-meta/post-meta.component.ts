import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-meta',
  templateUrl: './post-meta.component.html',
  styleUrls: ['./post-meta.component.scss']
})
export class PostMetaComponent implements OnInit {
  @Input()
  public createdAt;
  @Input()
  public viewCount;
  @Input()
  public replyCount;

  constructor() { }

  ngOnInit(): void {
  }

}
