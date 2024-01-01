import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (page) => `posts?_limit=10&_page=${page}`,
    }),
  }),
});

export const { useGetDataQuery } = pokemonApi;
