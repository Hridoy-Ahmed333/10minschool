import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

function Instructor() {
  const { data } = useSelector((state: RootState) => state.course);

  const instructorData = data?.sections?.find(
    (section) => section.type === "instructors"
  )?.values[0];

  const instructor = data?.sections?.find(
    (section) => section.type === "instructors"
  )?.name as string;

  const src = instructorData?.image as string;
  const alt = instructorData?.slug as string;
  const name = instructorData?.name as string;
  const description = instructorData?.description as string;

  return (
    <div id="instructor" className="mt-5 flex flex-col gap-4 md:ml-10">
      <div className="text-2xl font-bold">{instructor}</div>
      <div className="p-6 border border-gray-300 rounded-md flex flex-row items-center gap-4 bg-white">
        {src && (
          <Image
            src={src}
            alt={alt}
            width={64}
            height={64}
            className="rounded-full object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        )}
        <div>
          <div className="hover:text-green-500 cursor-pointer">
            <h3 className="text-lg flex items-center gap-1 ">
              {name}
              <span>
                <MdKeyboardArrowRight size={20} />
              </span>
            </h3>
          </div>

          <div
            className="text-sm text-gray-700 mt-1 leading-snug"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}

export default Instructor;
