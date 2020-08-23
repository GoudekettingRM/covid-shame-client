import { Action } from '../AppActions';

export interface ILike {
  id: number;
  imageId: number;
  userId: number;
  createdAd: Date;
  updatedAt: Date;
}

export interface IImage {
  id: number;
  imageUrl: string;
  author: string;
  location: string;
  cloudinaryId: string;
  likes: ILike[];
  createdAt: Date;
}

export const SET_ALL_IMAGES = 'image/SET_ALL_IMAGES';
export const SET_SELECTED_IMAGE = 'image/SET_SELECTED_IMAGE';
export const SET_IMAGE_LIKE = 'image/SET_IMAGE_LIKE';
export const REMOVE_IMAGE_LIKE = 'image/REMOVE_IMAGE_LIKE';

export type SetAllImagesActionType = Action<typeof SET_ALL_IMAGES, IImage[]>;
export type SetSelectedImageActionType = Action<
  typeof SET_SELECTED_IMAGE,
  IImage
>;
export type SetImageLikeActionType = Action<typeof SET_IMAGE_LIKE, ILike>;
export type RemoveImageLikeActionType = Action<
  typeof REMOVE_IMAGE_LIKE,
  { likeId: number; imageId: number }
>;

export type ImageActionTypes =
  | SetAllImagesActionType
  | SetSelectedImageActionType
  | SetImageLikeActionType
  | RemoveImageLikeActionType;
