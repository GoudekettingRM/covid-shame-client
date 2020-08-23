import { SessionActionTypes } from './session/types';
import { ImageActionTypes } from './image/types';
// import { StatusActionTypes } from './status/types';

export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export function createAction<T extends string, P>(
  type: T,
  payload?: P,
): Action<T, P> {
  return { type, payload };
}

export type AppActions = SessionActionTypes | ImageActionTypes;
//  | StatusActionTypes;
