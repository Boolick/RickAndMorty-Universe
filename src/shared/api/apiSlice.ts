import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharactersResponse } from 'entities/Card/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    fetchCards: builder.query<CharactersResponse, void>({
      query: () => 'character',
    }),
  }),
});

export const { useFetchCardsQuery } = apiSlice;
