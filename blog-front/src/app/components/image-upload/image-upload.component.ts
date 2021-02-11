import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadService } from 'src/app/service/other/upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Input()
  public imageThumbnail: string = '';
  @Output()
  public upload = new EventEmitter();
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }
  
  processFile(imageFile: File) {
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      const uploadData = new FormData();
      uploadData.append('file', imageFile, imageFile.name);
      this.uploadService.uploadImage(uploadData)
        .then(r => {
            this.imageThumbnail = r.imageUrl;
            this.upload.emit(r.imageUrl);
        });
    });
    reader.readAsDataURL(imageFile);
  }
}
