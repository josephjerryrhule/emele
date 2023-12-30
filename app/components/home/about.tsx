import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";

const About = () => {
  const abouttext = useRef(null);
  const text = useRef(null);
  const movingText = useRef<HTMLParagraphElement>(null);
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
        trigger: ".about-wrapper",
        scrub: true,
        start: "top bottom",
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

    const textElement = movingText.current;

    if (textElement) {
      const tl = gsap.timeline({ repeat: -1 });

      //Create clones and repeat the animation
      for (let i = 1; i < 5; i++) {
        const clone = textElement.cloneNode(true) as HTMLParagraphElement;

        if (textElement.parentNode) {
          textElement.parentNode.appendChild(clone);

          gsap.set(clone, { marginLeft: "200px" });
        }
      }

      gsap.set(".emelemovingtext", { x: "0%" });

      //Animate all elements to the left
      tl.to(".emelemovingtext", {
        x: "-100%",
        duration: 30,
        ease: "linear",
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (isMouseOver) {
      gsap.to(".emeleimg", { opacity: 1, scale: 1, duration: 0.3 });
    } else {
      gsap.to(".emeleimg", { opacity: 0, scale: 0.98, duration: 0.3 });
    }
  }, [isMouseOver]);

  return (
    <div className="about-wrapper">
      <div
        className="w-full text-[38px] leading-[70px] md:text-[42px] lg:text-[98px] text-[#d2d2d2] font-bold md:leading-[100px] flex flex-col justify-center opacity-80 md:opacity-0 min-h-screen relative"
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
            className="emele-bg hover:underline"
          >
            Emele Arthur-Hayford
          </span>
          .
          <br />
          A Medical Laboratory Scientist.
          <br />A Health Advocate & Marketer,
          <br />
          Social Media Manager, Founder
          <br /> of World Movers Team.
        </h2>
        <div className="flex items-center flex-nowrap emelemoving-textwrapper overflow-clip whitespace-nowrap">
          <p
            className="md:w-[199vw] lg:w-[145vw] xl:w-[110vw] mr-[40px] text-3xl md:text-[64px] font-bold pt-32 pb-32 emelemovingtext"
            ref={movingText}
          >
            Revolutionizing Healthcare Delivery and Driving Change Through
            Innovation
          </p>
        </div>
        <Image
          src="/emele.png"
          alt="Emele Arthur-Hayford"
          width={1920}
          height={900}
          className="absolute w-full h-full object-cover emeleimg z-0 opacity-0 scale-[0.98]"
        />
      </div>
    </div>
  );
};

export default About;
