import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../../shared/api/apiSlice';
import charactersReducer from '../../entities/Card/model/characterSlice';

const store = configureStore({
  reducer: {
    character: charactersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
