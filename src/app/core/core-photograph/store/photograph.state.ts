import { Photograph } from "../interface";

export interface PhotographState {
  photographs: Photograph[] | null;
  errMessage: string | null;
  loading: boolean;
}

export const initialPhotographState: PhotographState = {
  photographs: null,
  errMessage: null,
  loading: false,
};
