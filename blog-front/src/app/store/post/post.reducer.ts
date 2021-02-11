import { createReducer, createSelector, on } from '@ngrx/store';
import { PostCategoriesAttribute } from '../../types/types';
import { setPostCategories } from './post.actions';
import { AppState } from '../index.reducer';

export const postCategory = [];

export interface  PostState {
  categories: PostCategoriesAttribute[]
}

export const postState = {
  categories: []
}

export const postReducer =  (state: any, action: any) => 
createReducer(
  postState,
  on(setPostCategories, (state, {categories}) => {
    return {...state, categories: categories};
  })
)(state, action);

export const selectPostCategories = createSelector(
  (state: AppState) => state.post,
  (state: PostState) => state.categories
);

export const selectNavCategories = createSelector(
  (state: AppState) => state.post,
  (state: PostState) => state.categories.filter(c => c.sideShow).map(c => ({ id: c.id, name: c.name }))
);

export const selectEditCategories = createSelector(
  (state: AppState) => state.post,
  (state: PostState) => state.categories.map(c => ({ id: c.id, name: c.name }))
);