import { photograph } from "../interface";



export interface PhotographState {
  photographs: photograph[] | null;
  errMessage: string | null;
  loading: boolean;
}

export const initialState: PhotographState = {
  photographs: null,
  errMessage: null,
  loading: false,
};
