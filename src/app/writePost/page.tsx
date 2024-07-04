"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/api/firebase";
import { useRouter } from "next/navigation";
import { useTodoStore } from "@/store/useTodoStore";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [docId, setDocId] = useState("");
  const router = useRouter();
  const { selectedClient } = useTodoStore();

  useEffect(() => {
    // 선택된 Todo가 있으면 해당 데이터로 상태를 설정합니다.
    if (selectedClient.id) {
      // 선택된 Todo에 id가 있는 경우
      setTitle(selectedClient.title);
      setContent(selectedClient.content);
      setDocId(selectedClient.id); // docId 상태를 설정
      // console.log("불러온 제목:", selectedClient.title); 데이터 확인용
      // console.log("내용", selectedClient.content);
    } else {
      setTitle("");
      setContent("");
      setDocId(""); // docId 상태를 초기화
    }
  }, [selectedClient]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!title) {
      console.log("제목을 입력해주세요.");
      return;
    }

    try {
      if (docId) {
        // 문서 ID가 있는 경우, 기존 문서 업데이트
        const docRef = doc(db, "clients", docId);
        await updateDoc(docRef, {
          title: title,
          content: content,
          timestamp: new Date(),
        });
      } else {
        // 새 문서 추가
        await addDoc(collection(db, "clients"), {
          title: title,
          content: content,
          timestamp: new Date(),
        });
      }
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="h-[630px] m-[0px] p-[0px]">
        <textarea
          className=" w-[393px] h-[630px] text-[20px] pl-[3px] bg-[#f6fcff]
          text-black outline-none "
          placeholder="Todo"
          value={content}
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
