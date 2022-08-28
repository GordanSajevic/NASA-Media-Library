import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from './CollectionSlice';
import itemReducer from './ItemSlice';

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
    item: itemReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch