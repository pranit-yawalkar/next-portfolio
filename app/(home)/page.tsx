import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhatIDo from "../../components/WhatIDo";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <>
      <div className="main-container dark:bg-darkGrey">
        <Navbar />
        <main>
          <Hero />
          <WhatIDo />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
