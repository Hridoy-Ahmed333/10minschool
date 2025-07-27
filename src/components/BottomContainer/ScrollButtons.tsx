import React from "react";

interface Props {
 
  onClick?: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

export default function ScrollButtons({  onClick, disabled, children }: Props) {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`h-[35px] w-[35px] cursor-pointer rounded-full flex items-center justify-center text-white ${
        disabled ? "bg-gray-300 cursor-not-allowed" : "bg-[#7F7F7F]"
      }`}
    >
      {children}
    </div>
  );
}
