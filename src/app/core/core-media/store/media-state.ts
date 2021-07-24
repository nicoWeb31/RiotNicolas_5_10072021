import { Media } from '../interface';


export interface MediaState {
  medias: Media[];
  errMessage: string | null;
  loading: boolean;
}

export const initialState: MediaState = {
  medias:[],
  errMessage: null,
  loading: false,
};
