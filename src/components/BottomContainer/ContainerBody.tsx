import React from "react";
import StickyTabs from "./StickyTabs";
import Instructor from "../BottomSections/Instructor";
import CourseLayOut from "../BottomSections/CourseLayOut";
import PdfDownload from "../BottomSections/PdfDownload";

function ContainerBody() {
  return (
    <div className="flex flex-row ml-1 mr-1 md:justify-end md:ml-0">
      <div className="w-full max-w-[750px] flex flex-col">
        <StickyTabs />
        <Instructor />
        <CourseLayOut />
        <PdfDownload/>
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
