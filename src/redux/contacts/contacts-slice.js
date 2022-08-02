import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62de460079b9f8c30ab61bac.mockapi.io',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } 
      return headers;
    },
  }),
  //refetchOnMountOrArgChange: true,

  tagTypes: ['contacts'],
  endpoints(build) {
    return {
      getContacts: build.query({
        query: () => ({
          url: '/contacts',
          method: 'GET',
        }),
        providesTags: ['contacts'],
      }),
      addContact: build.mutation({
        query: value => ({
          url: '/contacts',
          method: 'POST',
          body: {
            name: value.name,
            number: value.number,
          },
        }),
        invalidatesTags: ['contacts'],
      }),
      deleteContact: build.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['contacts'],
      }),
    };
  },
});


export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;