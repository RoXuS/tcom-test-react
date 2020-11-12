import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { live, LiveState } from './live';
import { app, AppState } from './app';

export interface RootReducer {
  live: LiveState;
  app: AppState;
}

const rootReducer = combineReducers({
  live: live.reducer,
  app: app.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
