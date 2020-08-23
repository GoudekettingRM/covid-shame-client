import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { rootReducer, AppState } from './rootReducer';
import { AppActions } from './AppActions';
import ReduxThunk, { ThunkMiddleware, ThunkAction } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session', 'loggedInUser'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer: StoreEnhancer = compose(
  applyMiddleware(ReduxThunk as ThunkMiddleware<AppState, AppActions>),
  devTools,
);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AppActions
>;

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
