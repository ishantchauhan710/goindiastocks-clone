import { AppData } from "@/data";
import Image from "next/image";
import React from "react";

const MarketStories = () => {
  return (
    <div className="max-h-[calc(100vh-(215px))] overflow-y-auto">
      <div className="p-3 text-red-600 text-xl">MARKET STORIES</div>
      <div className="grid grid-cols-2 gap-4 p-4">
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
            <div className="z-[333] absolute bottom-0 m-2 text-white text-sm cursor-pointer">{item.story}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
