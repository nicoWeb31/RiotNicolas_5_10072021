import { createReducer, on } from '@ngrx/store';
import { initialPhotographState, PhotographState } from './photograph.state';
import * as photographActions from './actions';

const _photographReducer = createReducer(
  initialPhotographState,
  on(photographActions.getPhotographStart, (state: PhotographState) => {
    return {
      ...state,
    };
  }),
  on(
    photographActions.getPhotographSuccess,
    (state: PhotographState, action) => {
      return {
        ...state,
        photographs: action.photographs,
      };
    }
  ),
  on(photographActions.getPhotographError, (state: PhotographState, action) => {
    return {
      ...state,
      errMessage: action.message,
    };
  })
);

export const photographReducer = (state: any, action: any) => {
  return _photographReducer(state, action);
};
