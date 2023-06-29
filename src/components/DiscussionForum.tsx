import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AppData } from "@/data";

const DiscussionForum = () => {
  const SearchSection = () => {
    return (
      <div>
        <div className="font-semibold text-xl text-zinc-800">Filters</div>
        <div className="m-2 px-4 py-4 flex flex-wrap-reverse rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.46)] bg-white">
          <div className="flex mt-2">
            <div className="cursor-pointer rounded-full text-sm px-4 py-2 bg-red-700 hover:bg-red-800 text-white mr-2">
              Sector 1
            </div>
            <div className="cursor-pointer rounded-full text-sm px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white mr-2">
              Sector 2
            </div>
            <div className="cursor-pointer rounded-full text-sm px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white">
              Sector 3
            </div>
          </div>
          <div className="flex items-center bg-[#e0e0e0] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.6)] rounded-full w-full">
            <FiSearch className="ml-4 text-xl text-gray-700 cursor-pointer" />
            <input
              type="text"
              className="focus:outline-none bg-transparent px-4 py-2 flex-[1]"
            />
          </div>
        </div>
      </div>
    );
  };

  interface Post {
    image: string | null;
    userProfile: string;
    userName: string;
    sector: number;
    content: string;
    likes: string;
    views: string;
    comments: string;
    timeAgo: string;
  }

  interface PostProps {
    post: Post;
  }

  const Post = ({ post }: PostProps) => {
    const {
      image,
      userProfile,
      userName,
      sector,
      content,
      likes,
      views,
      comments,
      timeAgo,
    } = post;
    return (
      <div className="relative mx-2 mt-8 px-4 py-4 flex flex-col rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.46)] bg-white">
        {image && (
          <div 
          className="relative mt-8 mb-4 rounded-sm w-full h-56 overflow-hidden">
            <Image
              src={image}
              alt="post image"
              style={{ objectFit: "cover" }}
              fill
              className="rounded-sm w-full h-full overflow-hidden"
            />
          </div>
        )}
        <div className="text-blue-600 right-0 mr-4 font-medium absolute">{timeAgo}</div>
        <div className="flex items-center">
          <Image
            src={userProfile}
            width={32}
            height={32}
            alt="logo"
            className="cursor-pointer rounded-full"
          />
          <div className="mx-2 text-zinc-800">{userName}</div>
          {sector === 1 ? (
            <div className="cursor-pointer rounded-full text-sm px-3 py-1 bg-red-700 hover:bg-red-800 text-white mr-2">
              Sector 1
            </div>
          ) : sector === 2 ? (
            <div className="cursor-pointer rounded-full text-sm px-3 py-1 bg-blue-700 hover:bg-red-800 text-white mr-2">
              Sector 2
            </div>
          ) : (
            <div className="cursor-pointer rounded-full text-sm px-3 py-1 bg-yellow-400 hover:bg-red-500 text-white mr-2">
              Sector 3
            </div>
          )}
        </div>
        <div className="ml-10 mt-2 text-zinc-700 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industury.
        </div>
        <div>
          <div className="ml-10 mt-4 flex justify-between text-zinc-700">
            <div className="flex items-center cursor-pointer">
              <AiOutlineHeart className="text-lg" />
              <span className="text-sm ml-1">2k</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <AiOutlineEye className="text-lg" />
              <span className="text-sm ml-1">2k</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <BiComment className="text-lg" />
              <span className="text-sm ml-1">2k</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <AiOutlineShareAlt className="text-lg" />
              <span className="text-sm ml-1">Share</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-h-[calc(100vh-(215px))] overflow-y-auto">
      <div className="p-3 text-red-600 text-xl">DISCUSSION FORUM</div>
      <div className="ml-8">
        <SearchSection />
        {AppData.posts.map((post, i) => (
          <Post post={post} key={post.userName + i} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
