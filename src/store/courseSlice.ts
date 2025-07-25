"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

// Async thunk
export const fetchCourse = createAsyncThunk("course/fetchCourse", async () => {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }
  const json = await res.json();
  return json.data;
});

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default courseSlice.reducer;
