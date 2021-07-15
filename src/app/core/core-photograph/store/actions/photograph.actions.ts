import { createAction, props } from '@ngrx/store';
import { Photograph } from '../../interface';

export const GET_PHOTOGRAPH_START = '[photograph page] get photograph start';
export const GET_PHOTOGRAPH_SUCCESS =
  '[photograph page] get photograph success ';
export const GET_PHOTOGRAPH_FAIL = '[photograph page] get photograph fail';

export const getPhotographStart = createAction(GET_PHOTOGRAPH_START);
export const getPhotographSuccess = createAction(
  GET_PHOTOGRAPH_SUCCESS,
  props<{ photographs: Photograph[] }>()
);
export const getPhotographError = createAction(
  GET_PHOTOGRAPH_FAIL,
  props<{ message: string }>()
);
