import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Intro = () => {
  const introtext = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".introtext",
        scrub: true,
        start: "top top",
        end: "bottom center",
      },
    });

    tl.fromTo(
      introtext.current,
      {
        opacity: 1,
      },
      { opacity: 0, y: -50 },
      "+=1"
    );
  }, []);
  return (
    <div
      className="w-full introtext uppercase h-[90vh] flex flex-col justify-end text-5xl leading-[50px] md:text-[190px] text-[#d2d2d2] font-bold md:max-w-screen-lg md:leading-[180px] relative"
      ref={introtext}
    >
      <h1>
        Coming <br /> Soon...
      </h1>
    </div>
  );
};

export default Intro;
