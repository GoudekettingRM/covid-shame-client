import {
  SessionActionTypes,
  SET_SESSION,
  REMOVE_SESSION,
  SessionState,
} from './types';

const initialState: SessionState = {
  token: '',
  user: {
    id: 0,
    email: '',
    username: '',
    createdAt: new Date(),
  },
};

export const sessionReducer = (
  state = initialState,
  action: SessionActionTypes,
): SessionState => {
  switch (action.type) {
    case SET_SESSION: {
      if (action.payload) {
        return {
          ...state,
          ...action.payload,
        };
      } else {
        return state;
      }
    }
    case REMOVE_SESSION: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
