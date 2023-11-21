import { ICreator } from '@/types/creator';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const creatorApi = createApi({
  reducerPath: 'creatorApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: builder => ({
    getCreators: builder.query<ICreator[], null>({
      query: () => 'users'
    }),
    getCreatorById: builder.query<ICreator, { id: string }>({
      query: ({ id }) => `users/${id}`
    })
  })
});

export const { useGetCreatorsQuery, useGetCreatorByIdQuery } = creatorApi;
