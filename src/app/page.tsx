import React from "react";
import MainTitle from "@/components/Main/MainTitle";
import MainTab from "@/components/Main/MainTab";
import GoWritePostBtn from "@/components/Main/GoWritePostBtn";

export default function Home() {
  return (
    <>
      <div className="bg-white h-full">
        <MainTitle />
        <MainTab />
        <GoWritePostBtn />
      </div>
    </>
  );
}
