import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const placeholderRTK = createApi({
  reducerPath: "placeholderRTK",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (page) => `posts?_limit=10&_page=${page}`,
    }),
  }),
});

export const { useGetDataQuery } = placeholderRTK;
