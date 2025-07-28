"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AccordionInt } from "@/types/accordion.types";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { data } = useSelector((state: RootState) => state.course);

  // console.log(data);

  function isAccordionArray(arr: unknown): arr is AccordionInt[] {
    return (
      Array.isArray(arr) &&
      arr.every(
        (item) =>
          typeof item.description === "string" &&
          typeof item.icon === "string" &&
          typeof item.id === "string" &&
          typeof item.title === "string"
      )
    );
  }
  const rawValue = data?.sections?.find((s) => s.type === "about");
  const name = rawValue?.name as string;
  const values = rawValue?.values;
  const items: AccordionInt[] | null = isAccordionArray(values) ? values : null;


  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="course-details" className="bg-white mt-10 flex flex-col md:ml-10">
      <div className="text-2xl font-bold">{name}</div>
      <div className="border border-gray-300 rounded-md pl-4 pr-4 mt-4">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`p-5 ${
              index !== items.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center font-semibold text-left"
            >
              <div dangerouslySetInnerHTML={{ __html: item.title }} />
              <div>
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>
            {openIndex === index && (
              <div
                className="mt-2 text-gray-700 space-y-1"
                dangerouslySetInnerHTML={{
                  __html: `<ul class="list-disc list-inside ">${item.description}</ul>`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
