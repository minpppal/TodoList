"use client";
import React from "react";
import Star from "./Star";
import { HiArrowRight } from "react-icons/hi2";

const Doing = () => {
  return (
    <div className="w-full h-[65px] flex items-center bg-[#f1faff] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] ml-[10px]">
          <Star />
        </div>
      </div>
      <span className="flex-1 text-black overflow-hidden whitespace-nowrap overflow-ellipsis">
        {/*{title} */} 여기는 Doing~
      </span>
      <button>
        <div className="form-control pr-[10px]">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
          />
        </div>
      </button>
    </div>
  );
};

export default Doing;
