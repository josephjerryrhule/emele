import { postArticles } from "@/app/constants";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const ShowCase = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://emele.joeydutch.com/wp-json/wp/v2/showcase`,
          {
            params: {
              per_page: 8,
              _embed: "",
              order: "desc",
            },
          }
        );
        setCases(response.data);
      } catch (error) {
        console.error("Error fetching data from WordPress:", error);
      }
    };

    fetchData();
  }, []);

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
          {cases.map((cases, i) => (
            <div
              key={cases.id}
              className="w-full relative h-[260px] overflow-clip group rounded-xl caseitem opacity-0"
            >
              <Image
                src={cases._embedded["wp:featuredmedia"][0].source_url}
                alt={cases._embedded["wp:featuredmedia"][0].alt_text}
                width={1920}
                height={900}
                className="w-full h-full scale-[1] transition-all duration-300 ease-in-out group-hover:scale[1.1]"
              />
              <div className="w-full h-full absolute top-0 z-[1] bg-gradient-to-b from-[#d9d9d01b] to-[#00000085] p-5 flex flex-col justify-end">
                <Link href={cases.acf.link.url} target="_blank">
                  <h3 className="text-[24px] font-semibold translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    {cases.title.rendered}
                  </h3>
                  <p
                    className="text-base translate-y-[40%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                    dangerouslySetInnerHTML={{
                      __html: cases.excerpt.rendered,
                    }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
