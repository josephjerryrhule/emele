import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="w-full flex items-center text-white text-2xl pt-10 pb-10 uppercase gap-5">
      <Link href="https://www.instagram.com/just_emele_/" target="_blank">
        Instagram
      </Link>
      <Link
        href="https://www.linkedin.com/in/emele-arthur-hayford-574161206"
        target="_blank"
      >
        Linkedin
      </Link>
    </div>
  );
};

export default FooterComponent;
