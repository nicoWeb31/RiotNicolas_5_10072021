
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotographState } from '../photograph.state';

export const PHOTOGRAPH_STATE_NAME = 'photograph';

const getPhotoGraphState = createFeatureSelector<PhotographState>(PHOTOGRAPH_STATE_NAME);

export const getPhotograph = createSelector(getPhotoGraphState, (state) => {
  return state.photographs;
});

export const photographById = ( id : number ) => createSelector(getPhotoGraphState, (state : PhotographState) => {
  return state.photographs.find(photograph => photograph.id === id);
})
