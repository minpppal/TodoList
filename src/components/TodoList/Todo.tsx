"use client";
import React, { useState } from "react";
import Star from "./Star";
import { HiArrowRight } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import DeleteModal from "./DeleteModal";
import { db } from "@/utils/api/firebase";
import { doc, deleteDoc, Timestamp } from "firebase/firestore";
import { useTodoStore } from "@/store/useTodoStore";
import { useRouter } from "next/navigation";

interface TodoProps {
  id: string;
  title: string;
  content: string;
  timestamp: Timestamp;
  onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  id,
  title,
  content,
  onDelete,
  timestamp,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { setSelectedClient } = useTodoStore();
  const date = timestamp ? timestamp.toDate() : new Date();
  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSelect = () => {
    setSelectedClient({ id, title, content });
    return router.replace("/writePost");
  };
  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    await deleteDoc(doc(db, "clients", id)); // Firestore에서 문서 삭제
    setIsModalOpen(false); // 모달 닫기
    onDelete(id); // 부모 컴포넌트에 삭제 알림
  };

  return (
    <div className="w-full h-[65px] flex items-center justify-center bg-[#f1faff] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] ml-[10px] mr-1">
          <Star />
        </div>
      </div>
      <div
        onClick={handleSelect}
        className="pt-[15px] w-[280px] flex-1 text-black overflow-hidden whitespace-nowrap overflow-ellipsis text-[20px]"
      >
        <span>{title}</span>
        <div className="w-[100px] h-[15px] text-black bg-[#f1faff] text-[8px]">
          {formattedDate}
        </div>
      </div>

      <button onClick={handleDeleteClick}>
        <FiTrash2 className="w-[30px] h-[30px] text-[#75c8ff]" />
      </button>
      <button>
        <HiArrowRight className="ml-[5px] mr-[8px] w-[30px] h-[30px] text-[black]" />
      </button>
      {isModalOpen && (
        <DeleteModal
          onConfirm={handleDeleteConfirm}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Todo;
