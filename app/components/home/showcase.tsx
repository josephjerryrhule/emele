import { postArticles } from "@/app/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

const ShowCase = () => {
  const gridContainer = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridContainer.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      ".caseitem",
      {
        opacity: 1,
        y: -20,
        duration: 3,
        ease: "power2.out",
        stagger: 1,
      },

      2
    );
  }, []);
  return (
    <div className="w-full show-case-wrapper">
      <div className="w-full text-[#d2d2d2] flex flex-col min-h-screen justify-center gap-[51px]">
        <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal relative z-[1]">
          Show Case
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          ref={gridContainer}
        >
          {postArticles.map((cases, i) => (
            <div
              key={cases.id}
              className="w-full relative h-[260px] overflow-clip group rounded-xl caseitem opacity-0"
            >
              <Image
                src="/placeholder.png"
                alt={cases.title}
                width={1920}
                height={900}
                className="w-full h-full scale-[1] transition-all duration-300 ease-in-out group-hover:scale[1.1]"
              />
              <div className="w-full h-full absolute top-0 z-[1] bg-gradient-to-b from-[#d9d9d01b] to-[#00000085] p-5 flex flex-col justify-end">
                <h3 className="text-[24px] font-semibold translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  {cases.title}
                </h3>
                <p className="text-base translate-y-[40%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {cases.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;