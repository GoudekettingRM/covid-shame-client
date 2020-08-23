import { combineReducers } from 'redux';
import { sessionReducer } from './session/reducer';
import { imageReducer } from './image/reducer';
// import { statusReducer } from './status/reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  images: imageReducer,
  // status: statusReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
