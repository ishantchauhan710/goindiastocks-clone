import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiSolidBell, BiSolidDollarCircle } from "react-icons/bi";
import { BsFillChatSquareTextFill, BsFillCaretDownFill } from "react-icons/bs";

const MainBody = () => {
  const navMenuItems = [
    "Sentiment",
    "Market",
    "Sector",
    "Watchlist",
    "Events",
    "News/Interview",
  ];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex relative">
      <div
        className={`${
          isOpen ? "flex-[0.25]" : "-translate-x-full"
        } relative z-[2] bg-[#1d3b61] text-white min-h-[calc(100vh-215px)] transition duration-300 ease-in-out`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute bg-[#1d3b61] transition  hover:bg-[#0e213a] h-24 flex items-center right-0 translate-y-3/4 mt-20 mr-[-20px] cursor-pointer rounded-r-md"
        >
          <BsFillCaretDownFill className="text-xl rotate-[-90deg]" />
        </div>

        <div className="px-3 py-4 flex items-center border-b border-gray-400 transition  hover:bg-[#0e213a] cursor-pointer">
          <FaUser className="text-xl" />
          <span className="ml-2 flex-1">Hello User</span>
          <div className="relative">
            <div className="bg-red-500 w-2 h-2 absolute top-0 right-0 rounded-full" />
            <BiSolidBell className="text-2xl" />
          </div>
        </div>

        <div className="px-3 py-2 flex items-center  transition  hover:bg-[#0e213a] cursor-pointer">
          <BsFillChatSquareTextFill />
          <span className="ml-[0.65rem] flex-1">Discussion Forum</span>
          <BsFillCaretDownFill className="text-sm" />
        </div>

        <div className="px-3 py-2 flex items-center  transition  hover:bg-[#0e213a] cursor-pointer">
          <BiSolidDollarCircle className="text-lg" />
          <span className="ml-2 flex-1">Market Stories</span>
        </div>

        {navMenuItems.map((item) => (
          <div
            key={item}
            className="pr-3 pl-[1.8rem] py-2 flex items-center  transition  hover:bg-[#0e213a] cursor-pointer"
          >
            <span className="ml-2 flex-1">{item}</span>
          </div>
        ))}
      </div>

      <div
        className={`${
          isOpen ? "flex-[0.75] flex w-auto" : "flex-[1] absolute w-full"
        } flex transition duration-300 ease-in-out`}
      >
        <div className="bg-red-50 flex-[0.5]">
          <div className="p-3 text-red-600 text-xl">DISCUSSION FORUM</div>
        </div>
        <div className="bg-blue-50 flex-[0.5]">
          <div className="p-3 text-red-600 text-xl">MARKET STORIES</div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
