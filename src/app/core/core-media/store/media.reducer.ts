import { createReducer } from '@ngrx/store';
import { initialState } from './media-state';

/* --------------------------------- FIXME:--------------------------------- */

const _mediaReducer = createReducer(
  initialState,

);

export const mediaReducer = (state: any, action: any) => {
  return _mediaReducer(state, action);
};
