"use client";
import React from "react";

const MainTab = () => {
  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg">
      <a
        role="tab"
        className="tab tab-active h-[60px] [--tab-bg:#d9effc] [--tab-border-color:#d9effc] text-primary"
      >
        Todo
      </a>
      <a
        role="tab"
        className="tab h-[60px] [--tab-border-color:#d9effc] text-primary"
      >
        Doing
      </a>
      <a
        role="tab"
        className="tab h-[60px] [--tab-border-color:#d9effc] text-primary"
      >
        Done
      </a>
    </div>
  );
};

export default MainTab;
