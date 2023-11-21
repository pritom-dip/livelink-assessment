import { configureStore, combineReducers } from '@reduxjs/toolkit';
import creatorReducer from '@/globalRedux/features/creator/CreatorSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { creatorApi } from './services/creatorApi';

export const store = configureStore({
  reducer: {
    creators: creatorReducer,
    [creatorApi.reducerPath]: creatorApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([creatorApi.middleware])
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
