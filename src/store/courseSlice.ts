"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { Course } from '../types/course.types'

interface CourseState {
  data: Course | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CourseState = {
  data: null,
  status: "idle",
  error: null,
};


const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseFromServer(state, action) {
      state.data = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
  },
});

export const { setCourseFromServer } = courseSlice.actions;
export default courseSlice.reducer;



