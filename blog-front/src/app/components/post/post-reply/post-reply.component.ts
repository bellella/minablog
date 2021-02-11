import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/service/other/snackbar.service';
import { PostService } from 'src/app/service/post/post.service';
import { PostRepliesAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.scss']
})
export class PostReplyComponent implements OnInit {
  @Input()
  public postId; 
  public reply: PostRepliesAttribute;
  public replyVacant: PostRepliesAttribute = {
    id: 0,
    user_name: '',
    content: '',
    ip: '',
    show: 1
  }
  public replyList: PostRepliesAttribute[] = [];
  constructor(private postService: PostService,
    private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.reply = Object.assign({ post_id: this.postId },this.replyVacant);
    this.getReplyList();
  }

  getReplyList() {
    this.postService.replyList(this.postId)
    .then(r => {
      this.replyList = r;
      console.log(r,'reply');
    });
  }

  saveReply() {
    this.postService.saveReply(this.reply)
    .then(r => {
      this.snackbarService.saveSnack('Thank You For Your Sweet Comment!🍓')
      this.reply = Object.assign({},this.replyVacant);
      this.getReplyList();
    })
  }

}
