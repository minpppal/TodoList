"use client";
import React, { useState } from "react";
import TodoList from "@/components/TodoList/TodoList";
import DoingList from "@/components/TodoList/DoingList";
import DoneList from "@/components/TodoList/DoneList";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("todo");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full">
      <div role="tablist" className="tabs tabs-lifted tabs-lg w-full h-full">
        <a
          role="tab"
          className={`tab ${
            activeTab === "todo" ? "tab-active" : ""
          } h-[60px] w-full [--tab-bg:#f1faff] [--tab-border-color:#d9effc] text-primary`}
          onClick={() => handleTabClick("todo")}
        >
          Todo
        </a>
        <a
          role="tab"
          className={`tab ${
            activeTab === "doing" ? "tab-active" : ""
          } h-[60px] [--tab-border-color:#d9effc] [--tab-bg:#f1faff] text-primary`}
          onClick={() => handleTabClick("doing")}
        >
          Doing
        </a>
        <a
          role="tab"
          className={`tab ${
            activeTab === "done" ? "tab-active" : ""
          } h-[60px] [--tab-border-color:#d9effc] [--tab-bg:#f1faff] text-primary`}
          onClick={() => handleTabClick("done")}
        >
          Done
        </a>
      </div>
      {activeTab === "todo" && <TodoList />}
      {activeTab === "doing" && <DoingList />}
      {activeTab === "done" && <DoneList />}
    </div>
  );
};

export default MainTab;
