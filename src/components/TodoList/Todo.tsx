"use client";
import React, { useEffect } from "react";
import Star from "./Star";
import { HiArrowRight } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { db } from "@/utils/api/firebase";
import { doc, collection, deleteDoc } from "firebase/firestore";

interface TodoProps {
  id: string;
  title: string;
  onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, onDelete }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(db, "clients", id));
    onDelete(id);
  };

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
      <button onClick={handleDelete}>
        <FiTrash2 className="w-[30px] h-[30px] text-[#75c8ff]" />
      </button>
      <button>
        <HiArrowRight className="ml-[5px] mr-[8px] w-[30px] h-[30px] text-[black]" />
      </button>
    </div>
  );
};

export default Todo;
