"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../store/courseSlice";
import { RootState, AppDispatch } from "../store/store";
import TopContainer from "./TopContainer/TopContainer";

import BottomContainer from "./BottomContainer/BottomContainer";
import { ScrollProvider } from "./ScrollContext";

export default function CoursePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(
    (state: RootState) => state.course
  );

  useEffect(() => {
    dispatch(fetchCourse());
  }, [dispatch]);

  console.log(data);

  return (
    <ScrollProvider>
      <main>
        <div className="flex flex-col w-100% min-h-screen">
          <div
            id="skills-landing"
            className="flex flex-col items-center min-h-[300px] md:justify-center md:flex-row bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] bg-cover bg-center "
          >
            {data && <TopContainer />}
          </div>
          <div>
            <BottomContainer />
          </div>
        </div>
      </main>
    </ScrollProvider>
  );
}
