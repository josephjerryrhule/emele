import { postArticles } from "@/app/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

const Research = () => {
  const RtriggerRef = useRef(null);
  const ResearchContainer = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ResearchContainerWidth = ResearchContainer.current.offsetWidth;
    const amountToScrollR = ResearchContainerWidth - window.innerWidth;
    const pinR = gsap.fromTo(
      ResearchContainer.current,
      {
        translateX: 0,
        opacity: 1,
      },
      {
        translateX: amountToScrollR * 50,
        opacity: 0,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: RtriggerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      pinR.kill();
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-center gap-[31px] min-h-screen">
      <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal relative z-[1]">
        Research Works
      </div>
      <div
        className="research-wrapper w-full overflow-x-hidden"
        ref={RtriggerRef}
      >
        <div
          className="w-full flex items-start gap-[31px]"
          ref={ResearchContainer}
        >
          {postArticles.map((article, i) => (
            <div
              key={article.id}
              className="flex flex-col gap-5 flex-shrink-0 w-full md:w-1/3 rounded-[5px]"
            >
              <Image
                src="/placeholder.png"
                alt="placeholder"
                width={1920}
                height={900}
              />
              <h3 className="text-2xl md:text-[48px] text-[#d2d2d2] font-semibold capitalize">
                {article.title}
              </h3>
              <p className="text-base md:text-[20px] font-normal md:leading-[32px]">
                {article.excerpt}
              </p>
              <Link
                href={article.Link}
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
