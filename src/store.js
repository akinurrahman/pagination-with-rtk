import { configureStore } from "@reduxjs/toolkit";
import { placeholderRTK } from "./placeholderRTK";
import { youtubeService } from "./youtubeServices";

const store = configureStore({
  reducer: {
    [placeholderRTK.reducerPath]: placeholderRTK.reducer,
    [youtubeService.reducerPath]: youtubeService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      placeholderRTK.middleware,
      youtubeService.middleware
    ),
});

export default store;
