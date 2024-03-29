import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/room/roomSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
