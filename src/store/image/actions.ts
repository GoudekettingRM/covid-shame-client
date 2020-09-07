import { AppThunk } from '../store';
import { createAction } from '../AppActions';
import axios from '../../network/axiosConfig';

import {
  SET_ALL_IMAGES,
  IImage,
  ILike,
  SET_IMAGE_LIKE,
  REMOVE_IMAGE_LIKE,
  RemoveImageLikeActionType,
  SetImageLikeActionType,
  SetAllImagesActionType,
} from './types';

export function getAllImages(setting: string): AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/images?sort=${setting}`);
      console.log('data', data);

      dispatch(setAllImagesAction(data.images));
    } catch (error) {
      throw error;
    }
  };
}

export function likeImage(imageId: number): AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post('/likes', { imageId });
      dispatch(setImageLikeAction(data.likeData));
    } catch (error) {
      throw error;
    }
  };
}

export function undoImageLike(
  likeId: number,
  imageId: number,
): AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.delete(`/likes/${likeId}`);
      console.log('data', data);
      dispatch(removeImageLikeAction(likeId, imageId));
    } catch (error) {
      throw error;
    }
  };
}

export const removeImageLikeAction = (
  likeId: number,
  imageId: number,
): RemoveImageLikeActionType => {
  return createAction(REMOVE_IMAGE_LIKE, { likeId, imageId });
};
export const setImageLikeAction = (like: ILike): SetImageLikeActionType => {
  return createAction(SET_IMAGE_LIKE, like);
};
export const setAllImagesAction = (
  images: IImage[],
): SetAllImagesActionType => {
  return createAction(SET_ALL_IMAGES, images);
};
