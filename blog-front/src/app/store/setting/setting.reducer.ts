import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { SettingAttribute } from '../../types/types';
import { AppState } from '../index.reducer';
import { setSettings } from './setting.actions';

export interface  SettingState {
  settingList: SettingAttribute[]
  profileImage: string
  profileDescription: string
  profileText: string
}

export const settingState = {
  settingList: [],
  profileImage: '',
  profileDescription: '',
  profileText: ''
}

export const settingReducer =  (state: any, action: any) => 
createReducer(
  settingState,
  on(setSettings, (state, payload) => {
    console.log(payload,'payload')
    return {...state, ...payload};
  })
)(state, action);

export const getSettingState = createFeatureSelector<SettingState>('setting');

export const selectProfileImage= createSelector(
  (state: AppState) => state.setting,
  (state: SettingState) => state.profileImage
);

export const selectProfileDescription = createSelector(
  (state: AppState) => state.setting,
  (state: SettingState) => state.profileDescription
);

export const selectProfile = createSelector(
  (state: AppState) => state.setting,
  (state: SettingState) => ({text: state.profileText, image: state.profileImage})
);

export const selectHeaderTitle = createSelector(
  (state: AppState) => state.setting,
  (state: SettingState) => {
    if(state.settingList.length == 0) {
      return '';
    }
    let titles = state.settingList.find(s => s.key === 'HEADER_TITLE').value.split(',');
    let randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  }
);