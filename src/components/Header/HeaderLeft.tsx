import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

function HeaderLeft() {
  return (
    <div className="flex flex-row flex-grow justify-center items-center">
      <div className="flex items-center justify-between ml-2 md:ml-15 mx-auto gap-3 px-4 py-3 md:px-7 cursor-pointer">
        <Image
          src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
          alt="10 min logo"
          width={100}
          height={30}
          style={{ height: "30px", width: "100px" }}
        />
      </div>
      <div className="flex-1 hidden w-full pr-4 md:block">
        <div className="w-full">
          <div className="relative flex w-full flex-col items-center bg-white  z-50">
            <div className="  shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border md:border-gray-300">
              <div className="cursor-pointer">
                <FaSearch />
              </div>

              <input
                type="search"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
                name="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;
