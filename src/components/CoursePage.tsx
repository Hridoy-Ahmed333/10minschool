"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourseFromServer } from "../store/courseSlice";
import { AppDispatch } from "../store/store";
import { ScrollProvider } from "./ScrollContext";
import { Course } from "@/types/course.types";

const TopContainer = dynamic(() => import("./TopContainer/TopContainer"), {
  ssr: false,
});
const BottomContainer = dynamic(
  () => import("./BottomContainer/BottomContainer"),
  {
    ssr: false,
  }
);

interface Props {
  initialData: Course;
}

export default function CoursePage({ initialData }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (initialData) {
      dispatch(setCourseFromServer(initialData));
    }
  }, [dispatch, initialData]);

  return (
    <ScrollProvider>
      <main>
        <div className="flex flex-col w-100% min-h-screen">
          <div
            id="skills-landing"
            className="flex flex-col items-center min-h-[300px] md:justify-center md:flex-row bg-cover bg-center mt-[65px]"
            style={{
              backgroundImage: "url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TopContainer />
          </div>
          <div>
            <BottomContainer />
          </div>
        </div>
      </main>
    </ScrollProvider>
  );
}
