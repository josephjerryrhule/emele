import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="logo-area text-[30px] group">
        <Link href="/" className="flex items-center gap-5">
          <div className="w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out group-hover:rounded-[0px]"></div>
          <span>E-A-H</span>
        </Link>
      </div>
      <div className="navlinksarea flex items-center gap-5 font-semibold">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#about">Contact</Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
