import axios from '../../network/axiosConfig';
import { createAction } from '../AppActions';
import { AppThunk } from '../store';
// import { setNewStatusAction } from '../status/actions';
import {
  SET_SESSION,
  REMOVE_SESSION,
  RemoveSessionAction,
  SetSessionAction,
  SessionState,
} from './types';

export function login(
  email: string,
  password: string,
): AppThunk<Promise<void>> {
  return async (dispatch, getState): Promise<void> => {
    try {
      const sessionData = await axios.post('/login', {
        email,
        password,
      });
      const { message, ...data } = sessionData.data;

      dispatch(setNewSessionAction(data));

      // dispatch(
      //   setNewStatusAction({
      //     code: sessionData.status,
      //     message: sessionData.data.message,
      //   }),
      // );
    } catch (error) {
      throw error;
    }
  };
}

export function signUp(
  username: string,
  email: string,
  password: string,
): AppThunk<Promise<void>> {
  return async (dispatch, getState): Promise<void> => {
    try {
      const newUser = await axios.post('/users', {
        username,
        email,
        password,
      });

      const { message, ...data } = newUser.data;

      dispatch(setNewSessionAction(data));
    } catch (error) {
      throw error;
    }
  };
}

export const setNewSessionAction = (
  session: SessionState,
): SetSessionAction => {
  return createAction(SET_SESSION, session);
};

export const logout = (): RemoveSessionAction => createAction(REMOVE_SESSION);
