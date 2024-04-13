import React from "react";
import { IoMdSearch } from "react-icons/io";
const MainTitle = () => {
  return (
    <div className="flex items-center justify-center w-full h-[107px] ">
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item bg-white  border-sky-400"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="indicator ">
          <button className="btn join-item bg-white border-sky-400">
            <IoMdSearch className="h-[20px] w-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
