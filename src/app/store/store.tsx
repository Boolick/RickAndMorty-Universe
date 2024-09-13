import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../../shared/api/apiSlice';
import charactersReducer from '../../entities/Card/model/characterSlice';
import { likesReducer, deleteReducer } from '../../features/index';

const store = configureStore({
  reducer: {
    character: charactersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    likes: likesReducer,
    delete: deleteReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
