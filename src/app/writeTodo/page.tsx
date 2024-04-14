import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-[393px] h-[762px] bg-white">
      <div className="w-full h-[70px] bg-[#F4FFFF] border-b-2 flex items-center ">
        <input
          type="text"
          className=" w-[393px] text-[30px] pl-[3px] bg-[#F4FFFF] text-black outline-none "
          placeholder="제목"
        />
      </div>
      <div className="h-[630px] m-[0px] p-[0px]">
        <textarea
          className=" w-[393px] h-[630px] text-[20px] pl-[3px] bg-[#F4FFFF]
          text-black outline-none "
          placeholder="Todo"
        ></textarea>
      </div>
      <Link href="/">
        <div className="bg-[#EBFBFF] w-[393px] h-[62px] border-t-2 flex justify-center">
          <button className="text-black text-center mr-[150px]">취소</button>
          <button className="text-black">저장</button>
        </div>
      </Link>
    </div>
  );
};

export default page;
