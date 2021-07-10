import { MediaState } from "../media-state";
import { createFeatureSelector } from '@ngrx/store';



export const MEDIA_STATE_NAME = 'media';

const getProductState = createFeatureSelector<MediaState>(MEDIA_STATE_NAME);
