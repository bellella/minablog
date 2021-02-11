import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SettingService } from 'src/app/service/admin/setting.service';
import { PostService } from 'src/app/service/post/post.service';
import { AppState } from 'src/app/store/index.reducer';
import { selectProfileDescription } from 'src/app/store/setting/setting.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profile$: Observable<String>;
  constructor(
    private store: Store<AppState>
    ) {
    this.profile$ = store.select(selectProfileDescription);
    }
  ngOnInit(): void {
  }

}
