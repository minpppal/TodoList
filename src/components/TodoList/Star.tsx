"use client";
import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [starColor, setYellowStar] = useState("#ffffff");
  const handleClick = () => {
    setYellowStar(starColor === "#ffffff" ? "#f4b800" : "#ffffff");
  };

  return (
    <button onClick={handleClick} className="h-[25px] w-[25px]">
      <FaStar className="h-[25px] w-[25px]" color={starColor} />
    </button>
  );
};

export default Star;
