// import React from "react";
// import CheckList from "../CheckList/CheckList";

// function BottomContainer() {
//   return (
//     <div className="flex flex-col md:flex-row w-full h-[2000px]">
//       <div className="w-full md:w-[60%]">
//         <div className="block md:hidden">
//           <CheckList />
//         </div>
//       </div>
//       <div className="hidden md:block w-full md:w-[40%]">Right Section</div>
//     </div>
//   );
// }

// export default BottomContainer;

import React from "react";
import CheckList from "../CheckList/CheckList";
import { useScrollContext } from "../ScrollContext";

function BottomContainer() {
  const { hasScrolled } = useScrollContext();

  return (
    <div className="flex flex-col md:flex-row w-full h-[2000px]">
      <div className="w-full md:w-[60%]">
        <div className="block md:hidden">
          <CheckList />
        </div>
      </div>

      <div className="hidden md:block w-full md:w-[40%] relative">
        <p>Right cont</p>

        {hasScrolled && (
          <div className="absolute top-[600px] right-4 p-4 bg-blue-500 text-white rounded shadow-md">
            📦 Box appears when TopRightContainer is out of view
          </div>
        )}
      </div>
    </div>
  );
}

export default BottomContainer;
