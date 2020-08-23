import {
  ImageActionTypes,
  SET_ALL_IMAGES,
  IImage,
  SET_IMAGE_LIKE,
  REMOVE_IMAGE_LIKE,
} from './types';

const initialState: IImage[] = [];

export const imageReducer = (
  state = initialState,
  action: ImageActionTypes,
): IImage[] => {
  switch (action.type) {
    case SET_ALL_IMAGES: {
      if (action.payload) {
        return [...state, ...action.payload];
      } else {
        return state;
      }
    }
    case SET_IMAGE_LIKE: {
      return state.map((image) => {
        if (action.payload && image.id === action.payload.imageId) {
          image.likes = [...image.likes, action.payload];
          return image;
        } else {
          return image;
        }
      });
    }
    case REMOVE_IMAGE_LIKE: {
      return state.map((image) => {
        if (image.id === action.payload?.imageId) {
          return {
            ...image,
            likes: image.likes.filter(
              (like) => like.id !== action.payload?.likeId,
            ),
          };
        } else {
          return image;
        }
      });
    }
    default: {
      return state;
    }
  }
};
