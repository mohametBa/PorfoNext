"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import ImageGrid from "./ImageGrid"; 

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("slide-in");
        introRef.current.classList.add("slide-in");
      } else {
        profileRef.current.classList.remove("slide-in");
        introRef.current.classList.remove("slide-in");
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>Mohamet&apos;s Portfolio</title>
      </Head>
      <section id="home">
        <div
          className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"
          ref={homeRef}
        >
          <div
            className="translate-x-[-500px] transition-all duration-700 opacity-0"
            ref={introRef}
          >
            <p className="py-2 text-2xl md:text-4xl font-semibold font-sans">
              Hi There !
            </p>
            <p className="text-2xl md:text-4xl py-2 font-semibold font-sans">
              I&apos;m a full stack
              <span className="text-[#c72c6c] dark:text-[#07d0e5]">
                {" "}
                developer <span className="text-white">|</span>
              </span>
            </p>
            <div className="mt-5 md:mt-10 flex gap-3">
              <Link
                className="text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1"
                href={"#getInTouch"}
              >
                Contactez-moi
              </Link>

              <Link
                className="text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1"
                href="https://drive.google.com/file/d/1PiK5o01z40V-_tUHz4SI7ZmIW3_F1tyD/view?usp=sharing"
                target="_blank"
              >
                Telecharger mon CV
              </Link>
            </div>
          </div>

          <div
            className="w-[180px] h-[400px] md:w-[460px] md:h-[400px] m-auto md:m-0 mt-[40px] md:mt-0"
            ref={profileRef}
          >
            <ImageGrid columns={5} imgSrc="/images/imagemomo.png" rows={5} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
