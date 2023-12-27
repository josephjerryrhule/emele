import { postArticles } from "@/app/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

const Research = () => {
  const rRef = useRef(null);
  const rCRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const tl = gsap.fromTo(
      rCRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: rRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      className="w-full flex flex-col justify-center gap-[31px] min-h-screen"
      ref={rRef}
    >
      <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal relative z-[1]">
        Research Works
      </div>
      <div className="research-wrapper w-full overflow-x-hidden">
        <div className="w-full flex items-start gap-[31px]" ref={rCRef}>
          {postArticles.map((rarticle, i) => (
            <div
              key={rarticle.id}
              className="flex flex-col gap-5 flex-shrink-0 w-full md:w-1/3 rounded-[5px]"
            >
              <Image
                src="/placeholder.png"
                alt="placeholder"
                width={1920}
                height={900}
              />
              <h3 className="text-2xl md:text-[48px] text-[#d2d2d2] font-semibold capitalize">
                {rarticle.title}
              </h3>
              <p className="text-base md:text-[20px] font-normal md:leading-[32px]">
                {rarticle.excerpt}
              </p>
              <Link
                href={rarticle.Link}
                target="_blank"
                className="underline text-base md:text-[20px]"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
