import { MediaState } from '../core/core-media/store/media-state';
import { mediaReducer } from '../core/core-media/store/media.reducer';
import { MEDIA_STATE_NAME } from '../core/core-media/store/selectors/media.selector';
import { PhotographState } from '../core/core-photograph/store/photograph.state';
import { PHOTOGRAPH_STATE_NAME } from '../core/core-photograph/store/selectors';

export interface AppState {
  [MEDIA_STATE_NAME]: MediaState;
  [PHOTOGRAPH_STATE_NAME] : PhotographState;
}

export const appReducer = {
  [MEDIA_STATE_NAME]: mediaReducer,
  [PHOTOGRAPH_STATE_NAME] : 
};
