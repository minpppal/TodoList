"use client";
import React, { useEffect, useState } from "react";
import Star from "./Star";
import { HiArrowRight } from "react-icons/hi";
import { db } from "@/utils/api/firebase";
import { collection, getDocs } from "firebase/firestore";

interface TodoProps {
  title: string;
}

const Todo: React.FC<TodoProps> = ({ title }) => {
  return (
    <div className="w-full h-[65px] flex items-center bg-[#f1faff] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] ml-[10px]">
          <Star />
        </div>
      </div>
      <span className="flex-1 text-black overflow-hidden whitespace-nowrap overflow-ellipsis">
        {title}
      </span>
      <button>
        <HiArrowRight
          className="ml-[5px] mr-[8px] w-[30px] h-[30px]"
          style={{ color: "black" }}
        />
      </button>
    </div>
  );
};

export default Todo;
