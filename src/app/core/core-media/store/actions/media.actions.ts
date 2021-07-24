import { createAction, props } from '@ngrx/store';
import { Media } from '../../interface';

export const GET_MEDIA_START = '[media page] get media start';
export const GET_MEDIA_SUCCESS = '[media page] get media success ';
export const GET_MEDIA_FAIL = '[media page] get media fail';


export const ADD_LIKE = '[media card] add like to media';

export const getMediaStart = createAction(GET_MEDIA_START);
export const getMediaSuccess = createAction(
  GET_MEDIA_SUCCESS,
  props<{ media: Media[] }>()
);
export const getMediaError = createAction(
  GET_MEDIA_FAIL,
  props<{ message: string }>()
);

export const addLikeMedia  = createAction(ADD_LIKE, props<{ id : number }>())
