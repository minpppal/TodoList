"use client";
import React from "react";

interface DeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onCancel, onConfirm }) => {
  return (
    <div className="h-[852px] w-[393px] fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="w-[300px] h-[140px] items-center text-center rounded-lg bg-[#c4ddff]">
        <p className="mt-8 text-[black] h-[50px] ">삭제하시겠습니까?</p>
        <div>
          <button
            onClick={onCancel}
            className="w-[100px] h-[60px] text-[black] mr-10"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="w-[100px] h-[60px] text-[black]"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
