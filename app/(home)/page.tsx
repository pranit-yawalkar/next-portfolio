import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhyBusinessesWorkWithMe from "../../components/WhatIDo";
import Expertise from "../../components/Expertise";
import Industries from "../../components/Industries";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Testimonials";
import SkillsAndCapabilities from "../../components/Skills";
import Process from "../../components/Process";
import WhyChooseMe from "../../components/WhyChooseMe";
import EngagementModels from "../../components/EngagementModels";
import Experience from "../../components/Experience";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import BackToTop from "../../components/BackToTop";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <main>
          <Hero />
          <WhyBusinessesWorkWithMe />
          <Expertise />
          <Industries />
          <Projects />
          <Testimonials />
          <SkillsAndCapabilities />
          <Process />
          <WhyChooseMe />
          <EngagementModels />
          <Experience />
          <FAQ />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </>
  );
};

export default Home;
