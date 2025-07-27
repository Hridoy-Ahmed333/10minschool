"use client";
import { fetchCourse } from "@/store/courseSlice";
import { AppDispatch } from "@/store/store";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HeaderLeft from "./HeaderLeft";
import HeaderMid from "./HeaderMid";
import { FaPhoneAlt } from "react-icons/fa";
import { setLanguage } from "@/store/languageSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function Header() {
  const dispatch = useDispatch<AppDispatch>();
   const lan = useSelector((state: RootState) => state.language.lan);

  useEffect(() => {
    dispatch(fetchCourse(lan));
  }, [dispatch, lan]);


  const toggleLanguage = () => {
  dispatch(setLanguage(lan === "en" ? "bn" : "en"));
};

  return (
    <div className="h-full flex flex-row justify-between items-center ">
      <HeaderLeft />
      <HeaderMid lan={lan} />
      <div className="flex flex-row flex-grow justify-end md:justify-center items-center space-x-4 p-0.5 cursor-pointer md:mr-8">
        <div
          onClick={toggleLanguage}
          className="flex justify-center items-center border border-gray-300 h-8 w-15 bg-gray-100 gap-1"
        >
          <div className="flex flex-col text-[9px] w-3 gap-0 text-gray-600">
            <div className="flex justify-start items-start">A</div>
            <div className="flex justify-end items-end">অ</div>
          </div>
          <div>{lan === "bn" ? "EN" : "বাং"}</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-1 text-green-600 md:w-20">
          <div>
            <FaPhoneAlt />
          </div>
          <div className="hidden md:block">16910</div>
        </div>
        <div className="bg-green-600 text-white px-4 py-1 w-25 h-8 flex justify-center items-center rounded-md cursor-pointer hover:bg-green-700 transition text-[14px]">
          লগ ইন
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Header;
