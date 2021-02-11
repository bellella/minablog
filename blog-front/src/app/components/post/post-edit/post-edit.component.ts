import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { PostService } from 'src/app/service/post/post.service';
import { PostAttribute, PostCategoriesAttribute } from 'src/app/types/types';
import { ImageHandler, Options } from 'ngx-quill-upload';
import Quill from 'quill';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { COMMA, ENTER, P } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectPostCategories } from 'src/app/store/post/post.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/index.reducer';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostEditComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent;
  public post: PostAttribute;
  public editPost: PostAttribute;
  public categoryList$: Observable<PostCategoriesAttribute[]>;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public tagInput: string = '';
  public vacantPost: PostAttribute = {
    title: '',
    categoryId: null,
    thumbnail: '',
    content: '',
    show: null,
    tags: []
  }
  public thumbnailList = [];
  public editContent: object;
  @ViewChild('Modal') Modal: ElementRef;
  @Output()
  public saveEvent = new EventEmitter();

  constructor(private postService: PostService,
    private modalService: NgbModal,
    private router: Router,
    private store: Store<AppState>) {
    this.categoryList$ = store.select(selectPostCategories);
  }
  ngOnInit(): void {
    Quill.register('modules/imageHandler', ImageHandler);
    this.post = this.vacantPost;
  }

  open() {
    this.post = this.vacantPost;
    this.modalService.open(this.Modal, { size: 'lg' });
  }
  editOpen(post: PostAttribute) {
    this.post = Object.assign({}, post);
    this.setData();
    this.modalService.open(this.Modal, { size: 'lg' });
  }
  close() {
    this.modalService.dismissAll();
  }

  setData() {
    this.post.tags = this.post.tags.map(t => t.name);
    var div = document.createElement('div');
    div.innerHTML = this.post.content;
    div.querySelectorAll('img').forEach(l => {
      this.thumbnailList.push(l.src);
    })
  }

  save() {
    if (this.post.id) {
      this.postService.edit(this.post)
        .then(() => {
          window.location.reload();
          this.close();
        });
    } else {
      this.postService.save(this.post)
        .then(() => {
          this.router.navigate(['post']);
          this.close();
        });
    }
  }
  selectThumb(image: string) {
    this.post.thumbnail = image;
  }

  addThumbnail(image: any) {
    this.thumbnailList.push(image);
    if (this.thumbnailList.length == 1) {
      this.post.thumbnail = image;
    }
  }

  titi(string) {
    console.log(string,'string!!!')
    return string;
  }

}
