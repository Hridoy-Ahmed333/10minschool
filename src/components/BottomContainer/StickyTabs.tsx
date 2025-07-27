"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const tabs = [
  { label: "Course instructor", target: "instructor" },
  { label: "How the course is laid out", target: "layout" },
  { label: "What you will learn by doing the course", target: "learning" },
  { label: "Course details", target: "content" },
  { label: "Course Exclusive Features", target: "reviews" },
  { label: "FAQs", target: "faq" },
  { label: "Pricing", target: "pricing" },
];

export default function StickyTabs() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStartLeft = useRef(0);

  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -160; // scroll 50px above the element
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveTab(id);
  }
}

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStartLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <div className="sticky top-[65px] p-2 z-50 bg-white w-full hidden md:block">
      <div className="flex items-center px-2">
        <div
          onClick={canScrollLeft ? scrollLeft : undefined}
          className={`h-[35px] w-[35px] cursor-pointer rounded-full flex items-center justify-center text-white ${
            canScrollLeft ? "bg-[#7F7F7F]" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <IoIosArrowBack className="text-2xl" />
        </div>
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex overflow-x-auto scrollbar-hide space-x-6 mx-2 flex-1 border-b border-gray-200 cursor-grab active:cursor-grabbing"
        >
          {tabs.map((tab) => (
            <button
              key={tab.target}
              onClick={() => scrollToSection(tab.target)}
              className={`relative whitespace-nowrap pb-3 pt-4 transition-colors duration-200 ${
                activeTab === tab.target
                  ? "text-green-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              {tab.label}
              {activeTab === tab.target && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500" />
              )}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={canScrollRight ? scrollRight : undefined}
          className={`h-[35px] w-[35px] cursor-pointer rounded-full flex items-center justify-center text-white ${
            canScrollRight ? "bg-[#7F7F7F]" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <IoIosArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
