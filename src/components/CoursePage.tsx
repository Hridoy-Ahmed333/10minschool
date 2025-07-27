"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../store/courseSlice";
import { RootState, AppDispatch } from "../store/store";
import { ScrollProvider } from "./ScrollContext";

// Lazy load TopContainer and BottomContainer
const TopContainer = dynamic(() => import("./TopContainer/TopContainer"), {
  ssr: false, 
});
const BottomContainer = dynamic(() => import("./BottomContainer/BottomContainer"), {
  ssr: false,
});

export default function CoursePage() {
  const { data } = useSelector(
    (state: RootState) => state.course
  );

  return (
    <ScrollProvider>
      <main>
        <div className="flex flex-col w-100% min-h-screen">
          <div
            id="skills-landing"
            className="flex flex-col items-center min-h-[300px] md:justify-center md:flex-row bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] bg-cover bg-center mt-[65px]"
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
