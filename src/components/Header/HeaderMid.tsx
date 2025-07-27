import React from "react";
import { FaChevronDown } from "react-icons/fa";

type HeaderLeftProps = {
  lan: "en" | "bn";
};

function HeaderMid({ lan }: HeaderLeftProps) {
  const OptionArr = [
    { en: "Class 6-12", bn: "ক্লাস ৬-১২", arr: true },
    { en: "Skills", bn: "স্কিলস", arr: true },
    { en: "Addmission", bn: "ভর্তি পরীক্ষা", arr: false },
    { en: "Online Batch", bn: "অনল্যাইন ব্যাচ", arr: true },
    { en: "English Center", bn: "ইংলিশ সেন্টার", arr: true },
    { en: "More", bn: "আরো", arr: true },
  ];

  return (
    <div className="hidden 2xl:flex flex-row flex-grow justify-center items-center space-x-4">
      {OptionArr.map((item, index) => (
        <div
          key={index}
          className="text-base cursor-pointer text-[#4B5563] hover:text-green-600 flex items-center gap-1"
        >
          {item[lan]}
          {item.arr && <FaChevronDown className="text-xs" />}
        </div>
      ))}
    </div>
  );
}

export default HeaderMid;
