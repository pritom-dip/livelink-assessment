import { ICreator } from '@/types/creator';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const creatorApi = createApi({
  reducerPath: 'creatorApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: builder => ({
    getCreators: builder.query<ICreator[], null>({
      query: () => '/api'
    }),
    getCreatorById: builder.query<ICreator, { id: string }>({
      query: ({ id }) => `users/${id}`
    })
  })
});

export const { useGetCreatorsQuery, useGetCreatorByIdQuery } = creatorApi;
