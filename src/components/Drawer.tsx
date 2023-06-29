import React from "react";
import { FaUser } from "react-icons/fa";
import { BiSolidBell, BiSolidDollarCircle } from "react-icons/bi";
import { BsFillChatSquareTextFill, BsFillCaretDownFill } from "react-icons/bs";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ isOpen, setIsOpen }: DrawerProps) => {
  const navMenuItems = [
    "Sentiment",
    "Market",
    "Sector",
    "Watchlist",
    "Events",
    "News/Interview",
  ];

  return (
    <div
      className={`${
        isOpen ? "flex-[0.25]" : "-translate-x-full"
      } z-[1000] bg-[#1d3b61] shadow-xl md:shadow-none text-white min-h-[calc(100vh-215px)] transition duration-300 ease-in-out fixed w-10/12 md:w-auto top-0 left-0 bottom-0 md:static`}
    >
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute bg-[#1d3b61] transition  hover:bg-[#0e213a] h-24 flex items-center right-0 translate-y-3/4 mt-40 md:mt-20 mr-[-20px] cursor-pointer rounded-r-md"
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
    </div>
  );
};

export default Drawer;
