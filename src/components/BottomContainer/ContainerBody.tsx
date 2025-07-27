import React, { Suspense } from "react";
import StickyTabs from "./StickyTabs";
import Instructor from "../BottomSections/Instructor";
import CourseLayOut from "../BottomSections/CourseLayOut";
import PdfDownload from "../BottomSections/PdfDownload";
import LearnCourse from "../BottomSections/LearnCourse";
import Accordion from "../BottomSections/Accordion";
import CourseExcl from "../BottomSections/CourseExcl";

function ContainerBody() {
  return (
    <div className="flex flex-row ml-2 mr-2 md:justify-end md:ml-0">
      <div className="w-full md:max-w-[750px] flex flex-col mb-10">
        {/* <StickyTabs /> */}
          <Suspense fallback={null}>
          <StickyTabs />
        </Suspense>
        <Instructor />
        <CourseLayOut />
        <PdfDownload />
        <LearnCourse />
        <Accordion />
        <CourseExcl />
      </div>
    </div>
  );
}

export default ContainerBody;
