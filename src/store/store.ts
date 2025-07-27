'use client'
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
