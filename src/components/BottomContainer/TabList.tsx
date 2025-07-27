import { tabs } from "@/types/tabs";
import React, { RefObject } from "react";

interface Props {
  scrollRef: RefObject<HTMLDivElement | null>;
  lan: string;
  activeTab: string | null;
  setActiveTab: (id: string) => void;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}

export default function TabList({
  scrollRef,
  lan,
  activeTab,
  setActiveTab,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
}: Props) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -160;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      className="flex overflow-x-auto scrollbar-hide space-x-6 mx-2 flex-1 border-b border-gray-200 cursor-grab active:cursor-grabbing"
    >
      {tabs.map((tab) => (
        <button
          key={tab.target}
          onClick={() => scrollToSection(tab.target)}
          className={`relative whitespace-nowrap pb-3 pt-4 transition-colors duration-200 cursor-pointer ${
            activeTab === tab.target
              ? "text-green-600 font-medium"
              : "text-gray-700"
          }`}
        >
          {lan === "en" ? tab.label : tab.labelBn}
          {activeTab === tab.target && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500" />
          )}
        </button>
      ))}
    </div>
  );
}
