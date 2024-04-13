import React from "react";

const Todo = () => {
  return (
    <div className="w-full h-[65px] flex items-center bg-[#d9effc] mb-[1px]">
      <div className="w-[50px] ">
        <div className="w-[30px] h-[30px] bg-[white] ml-[10px]">별</div>
      </div>
      <span className="w-[300px] h-[50px] text-black flex items-center">
        제목 데이터 받아오기
      </span>
      <div className="form-control">
        <label className="cursor-pointer label pl-[10px]">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-warning"
          />
        </label>
      </div>
    </div>
  );
};

export default Todo;
