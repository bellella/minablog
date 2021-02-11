import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { ImageHandler, Options } from 'ngx-quill-upload';
import Quill from 'quill';
import { UploadService } from 'src/app/service/other/upload.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  public imageList: string[] = Array(0).fill(0);
  @Output()
  public imageEvent = new EventEmitter();
  @Input()
  public content: string = '';
  @Input()
  public height: number = 300;
  @Output()
  public contentChange = new EventEmitter();

  public modules: QuillModule = {
    imageHandler: {
      upload: async (file) => {
        const uploadData = new FormData();
        uploadData.append('file', file, file.name);
       return this.uploadService.uploadImage(uploadData)
       .then(r => {
         this.imageList.push(r.imageUrl);
         this.imageEvent.emit(r.imageUrl);
         return r.imageUrl;
       }).catch(e => { console.log(e); });
      },
      accepts: ['png', 'jpg', 'jpeg', 'jfif'] // Extensions to allow for images (Optional) | Default - ['jpg', 'jpeg', 'png']
    } as Options
  };
  
  constructor(private uploadService: UploadService,
    private elRef: ElementRef) {
    Quill.register('modules/imageHandler', ImageHandler);
  }

  ngOnInit(): void {
    this.elRef.nativeElement.style.setProperty('--blog-editor-width', this.height);
  }

  ngAfterContentInit() {
  }

}
