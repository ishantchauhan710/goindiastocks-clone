import React, { useState } from "react";
import Drawer from "./Drawer";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";

const MainBody = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex relative">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
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
    </div>
  );
};

export default MainBody;
