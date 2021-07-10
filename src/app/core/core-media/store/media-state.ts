import { Media } from '../interface';


export interface MediaState {
  medias: Media[] | null;
  errMessage: string | null;
  loading: boolean;
}

export const initialState: MediaState = {
  medias: null,
  errMessage: null,
  loading: false,
};
