// import React from "react";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import VideoPlayer from "../VideoPlayer/VideoPlayer";
// import CheckList from "../CheckList/CheckList";

// function TopRightContainer() {
//   return (
//     <section className="order-1 bg-black w-full md:max-w-[330px] md:min-h-[190px] lg:min-h-[230px] md:order-2 lg:max-w-[400px] md:bg-white right-0 md:absolute mb-0 border-green-500 z-50 ">
//       <div className="w-full">
//         <div className="sticky top-[112px]">
//           <div className="border w-full">
//             <div className="p-1 w-full">
//               <VideoPlayer />
//               <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[50] h-[30px] w-[30px] cursor-pointer bg-white rounded-full flex items-center justify-center">
//                 <IoIosArrowBack className="text-black text-xl" />
//               </div>
//               <div className="absolute right-[10px] top-1/2 -translate-y-1/2 z-[50] h-[30px] w-[30px] cursor-pointer bg-white rounded-full flex items-center justify-center">
//                 <IoIosArrowForward className="text-black text-xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hidden md:block ">
//         <CheckList />
//       </div>
//     </section>
//   );
// }

// export default TopRightContainer;

import React, { useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CheckList from "../CheckList/CheckList";
import { useScrollContext } from "../ScrollContext";

function TopRightContainer() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setHasScrolled } = useScrollContext();



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting === true  ⇢ any part of section is in the viewport
        // so we want hasScrolled = !entry.isIntersecting
        const outOfView = !entry.isIntersecting;
        setHasScrolled(outOfView);
      },
      {
        root: null,      // viewport
        threshold: 0,    // fire whenever it crosses 0% visibility
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setHasScrolled]);

  return (
    <section
      ref={sectionRef}
      className="order-1 bg-black w-full md:max-w-[330px] md:min-h-[190px] lg:min-h-[230px] md:order-2 lg:max-w-[400px] md:bg-white right-0 md:absolute mb-0 border-green-500 z-50"
    >
      <div className="w-full">
        <div className="sticky top-[112px]">
          <div className="border w-full">
            <div className="p-1 w-full">
              <VideoPlayer />
              <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[50] h-[30px] w-[30px] cursor-pointer bg-white rounded-full flex items-center justify-center">
                <IoIosArrowBack className="text-black text-xl" />
              </div>
              <div className="absolute right-[10px] top-1/2 -translate-y-1/2 z-[50] h-[30px] w-[30px] cursor-pointer bg-white rounded-full flex items-center justify-center">
                <IoIosArrowForward className="text-black text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <CheckList />
      </div>
    </section>
  );
}

export default TopRightContainer;
