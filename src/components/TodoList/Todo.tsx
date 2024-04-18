"use client";
import React from "react";
import Star from "./Star";
import { HiArrowRight } from "react-icons/hi2";

const Todo = () => {
  return (
    <div className="w-full h-[65px] flex items-center bg-[#f1faff] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] ml-[10px]">
          <Star />
        </div>
      </div>
      <span className="flex-1 text-black overflow-hidden whitespace-nowrap overflow-ellipsis">
        {/*{title} */} 제목 받아와지면
        지워야함ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
      </span>
      <button>
        <HiArrowRight className="ml-[5px] mr-[8px] w-[30px] h-[30px]" />
      </button>
    </div>
  );
};

export default Todo;
