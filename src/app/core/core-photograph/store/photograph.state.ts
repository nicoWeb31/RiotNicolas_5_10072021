import { photograph } from "../interface";

export interface PhotographState {
  photographs: photograph[] | null;
  errMessage: string | null;
  loading: boolean;
}

export const initialPhotographState: PhotographState = {
  photographs: null,
  errMessage: null,
  loading: false,
};
