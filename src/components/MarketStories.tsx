import { AppData } from "@/data";
import Image from "next/image";
import React from "react";
import { IoMdAdd } from "react-icons/io";

interface MarketStoriesProps {
  isOpen: boolean;
}

const MarketStories = ({ isOpen }: MarketStoriesProps) => {
  return (
    <div className="max-h-[calc(100vh-(215px))] overflow-y-auto relative">
      <div className="bg-[#1d3b61]  hover:bg-[#0e213a] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl cursor-pointer fixed z-[1] bottom-0 right-0 m-8">
        <IoMdAdd />
      </div>
      <div className="p-3 text-red-600 text-xl">MARKET STORIES</div>
      <div
        className={`grid ${isOpen ? "grid-cols-1" : "grid-cols-2"} gap-4 p-4`}
      >
        {AppData.marketStories.map((item, i) => (
          <div
            key={item.story + i}
            className="relative mb-4 rounded-xl w-full h-44 overflow-hidden"
          >
            <Image
              src={item.img}
              alt="market image"
              style={{ objectFit: "cover" }}
              fill
              className="rounded-md w-full h-full overflow-hidden"
            />
            <div className="z-[333] absolute bottom-0 m-2 text-white text-sm cursor-pointer">
              {item.story}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
