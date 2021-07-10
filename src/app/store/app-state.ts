import { MediaState } from '../core/core-media/store/media-state';
import { mediaReducer } from '../core/core-media/store/media.reducer';
import { MEDIA_STATE_NAME } from '../core/core-media/store/selectors/media.selector';

export interface AppState {
  [MEDIA_STATE_NAME]: MediaState;
}

export const appReducer = {
  [MEDIA_STATE_NAME]: mediaReducer,
};
