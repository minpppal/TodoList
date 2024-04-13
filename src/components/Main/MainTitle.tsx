import React from "react";
import { IoMdSearch } from "react-icons/io";
const MainTitle = () => {
  return (
    <div className="flex items-center justify-center w-full h-[107px] ">
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item h-[55px] bg-white border-sky-400 text-black focus:border-sky-400 focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="indicator ">
          <button className="btn join-item bg-white border-sky-400 h-[55px]">
            <IoMdSearch className="h-[25px] w-[25px] " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
