import React, { useEffect, useRef, useState } from "react";
import CheckList from "../CheckList/CheckList";
import { useScrollContext } from "../ScrollContext";
import ContainerBody from "./ContainerBody";

function BottomContainer() {
  const { hasScrolled } = useScrollContext();
  const rightContainerRef = useRef<HTMLDivElement | null>(null);
  const [leftOffset, setLeftOffset] = useState<number | null>(null);

  useEffect(() => {
    const updateLeftOffset = () => {
      if (rightContainerRef.current) {
        const rect = rightContainerRef.current.getBoundingClientRect();
        setLeftOffset(rect.left);
      }
    };

    updateLeftOffset();

    window.addEventListener("resize", updateLeftOffset);
    window.addEventListener("scroll", updateLeftOffset);

    return () => {
      window.removeEventListener("resize", updateLeftOffset);
      window.removeEventListener("scroll", updateLeftOffset);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-[2000px]">
      <div className="w-full md:w-[60%] ">
        <div className="block md:hidden">
          <CheckList />
        </div>
        <ContainerBody />
      </div>

      <div
        ref={rightContainerRef}
        className="hidden md:block w-full md:w-[40%] relative"
      >
        {hasScrolled && leftOffset !== null && (
          <div
            className="fixed top-[50px] w-[400px] p-4 bg-white rounded z-50 border border-gray-300"
            style={{ left: `${leftOffset + 40}px` }}
          >
            <CheckList />
          </div>
        )}
      </div>
    </div>
  );
}

export default BottomContainer;
