import { ActionReducer, combineReducers } from "@ngrx/store";
import { postReducer, PostState } from "./post/post.reducer";
import { settingReducer, SettingState } from "./setting/setting.reducer";

export interface AppState {
    post: PostState,
    setting: SettingState
}

export const reducers = {
    post: postReducer,
    setting: settingReducer
};

const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}