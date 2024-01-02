import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <div
      className="w-full flex items-center text-white text-[14px] pt-10 pb-10 uppercase gap-5 justify-between"
      id="contact"
    >
      <div className="flex items-center gap-5 w-full">
        <Link href="https://www.instagram.com/just_emele_/" target="_blank">
          Instagram
        </Link>
        <Link
          href="https://www.linkedin.com/in/emele-arthur-hayford-574161206"
          target="_blank"
        >
          Linkedin
        </Link>
        <Link href="https:twitter.com">Twitter</Link>
        <Link href="#">Resume</Link>
      </div>

      {/* News Letter Form */}
      <div className="w-full">
        <form
          action=""
          className="w-full bg-transparent border-b flex items-center justify-between text-[14px] pb-2"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="bg-transparent outline-none w-full"
            placeholder="Enter email address to subscribe to my newsletter"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default FooterComponent;
