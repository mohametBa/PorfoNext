import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
import AnimatedButton from "@/components/buttons/AnimatedButton";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ContactForm = dynamic(() => import("@/utils/ContactForm"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Mohamet&apos;s Portfolio</title>
        {/* <!-- Favicon --> */}
        <link href="/images/pirate.ico" rel="icon" type="image/x-icon" />

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          <AnimatedButton/>
          {/* SocialMedia */}
          <SocialMedia />
          {/* <ContactForm/> */}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
