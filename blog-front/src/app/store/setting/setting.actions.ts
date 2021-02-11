import { createAction, props } from '@ngrx/store';
import { SettingState } from './setting.reducer';

export const setSettings = createAction('[Post] Set setting', props<SettingState>());