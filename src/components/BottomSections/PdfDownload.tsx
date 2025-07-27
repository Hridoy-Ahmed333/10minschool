import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Image from "next/image";

function PdfDownload() {
  const { data } = useSelector((state: RootState) => state.course);
  const rawValue = data?.sections?.find(
    (s) => s.type === "group_join_engagement"
  )?.values[0];

  const bgimg = (
    rawValue?.background as { [key: string]: string | unknown } | undefined
  )?.image as string;

  const pdf = rawValue?.cta as { [key: string]: string | unknown } | undefined;
  const pdfBtnText = pdf?.text as string;
  const pdfUrl = pdf?.clicked_url as string;

  const leftIconImage = rawValue?.top_left_icon_img as string;
  const title = rawValue?.title as string;
  const description = rawValue?.description as string;
  const thumnail = rawValue?.thumbnail as string;


  return (
    <div className="mt-15 flex flex-col gap-4 md:ml-10">
      <div
        className="flex flex-row rounded-2xl text-white p-4 justify-between items-center min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-4">
          <div className="rounded-full overflow-hidden w-80 h-10">
            <Image
              src={leftIconImage}
              alt="icon"
              width={170}
              height={70}
              className="object-cover"
              style={{ height: "auto", width: "auto" }}
            />
          </div>
          <div className="text-xl font-semibold">{title}</div>
          <div>{description}</div>
          <div>
            <a
              href={pdfUrl}
              download
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors duration-300 cursor-pointer"
            >
              {pdfBtnText}
            </a>
          </div>
        </div>

        <div className="hidden md:block w-1/2 p-4">
          <div className="relative overflow-hidden text-black h-[220px] w-full flex items-center justify-center rounded-xl">
            <Image
              src={thumnail}
              alt="icon"
              width={420}
              height={200}
              className="object-cover"
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfDownload;
