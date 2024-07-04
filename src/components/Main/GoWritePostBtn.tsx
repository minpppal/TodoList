import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";

const GoWritePostBtn = () => {
  return (
    <Link href="/writePost">
      <div className="w-full h-[60px] flex justify-center items-center bg-[#f1faff]">
        <FaCirclePlus color="#87cefa" size="40" />
      </div>
    </Link>
  );
};

export default GoWritePostBtn;
