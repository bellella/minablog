import { NgModule } from "@angular/core";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { SettingService } from './admin/setting.service';
import { LoginService } from './other/login.service';
import { SnackbarService } from './other/snackbar.service';
import { UploadService } from './other/upload.service';
import { PostService } from './post/post.service';
import { HomeSettingService } from './admin/homeSetting.service';
import { PostCategoryService } from "./post/postCategory.service";

@NgModule({
    providers: [
        SnackbarService,
        PostService,
        PostCategoryService,
        UploadService,
        LoginService,
        SettingService,
        HomeSettingService
    ],
    imports: [
        MatSnackBarModule
    ]
})
export class ServiceModule {
}
