"use client";
import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [checkFavorite, setCheckFavorite] = useState(false);
  const handleClick = () => {
    setCheckFavorite(!checkFavorite);
  };

  return (
    <button onClick={handleClick} className="h-[25px] w-[25px] outline-none">
      {checkFavorite ? (
        <FaStar className="h-[25px] w-[25px] text-[#F4B800]" />
      ) : (
        <FaStar className="h-[25px] w-[25px] text-[#e0e0e0]" />
      )}
    </button>
  );
};

export default Star;
