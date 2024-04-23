"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/utils/api/firebase";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!title) {
      console.log("제목을 입력해주세요.");
      return;
    }

    try {
      await addDoc(collection(db, "clients"), {
        title: title,
        content: content,
      });
      console.log("데이터가 성공적으로 추가");
      setTitle("");
      setContent("");
      return router.replace("/");
    } catch (error) {
      console.log("데이터 추가 중 오류 발생", error);
    }
  };

  return (
    <div className="w-[393px] h-[762px] bg-white">
      <div className="w-full h-[70px] bg-[#f6fcff] border-b-2 flex items-center ">
        <input
          type="text"
          className=" w-[393px] text-[30px] pl-[3px] bg-[#f6fcff] text-black outline-none "
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="h-[630px] m-[0px] p-[0px]">
        <textarea
          className=" w-[393px] h-[630px] text-[20px] pl-[3px] bg-[#f6fcff]
          text-black outline-none "
          placeholder="Todo"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div className="bg-[#f6fcff] w-[393px] h-[62px] border-t-2 flex justify-center">
        <Link
          href="/"
          className="text-black flex items-center text-center mr-[150px] text-[20px]"
        >
          취소
        </Link>
        <button onClick={handleSubmit} className="text-black text-[20px]">
          저장
        </button>
      </div>
    </div>
  );
};

export default page;
