import React, { Fragment, useState, useRef, useEffect } from "react";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsMenuAppFill } from "react-icons/bs";
import { motion } from "framer-motion";

import ThreeDAnimation from "../utils/SpinningCube"; // Import du composant 3D

const About = () => {
  const [isAbout, setIsAbout] = useState(false);
  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  const text = "Développeur ReactJS passionné et motivé, avec une solide maîtrise du stack MERN et de React. Désireux de contribuer mon expertise en frameworks frontend, en design moderne UI/UX et en développement responsive à une équipe avant-gardiste, tout en continuant à apprendre et à évoluer dans le monde en constante mutation du développement web et mobile.".split(" ");

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        id="about"
        ref={aboutRef}
      >
        <h2 className="text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3">
          <FaUserCheck /> About me
        </h2>
        <div className="pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]">
          {/* Remplace l'image par l'animation 3D */}
          <div
            className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] m-auto"
            ref={profile2Ref}
          >
            <ThreeDAnimation />
          </div>
          <div
            className="text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded"
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className="text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]">
              Mohamet BA
            </p>
            {/* Profil Name */}
            <p className="text-center md:text-left text-red-600 mt-1">
              Ful stack web/App developer
            </p>
            {/* Location */}
            <div className="flex flex-wrap justify-center md:justify-normal gap-5">
              <div className="w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
                <div className="flex gap-3 items-center">
                  <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]">
                  TOULOUSE{" "}
                </p>
              </div>
              {/* Experience */}
              <div className="w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
                <div className="flex gap-3 items-center">
                  <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                    Experience
                  </p>
                  <p>
                    <FaBlackTie />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                  3 Years{" "}
                </p>
              </div>
              {/* Project */}
              <div className="w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
                <div className="flex gap-3 items-center">
                  <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                    Projects
                  </p>
                  <p>
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">
                  +++{" "}
                </p>
              </div>
            </div>
            <div className="mt-5 justify-evenly text-justify">
              <p className="font-cursive text-gray-600 dark:text-gray-300">
                {text.map((el, i) => (
                  <motion.span
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    key={i}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
