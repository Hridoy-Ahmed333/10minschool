import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Learn } from "@/types/learn.types";

function LearnCourse() {
  const { data } = useSelector((state: RootState) => state.course);

  function isLearnArray(arr: unknown): arr is Learn[] {
    return (
      Array.isArray(arr) &&
      arr.every(
        (item) =>
          typeof item.color === "string" &&
          typeof item.icon === "string" &&
          typeof item.id === "string" &&
          typeof item.text === "string"
      )
    );
  }

  const rawValue = data?.sections?.find((s) => s.type === "pointers");
  const name = rawValue?.name as string;
  const values = rawValue?.values;
  const learn: Learn[] | null = isLearnArray(values)
    ? values
    : null;

  return (
    <div id="learning" className="mt-10 flex flex-col gap-4 md:ml-10">
      <div className="text-2xl font-bold">{name}</div>
      <div className="p-6 border border-gray-300 rounded-md grid grid-cols-1 gap-6 md:grid-cols-2">
        {learn?.map((item, index) => (
          <div key={index} className="flex flex-row gap-3">
            <div className="text-blue-600">&#10004;</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnCourse;
