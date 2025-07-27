import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Image from "next/image";
import { courseLayout } from "@/types/layout.types";

function CourseLayOut() {
  const { data } = useSelector((state: RootState) => state.course);

  function isCourseLayoutArray(arr: unknown): arr is courseLayout[] {
    return (
      Array.isArray(arr) &&
      arr.every(
        (item) =>
          typeof item.icon === "string" &&
          typeof item.id === "string" &&
          typeof item.subtitle === "string" &&
          typeof item.title === "string"
      )
    );
  }

  const rawValue = data?.sections?.find((s) => s.type === "features")
  const name = rawValue?.name as string
  const values = rawValue?.values;
  const layoutData: courseLayout[] | null = isCourseLayoutArray(values)
    ? values
    : null;

  return (
    <div id="layout" className="mt-10 flex flex-col gap-4 md:ml-10">
      <div className="text-2xl font-bold">{rawValue ? name : "How the course is laid out"}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-1 bg-[#111827] rounded">
        {layoutData && layoutData.length > 0 ? (
          layoutData.map((item) => (
            <div key={item.id} className="text-white p-6 rounded flex flex-row gap-3 tracking-wide leading-relaxed">
              <div className="min-h-8 min-w-8 rounded-full overflow-hidden">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={45}
                  height={45}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center mt-1">
                <div>{item.title}</div>
                <div className="text-sm text-gray-400">{item.subtitle}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white p-6 rounded">No layout data available</div>
        )}
      </div>
    </div>
  );
}

export default CourseLayOut;
