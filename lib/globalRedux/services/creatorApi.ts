import { ICreator } from '@/types/creator';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const creatorApi = createApi({
  reducerPath: 'creatorApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api'
  }),
  endpoints: builder => ({
    getCreators: builder.query<ICreator[], null>({
      query: () => '/'
    }),
    getCreatorById: builder.query<ICreator, { id: string }>({
      query: ({ id }) => `creator?id=${id}`
    })
  })
});

export const { useGetCreatorsQuery, useGetCreatorByIdQuery } = creatorApi;
