import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const MainBody = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isBigScreen, setIsBigScreen] = useState(true);
  const [selectedTab, setSelectedTab] = useState(1);
  const bigScreen = useMediaQuery("(min-width: 769px)");

  // To prevent hydration error
  useEffect(() => {
    setIsBigScreen(bigScreen);
  }, [bigScreen]);

  return (
    <div className="flex relative">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

      {isBigScreen ? (
        <div
          className={`${
            isOpen ? "flex-[0.75] flex w-auto" : "flex-[1] absolute w-full"
          } flex transition duration-300 ease-in-out`}
        >
          <div className="flex-[0.6]">
            <DiscussionForum />
          </div>
          <div className="flex-[0.4]">
            <MarketStories isOpen={isOpen} />
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <div className="flex text-white text-center">
            <div
              className={`flex-[0.5] p-2 cursor-pointer ${
                selectedTab === 1
                  ? "bg-[#0e213a] border-b-2 border-b-red-600"
                  : "bg-[#1d3b61] "
              }`}
              onClick={() => setSelectedTab(1)}
            >
              Discussion Forum
            </div>
            <div
              className={`flex-[0.5] p-2 cursor-pointer ${
                selectedTab === 2
                  ? "bg-[#0e213a] border-b-2 border-b-red-600"
                  : "bg-[#1d3b61] "
              }`}
              onClick={() => setSelectedTab(2)}
            >
              Market Stories
            </div>
          </div>
          {selectedTab === 1 ? (
            <DiscussionForum />
          ) : (
            <MarketStories isOpen={isOpen} />
          )}
        </div>
      )}
    </div>
  );
};

export default MainBody;
