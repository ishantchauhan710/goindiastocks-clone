import React, { useState } from "react";
import Drawer from "./Drawer";
import DiscussionForum from "./DiscussionForum";

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
        <div className="flex-[0.5]">
          <DiscussionForum />
        </div>
        <div className="flex-[0.5]">
          <div className="p-3 text-red-600 text-xl">MARKET STORIES</div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
