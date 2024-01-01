import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://www.googleapis.com/youtube/v3/";
const API_KEY = "AIzaSyDF8Wnqv0vuQH7CSB2G3Dl9KIxMJj3cxvU";

export const youtubeServices = createApi({
  reducerPath: "youtubeServices",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    video: builder.query({
      query: ({ part, chart, maxResults = 20, regionCode, id, pageToken }) => ({
        url: "/videos",
        params: {
          part,
          chart,
          maxResults,
          regionCode,
          id,
          pageToken,
          key: API_KEY,
        },
      }),
    }),
  }),
});

export const { useVideoQuery } = youtubeServices;
