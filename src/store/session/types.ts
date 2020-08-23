import { Action } from '../AppActions';

export const SET_SESSION = 'session/SET_SESSION';
export const REMOVE_SESSION = 'session/REMOVE_SESSION';

export interface IUser {
  id: number;
  email: string;
  username: string;
  createdAt: Date;
}

export interface SessionState {
  token: string;
  user: IUser;
}

export type SetSessionAction = Action<typeof SET_SESSION, SessionState>;

export type RemoveSessionAction = Action<typeof REMOVE_SESSION, void>;

export type SessionActionTypes = SetSessionAction | RemoveSessionAction;
