import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";

const About = () => {
  const abouttext = useRef(null);
  const text = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        scrub: true,
        start: "top center",
        end: "bottom bottom",
      },
    });

    tl.fromTo(
      abouttext.current,
      {
        opacity: 0,
      },
      { opacity: 1, y: 50 },
      "+=1"
    );
  }, []);

  useLayoutEffect(() => {
    if (isMouseOver) {
      gsap.to(".emeleimg", { opacity: 1, scale: 1, duration: 0.3 });
    } else {
      gsap.to(".emeleimg", { opacity: 0, scale: 0.98, duration: 0.3 });
    }
  }, [isMouseOver]);

  return (
    <div
      className="w-full text-5xl md:text-[98px] text-[#d2d2d2] font-bold md:leading-[100px] flex flex-col justify-center opacity-80 md:opacity-0 min-h-screen relative"
      ref={abouttext}
      id="about"
    >
      <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal relative z-[1]">
        About
      </div>
      <h2 className="relative z-[1]">
        I am{" "}
        <span
          ref={text}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="emele-bg"
        >
          Emele Arthur-Hayford
        </span>
        .
        <br />
        A Medical Laboratory Scientist.
        <br />A Digital Marketer, Founder of WMF.
      </h2>
      <div className="absolute bottom-0 right-0 text-[12px] font-normal uppercase z-[1]">
        Scroll
      </div>
      <Image
        src="/emele.jpg"
        alt="Emele"
        width={100}
        height={100}
        className="absolute w-full h-full object-cover emeleimg z-0 opacity-0 scale-[0.98]"
      />
    </div>
  );
};

export default About;
