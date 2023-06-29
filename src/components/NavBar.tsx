import { AppData } from "@/data";
import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-2 sm:px-5 py-3">
      <div className="flex items-center flex-[1] md:flex-[0.5]">
        <Image
          quality={100}
          src={AppData.logo}
          width={70}
          height={100}
          alt="logo"
          className="cursor-pointer"
        />
        <div className="ml-4 flex items-center bg-[#e0e0e0] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.6)] w-8/12 sm:w-full rounded-md">
          <input
            type="text"
            className="focus:outline-none bg-transparent px-4 py-2 flex-[1]"
          />
          <FiSearch className="mr-4 text-xl text-gray-700 cursor-pointer" />
        </div>
      </div>
      <div className="hidden md:flex md:flex-[0.5] items-center justify-end">
        <button className="bg-transparent px-5 py-2 text-sm mr-3 cursor-pointer text-zinc-950">
          Contact Us
        </button>

        <button className="bg-transparent border border-zinc-900 rounded-sm px-5 py-2 text-sm mr-3 hover:bg-zinc-100 cursor-pointer">
          SIGN UP
        </button>

        <button className="bg-transparent border border-zinc-900 rounded-sm px-5 py-2 text-sm hover:bg-zinc-100 cursor-pointer">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default NavBar;
