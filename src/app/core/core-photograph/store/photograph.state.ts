import { Photograph } from "../interface";

export interface PhotographState {
  photographs: Photograph[];
  errMessage: string | null;
  loading: boolean;
}

export const initialPhotographState: PhotographState = {
  photographs: [],
  errMessage: null,
  loading: false,
};
