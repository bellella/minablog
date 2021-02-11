import { createAction, props } from '@ngrx/store';
import { PostState } from './post.reducer';

export const setPostCategories = createAction('[Post] Set categories', props<PostState>());