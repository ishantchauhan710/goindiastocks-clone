import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbGitPullRequestClosed } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";

const BottomTabs = () => {
  const tabs = [
    {
      name: "A",
      icon: <AiOutlineAppstore />,
    },
    {
      name: "B",
      icon: <TbGitPullRequestClosed />,
    },
    {
      name: "C",
      icon: <BiHomeAlt />,
    },
    {
      name: "D",
      icon: <IoChatbubblesOutline />,
    },
    {
      name: "E",
      icon: <CiViewList />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[2].name);

  return (
    <div className="bg-[#1d3b61] z-[1001] fixed bottom-0 w-full flex md:hidden items-center justify-stretch text-white text-2xl">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`w-full p-2 bg-[#1d3b61]  hover:bg-[#0e213a] cursor-pointer flex items-center justify-center ${
            selectedTab === tab.name ? "border-b-2 border-b-red-600" : ""
          }`}
          onClick={() => setSelectedTab(tab.name)}
        >
          {tab.icon}
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;
