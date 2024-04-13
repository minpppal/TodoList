import React from "react";
import { FcCalendar } from "react-icons/fc";
import logo from "@/assets/image/todolist.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-5 flex justify-between items-center w-full h-[90px] bg-white ">
      <div className="flex-grow flex ">
        <Link href="/">
          <div className="max-w-[200px]">
            <Image
              src={logo}
              alt="todolist"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </Link>
      </div>
      <Link href="/calendar">
        <div>
          <FcCalendar size="60" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
