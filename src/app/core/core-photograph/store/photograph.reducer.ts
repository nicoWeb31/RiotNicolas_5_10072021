import { createReducer } from '@ngrx/store';
import { initialPhotographState } from './photograph.state';




const _photographReducer = createReducer(
  initialPhotographState,
);

export const photographReducer = (state: any, action: any) => {
  return _photographReducer(state, action);
};
