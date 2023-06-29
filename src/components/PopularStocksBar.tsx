import { AppData } from "@/data";
import React from "react";

const PopularStocksBar = () => {
  return (
    <div className="flex whitespace-no-wrap bg-gray-800 overflow-x-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {AppData.popularStocks.map((stock) => (
            <div
              key={stock.name}
              className="text-neutral-200 uppercase whitespace-nowrap"
            >
              <span className="mr-4">{stock.name}</span>
              <span className="mr-4">{stock.price}</span>
              <span
                className={`mr-4 ${
                  stock.profit ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.changePercentage}
              </span>
            </div>
          ))}
        </div>
        {/* Stock list is rendered twice to restart the stock animation when lists last item is reached */}
        <div className="flex absolute top-0 animate-marquee2">
          {AppData.popularStocks.map((stock) => (
            <div
              key={stock.name}
              className="text-neutral-200 uppercase whitespace-nowrap"
            >
              <span className="mr-4">{stock.name}</span>
              <span className="mr-4">{stock.price}</span>
              <span className="mr-4">{stock.changePercentage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularStocksBar;
