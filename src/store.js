import { configureStore } from "@reduxjs/toolkit";
import { placeholderRTK } from "./placeholderRTK";
import { youtubeServices } from "./youtubeServices";

const store = configureStore({
  reducer: {
    [placeholderRTK.reducerPath]: placeholderRTK.reducer,
    [youtubeServices.reducerPath]: youtubeServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      placeholderRTK.middleware,
      youtubeServices.middleware
    ),
});

export default store;
