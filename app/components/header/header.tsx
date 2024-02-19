"use client";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const scrollToSection = (sectionId: any) => {
    gsap.to(window, { duration: 1, scrollTo: `#${sectionId}` });
  };
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="logo-area text-[30px] group">
        <Link href="/" className="flex items-center gap-5">
          <div className="w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out group-hover:rounded-[0px]"></div>
          <span>E-A-H</span>
        </Link>
      </div>
      <div className="navlinksarea flex items-center gap-5 font-semibold">
        {/*   <Link href="/">Home</Link>
        <Link href="#about" onClick={() => scrollToSection("about")}>
          About
        </Link>
        <Link href="#contact" onClick={() => scrollToSection("contact")}>
          Contact
        </Link> */}
      </div>
    </nav>
  );
};

export default HeaderComponent;
