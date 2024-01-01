import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface ArticleItem {
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
      media_details: {
        width: number;
        height: number;
      };
    }[];
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,
          {
            params: {
              per_page: 8,
              _embed: "",
              order: "desc",
            },
          }
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching data from WordPress:", error);
      }
    };

    fetchData();
  }, []);

  const triggerRef = useRef(null);
  const articlesContainer = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      articlesContainer.current,
      {
        translateX: 0,
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div
      className="w-full flex flex-col justify-center gap-[31px] min-h-screen"
      ref={triggerRef}
    >
      <div className="bg-emelered rounded-[20px] p-[6px_32px] font-bold w-fit text-[20px] leading-normal relative z-[1]">
        Articles
      </div>
      <div className="articles-wrapper w-full overflow-x-hidden">
        <div
          className="w-full flex items-start gap-[31px] h-fit"
          ref={articlesContainer}
        >
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="flex flex-col gap-5 flex-shrink-0 w-full md:w-1/3 rounded-[5px]"
            >
              <Image
                src={article._embedded["wp:featuredmedia"][0].source_url}
                alt={article._embedded["wp:featuredmedia"][0].alt_text}
                width={
                  article._embedded["wp:featuredmedia"][0].media_details.width
                }
                height={
                  article._embedded["wp:featuredmedia"][0].media_details.height
                }
                className="w-full h-[391px] object-cover object-center"
              />
              <h3 className="text-2xl md:text-[48px] text-[#d2d2d2] font-semibold capitalize md:leading-[50px]">
                {article.title.rendered}
              </h3>

              <p
                className="text-base md:text-[20px] font-normal md:leading-[32px]"
                dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
              />

              <Link
                href={article.acf.link.url}
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

export default Articles;
