import { AppState } from './rootReducer';
import { IImage } from './image/types';

export const select = {
  token: (state: AppState): string => {
    return state.session.token;
  },
  allImages: (state: AppState): IImage[] => {
    return state.images;
  },
  userId: (state: AppState): number => {
    return state.session.user.id;
  },
};
