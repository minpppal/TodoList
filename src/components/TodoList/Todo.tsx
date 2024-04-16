"use client";
import React from "react";
import Star from "./Star";
const Todo = () => {
  return (
    <div className="w-full h-[65px] flex items-center bg-[#f1faff] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] ml-[10px]">
          <Star />
        </div>
      </div>
      <span className="w-[300px] h-[50px] text-black flex items-center">
        제목 데이터 받아오기
      </span>
      <div className="form-control">
        <label className="cursor-pointer label pl-[10px]">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-warning"
          />
        </label>
      </div>
    </div>
  );
};

export default Todo;
