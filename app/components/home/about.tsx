import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

const About = () => {
  const abouttext = useRef(null);

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

  return (
    <div
      className="w-full text-5xl md:text-[98px] text-[#d2d2d2] font-bold md:leading-[100px] flex flex-col justify-center opacity-80 md:opacity-0 min-h-screen relative"
      ref={abouttext}
      id="about"
    >
      <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal">
        About
      </div>
      <h2>
        I am Emele Arthur-Hayford.
        <br />
        A Medical Laboratory Scientist.
        <br />A Digital Marketer, Founder of WMF.
      </h2>
      <div className="absolute bottom-0 right-0 text-[12px] font-normal uppercase">
        Scroll
      </div>
    </div>
  );
};

export default About;
