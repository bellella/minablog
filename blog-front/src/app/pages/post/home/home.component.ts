import { Component, OnInit } from '@angular/core';
import { HomeSettingService } from 'src/app/service/admin/homeSetting.service';
import { HomeSettingAttribute } from 'src/app/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public homeSettingList: HomeSettingAttribute[] = [];
  constructor(private homeSettingService: HomeSettingService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.homeSettingService.setPosts()
    .then(r => {
      this.homeSettingList = r;
      console.log(r,'home result')
    })
  }

}
