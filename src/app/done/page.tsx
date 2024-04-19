import React from "react";
import Star from "@/components/TodoList/Star";

const page = () => {
  return (
    <div className="w-full h-[65px] flex items-center bg-[#f1faff] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] ml-[10px]">
          <Star />
        </div>
      </div>
      <span className="flex-1 text-black overflow-hidden whitespace-nowrap overflow-ellipsis">
        {/*{title} */}
      </span>
      <button></button>
    </div>
  );
};

export default page;
