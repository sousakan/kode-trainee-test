import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';

import homeReducer from '../features/Home/slice';
import { usersApi } from '../services/users';

const rootReducer = combineReducers({
  home: homeReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
