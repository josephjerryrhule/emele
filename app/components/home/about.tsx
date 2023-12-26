import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const About = () => {
  const abouttext = useRef(null);
  const text = useRef(null);

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

    const animation = gsap.to(".emeleimg", {
      paused: true,
      opacity: 1,
      scale: 1,
    });

    const handleMouseOver = () => {
      animation.play(); // Play the animation when mouseover occurs
    };

    const handleMouseOut = () => {
      animation.reverse(); // Reverse the animation when mouseout occurs
    };

    // Add event listeners to the text element
    if (text.current) {
      text.current.addEventListener("mouseover", handleMouseOver);
      text.current.addEventListener("mouseout", handleMouseOut);
    }

    // Clean up event listeners
    return () => {
      if (text.current) {
        text.current.removeEventListener("mouseover", handleMouseOver);
        text.current.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

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
        <span ref={text} className="emele-bg">
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
