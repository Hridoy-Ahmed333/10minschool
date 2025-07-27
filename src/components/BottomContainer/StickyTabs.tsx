"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useStickyTabs } from "./useStickyTabs";
import ScrollButtons from "./ScrollButtons";
import TabList from "./TabList";
import { useSearchParams } from "next/navigation";

export default function StickyTabs() {
  const searchParams = useSearchParams();
  const lan = searchParams.get("lang") || "en";
  const {
    activeTab,
    setActiveTab,
    scrollRef,
    scrollLeft,
    scrollRight,
    canScrollLeft,
    canScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useStickyTabs();

  return (
    <div className="sticky top-[65px] p-2 z-50 bg-white w-full hidden md:block">
      <div className="flex items-center px-2">
        <ScrollButtons  onClick={scrollLeft} disabled={!canScrollLeft}>
          <IoIosArrowBack className="text-2xl" />
        </ScrollButtons>

        <TabList
          scrollRef={scrollRef}
          lan={lan}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        />

        <ScrollButtons  onClick={scrollRight} disabled={!canScrollRight}>
          <IoIosArrowForward className="text-2xl" />
        </ScrollButtons>
      </div>
    </div>
  );
}
