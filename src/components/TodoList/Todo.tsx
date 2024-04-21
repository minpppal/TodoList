"use client";
import React, { useEffect, useState } from "react";
import Star from "./Star";
import { HiArrowRight } from "react-icons/hi2";
import { db } from "@/utils/api/firebase";
import { collection, getDocs } from "firebase/firestore";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "clients"));
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setTitle(doc.data().title);
        });
        setHasData(true);
      } else {
        setHasData(false);
      }
    };
    fetchData();
  }, []);

  if (!hasData) {
    return null;
  }

  return (
    <div className="w-full h-[65px] flex items-center bg-[#f1faff] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] ml-[10px]">
          <Star />
        </div>
      </div>
      <span className="flex-1 text-black overflow-hidden whitespace-nowrap overflow-ellipsis">
        {title}
      </span>
      <button>
        <HiArrowRight
          className="ml-[5px] mr-[8px] w-[30px] h-[30px]"
          style={{ color: "black" }}
        />
      </button>
    </div>
  );
};

export default Todo;
