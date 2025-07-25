import { RootState, AppDispatch } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

function TopLeftContainer() {
  const { data, status, error } = useSelector(
    (state: RootState) => state.course
  );
    const description = `${data?.description}`;
  return (
    <div className="order-2 flex flex-col justify-center flex-1 ml-4 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">

      <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
        {data?.title}
      </h1>
      <div className="text-white mb-2">Ratings</div>
      {description && (
        <div
          className="text-gray-400 overflow-hidden h-auto"
          style={{ maskImage: "none" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
}

export default TopLeftContainer;
