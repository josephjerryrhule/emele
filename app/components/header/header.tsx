import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="logo-area">
        <Link href="/">Header Logo</Link>
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
