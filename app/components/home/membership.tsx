import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface LogoItem {
  id: number;
  title: {
    rendered: string;
  };
  better_featured_image: {
    source_url: string;
    alt_text: string;
    media_details: {
      width: number;
      height: number;
    };
  };
}

const Membership = () => {
  const [logo, setLogos] = useState<LogoItem[]>([]);
  const Container = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/memberships`,
          {
            params: {
              _embed: "",
              order: "desc",
            },
          }
        );
        setLogos(response.data);
      } catch (error) {
        console.error("Error fetching data from Wordpress:", error);
      }
    };

    fetchData();

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: Container.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      ".logo-item",
      {
        opacity: 1,
        y: -20,
        duration: 3,
        ease: "power2.out",
        stagger: 1,
      },

      2
    );
  }, [logo]);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20 min-h-screen">
      <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal relative z-[1]">
        Membership
      </div>
      <div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center md:max-w-screen-md gap-10"
        ref={Container}
      >
        {logo.map((logos, i) => (
          <div
            className="w-full logo-item opacity-0 max-w-[120px]"
            key={logos.id}
            title={logos.title.rendered}
          >
            <Image
              src={logos.better_featured_image.source_url}
              alt={logos.better_featured_image.alt_text}
              width={logos.better_featured_image.media_details.width}
              height={logos.better_featured_image.media_details.height}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
