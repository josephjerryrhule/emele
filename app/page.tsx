"use client";

import Intro from "./components/home/intro";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
/* import About from "./components/home/about";
import Articles from "./components/home/articles";
import Research from "./components/home/research";
import ShowCase from "./components/home/showcase";
import Causes from "./components/home/causes";
import Membership from "./components/home/membership"; */

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="w-full h-full section relative">
        <Intro />
        {/*   <About />
        <Articles />
        <Research />
        <ShowCase />
        <Causes />
        <Membership /> */}
      </div>
    </main>
  );
}
