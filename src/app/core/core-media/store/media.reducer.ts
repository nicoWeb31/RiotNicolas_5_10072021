import { createReducer, on } from '@ngrx/store';

import {
  addLikeMedia,
  getMediaError,
  getMediaStart,
  getMediaSuccess,
} from './actions/media.actions';
import { initialState, MediaState } from './media-state';

/* --------------------------------- FIXME:--------------------------------- */

const _mediaReducer = createReducer(
  initialState,
  on(getMediaStart, (state: MediaState) => {
    return {
      ...state,
    };
  }),
  on(getMediaSuccess, (state: MediaState, action: any) => {
    return {
      ...state,
      medias: action.media,
    };
  }),
  on(getMediaError, (state: MediaState, action: any) => {
    return {
      ...state,
      errMessage: action.message,
    };
  }),
  on(addLikeMedia, (state: MediaState, action: any) => {
    return {
      ...state,
      medias: state.medias.map((media) => {
        if (media.id === action.id) {
          const newMed = {...media};
          newMed.likes = media.likes + 1 ;
          return newMed;
        }
        return media;
      }),
    };
  })
);

export const mediaReducer = (state: any, action: any) => {
  return _mediaReducer(state, action);
};
