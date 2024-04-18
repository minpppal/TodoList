"use client";
import React, { useState } from "react";

const MainTab = () => {
  const [useTab, setUseTab] = useState("todo");

  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg">
      <a
        role="tab"
        className={`tab ${
          useTab === "todo" ? "tab-active" : ""
        } h-[60px] [--tab-bg:#f1faff] [--tab-border-color:#d9effc] text-primary`}
        onClick={() => setUseTab("todo")}
      >
        Todo
      </a>
      <a
        role="tab"
        className={`tab ${
          useTab === "doing" ? "tab-active" : ""
        } h-[60px] [--tab-border-color:#d9effc] [--tab-bg:#f1faff] text-primary`}
        onClick={() => setUseTab("doing")}
      >
        Doing
      </a>
      <a
        role="tab"
        className={`tab ${
          useTab === "done" ? "tab-active" : ""
        } h-[60px] [--tab-border-color:#d9effc] [--tab-bg:#f1faff] text-primary`}
        onClick={() => setUseTab("done")}
      >
        Done
      </a>
    </div>
  );
};

export default MainTab;
