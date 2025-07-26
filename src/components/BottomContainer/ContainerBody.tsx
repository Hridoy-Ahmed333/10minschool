import React from "react";
import StickyTabs from "./StickyTabs";

function ContainerBody() {
  return (
        <div className="flex flex-row justify-end">
      <div className="w-full max-w-[750px] flex flex-col">
        <StickyTabs />
        <div id="instructor" className="min-h-screen">
          Course Instructor
        </div>
        <div id="layout" className="min-h-screen">
          Layout
        </div>
        <div id="learning" className="min-h-screen">
          Learning
        </div>
        <div id="content" className="min-h-screen">
          Content
        </div>
        <div id="reviews" className="min-h-screen">
          Reviews
        </div>
        <div id="faq" className="min-h-screen">
          FAQ
        </div>
        <div id="pricing" className="min-h-screen">
          Pricing
        </div>
      </div>
    </div>
  );
}

export default ContainerBody;
