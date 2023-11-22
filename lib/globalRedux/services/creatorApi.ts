import { ICreator } from '@/types/creator';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const creatorApi = createApi({
    reducerPath: 'creatorApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    endpoints: builder => ({
        getCreators: builder.query<{ data: ICreator[] }, null>({
            query: () => '/'
        }),
        getCreatorById: builder.query<{ data: ICreator }, { id: string }>({
            query: ({ id }) => `creator?id=${id}`
        })
    })
});

export const { useGetCreatorsQuery, useGetCreatorByIdQuery } = creatorApi;
