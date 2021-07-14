import { MediaState } from '../media-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const MEDIA_STATE_NAME = 'media';

const getMediaState = createFeatureSelector<MediaState>(MEDIA_STATE_NAME);

export const getAllMedias = createSelector(getMediaState, (state) => {
  return state.medias;
});
