import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
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