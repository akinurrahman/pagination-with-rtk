import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://www.googleapis.com/youtube/v3/";
const API_KEY = "AIzaSyDF8Wnqv0vuQH7CSB2G3Dl9KIxMJj3cxvU";

export const youtubeService = createApi({
  reducerPath: "youtubeService",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    videos: builder.query({
      query: ({ part, chart, maxResults = 20, regionCode, id, pageToken }) => ({
        url: "/videos",
        params: {
          part,
          id,
          chart,
          maxResults,
          regionCode,
          pageToken,
          key: API_KEY,
        },
      }),
    }),
    channels: builder.query({
      query: ({ part, id, maxResults = 20 }) => ({
        url: "/channels",
        params: { part, id, maxResults, key: API_KEY },
      }),
    }),

    search: builder.query({
      query: ({
        part,
        maxResults,
        q,
        type,
        eventType,
        videoDuration,
        channelId,
      }) => ({
        url: "/search",
        params: {
          part,
          maxResults,
          q,
          type,
          eventType,
          videoDuration,
          channelId,
          key: API_KEY,
        },
      }),
    }),

    commentThreads: builder.query({
      query: ({ part, videoId, maxResults }) => ({
        url: "/commentThreads",
        params: { part, videoId, maxResults, key: API_KEY },
      }),
    }),
    playlists: builder.query({
      query: ({ part, id, maxResults, channelId }) => ({
        url: "/playlists",
        params: { part, id, maxResults, channelId, key: API_KEY },
      }),
    }),

    playlistItems: builder.query({
      query: ({ part, playlistId, maxResults }) => ({
        url: "/playlistItems",
        params: { part, playlistId, maxResults, key: API_KEY },
      }),
    }),
  }),
});

export const {
  useVideosQuery,
  useChannelsQuery,
  useSearchQuery,
  useCommentThreadsQuery,
  usePlaylistsQuery,
  usePlaylistItemsQuery,
} = youtubeService;
