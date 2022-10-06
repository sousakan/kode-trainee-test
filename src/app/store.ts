import { combineReducers, configureStore } from '@reduxjs/toolkit';

import homeReducer from '../features/Home/slice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
