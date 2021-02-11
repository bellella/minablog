import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/service/admin/setting.service';
import { SnackbarService } from 'src/app/service/other/snackbar.service';
import { SettingAttribute } from 'src/app/types/types';
import * as _ from 'lodash';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public settingList: SettingAttribute[] = [];
  public profile = {
    image: '',
    desciprtion: ''
  };
  public vacantSetting: SettingAttribute = {
    key: '',
    value: '',
    type: 'unique',
  }
  constructor(private settingService: SettingService,
    private snackbarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  setData() {
    this.profile.image = _.find(this.settingList,{ key : 'PROFILE_IMAGE' }).value;
    this.profile.desciprtion = _.find(this.settingList,{ key : 'PROFILE_DESCRIPTION' }).value;
    this.settingList = this.settingList.filter(s => s.type === 'unique');
  }

  getData() {
    this.settingService.list()
      .then(r => {
        this.settingList = r;
        this.setData();
      });
  }

  save() {
    this.settingService.save(this.settingList, this.profile.image, this.profile.desciprtion)
    .then(r => {
        alert('save complite~')
        this.getData();
    })
  }

  addSet() {
    this.settingList.push(Object.assign({}, this.vacantSetting));
  }

  deleteSet(index) {
    this.settingList.splice(index,1);
  }
}
