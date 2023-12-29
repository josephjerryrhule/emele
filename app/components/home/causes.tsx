import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface CausesItem {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    link: {
      url: string;
    };
  };
  excerpt: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
      alt_text: string;
    }[];
  };
}

const Causes = () => {
  const [cause, setCause] = useState<CausesItem[]>([]);
  const gridContainer = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://emele.joeydutch.com/wp-json/wp/v2/causes`,
          {
            params: {
              _embed: "",
              order: "desc",
            },
          }
        );
        setCause(response.data);
      } catch (error) {
        console.error("Error fetching data from WordPress:", error);
      }
    };
    fetchData();

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridContainer.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      ".causeitem",
      {
        opacity: 1,
        y: -20,
        duration: 3,
        ease: "power2.out",
        stagger: 1,
      },

      2
    );
  }, [cause]);

  return (
    <div className="w-full">
      <div className="min-h-screen flex flex-col justify-center gap-[51px]">
        <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal relative z-[1]">
          Causes
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 w-full md:gap-5"
          ref={gridContainer}
        >
          {cause.map((causes, i) => (
            <div
              className={`col-span-1 h-[260px] rounded-[20px] causeitem opacity-0 relative overflow-clip group ${
                i === 0
                  ? "sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 md:h-[464px] mb-[31px]"
                  : "mb-5 ml-3 mr-3 md:ml-0 md:mr-0 md:mb-0"
              }`}
              key={causes.id}
            >
              <Image
                src={causes._embedded["wp:featuredmedia"][0].source_url}
                alt={causes._embedded["wp:featuredmedia"][0].alt_text}
                width={1920}
                height={900}
                className="h-full rounded-[20px] object-cover"
              />
              <div className="w-full h-full absolute top-0 bg-gradient-to-b from-[#0000001b] to-[#000] rounded-[20px] flex flex-col justify-end p-5 text-[#d2d2d2]">
                <Link href={causes.acf.link.url} target="_blank">
                  <h3
                    className={`text-2xl font-semibold translate-y-[100%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${
                      i === 0 ? "md:text-6xl translate-y-[50%]" : ""
                    }`}
                  >
                    {causes.title.rendered}
                  </h3>
                  <p
                    className={`text-base translate-y-[100%] opacity-0 font-normal group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out ${
                      i === 0 ? "md:text-2xl" : ""
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: causes.excerpt.rendered,
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

export default Causes;
