import React from "react";
import Search from "@/components/Main/Search";
import MainTab from "@/components/Main/MainTab";
import GoWritePostBtn from "@/components/Main/GoWritePostBtn";

export default function Home() {
  return (
    <div className="bg-white h-full">
      <Search />
      <MainTab />
      <GoWritePostBtn />
    </div>
  );
}
