import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function CheckList() {
  const { data, status, error } = useSelector(
    (state: RootState) => state.course
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full p-4 md:h-auto items-center md:items-start">
        <div className="inline-block text-2xl font-semibold">৳1000</div>
        <div className="flex flex-row line-through justify-end ml-2 text-base font-normal md:text-xl">
          ৳1200
        </div>
      </div>
      <button className="bg-[#1CAB55] hover:bg-[#169c4c] transition-colors duration-200 cursor-pointer ml-4 mr-4 rounded-md h-10 font-bold text-white">
        {data?.cta_text.name}
      </button>
      <div>
        <div className="pl-4 pt-4 font-bold mb-4 text-xl">
          এই কোর্সে যা থাকছে
        </div>
        <div className="pl-4 pb-4 bg-white rounded-lg ">
          <ul className="space-y-3 list-none">
            {data?.checklist.map((item) => (
              <li
                key={item.id}
                className="flex items-center space-x-3 list-none "
              >
                  <div className="relative w-5 h-5">
                  <Image
                    src={item.icon}
                    alt="icon"
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
                <span className="text-md text-[#111827]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CheckList;
