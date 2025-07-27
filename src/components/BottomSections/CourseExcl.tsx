"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Exclusive } from "@/types/courExcl.types";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

function CourseExcl() {
  const { data } = useSelector((state: RootState) => state.course);

  function isExclusiveArray(arr: unknown): arr is Exclusive[] {
    return (
      Array.isArray(arr) &&
      arr.every(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          Array.isArray(item.checklist) &&
          item.checklist.every((entry: unknown) => typeof entry === "string") &&
          typeof item.file_type === "string" &&
          typeof item.file_url === "string" &&
          typeof item.id === "string" &&
          typeof item.title === "string" &&
          typeof item.video_thumbnail === "string"
      )
    );
  }

  const rawValue = data?.sections?.find(
    (s) => s.type === "feature_explanations"
  );
  const name = rawValue?.name as string;
  const values = rawValue?.values;
  const items: Exclusive[] | null = isExclusiveArray(values) ? values : null;

  if (!items) return null;

  return (
    <div id="cexclusive" className="bg-white mt-10 flex flex-col md:ml-10">
      <div className="text-2xl font-bold">{name}</div>
      <div className="p-4 space-y-6 border border-gray-300 rounded mt-4">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <div
              key={item.id}
              className={`p-4 flex flex-col md:flex-row justify-between items-start gap-4 rounded-md ${
                isLast ? "" : "border-b border-gray-300"
              }`}
            >
              {/* Left Content */}
              <div className="flex-1 space-y-3">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <ul className="space-y-2">
                  {item.checklist.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaCheck className="text-blue-600 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.file_type === "image" && item.file_url && (
                <div className="w-[250px] flex-shrink-0 relative h-auto">
                  <Image
                    src={item.file_url}
                    alt={item.title}
                    width={250}
                    height={250}
                    className="object-contain rounded-md"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseExcl;
