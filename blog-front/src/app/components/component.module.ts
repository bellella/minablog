import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PagenationComponent } from './pagenation/pagenation.component';
import { EditorComponent } from './editor/editor.component';
import { PostReplyComponent } from './post/post-reply/post-reply.component';
import { FormsModule } from '@angular/forms';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { UiModule } from '../shared/ui.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { PostMiddleComponent } from './post/post-middle/post-middle.component';
import { PostLeftComponent } from './post/post-left/post-left.component';
import { PostMainComponent } from './post/post-main/post-main.component';
import { PostMetaComponent } from './post/post-meta/post-meta.component';

@NgModule({
  declarations: [
    ModalComponent,
    PostLeftComponent,
    PagenationComponent,
    EditorComponent,
    PostReplyComponent,
    PostEditComponent,
    ImageUploadComponent,
    TableComponent,
    TableRowComponent,
    PostMiddleComponent,
    PostMainComponent,
    PostMetaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
  ],
  exports: [
    ModalComponent,
    PostLeftComponent,
    PagenationComponent,
    EditorComponent,
    PostReplyComponent,
    PostEditComponent,
    ImageUploadComponent,
    TableComponent,
    TableRowComponent,
    PostMiddleComponent,
    PostMainComponent,
    PostMetaComponent
  ]
})
export class ComponentModule { }
