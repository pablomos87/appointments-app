import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailApi = createApi({
    
  reducerPath: 'emailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
        query: (userAppointmentData) => ({
            url:'/email',
          method: "POST",
          body: userAppointmentData,
        }),
      }),
  }),
});

export const { useSendEmailMutation } = emailApi;
