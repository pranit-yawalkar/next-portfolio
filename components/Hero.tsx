"use client";
import React from "react";
import profilePhoto from "../assets/images/hero_img.svg";
import Image from "next/image";
// import resumeUrl from '../../src/assets/Files/cv.pdf';

const Hero = () => {
  const downloadCV = () => {
    const resumeUrl = "CV_Pranit_Yawalkar_Full_Stack_Developer.pdf";
    const link = document.createElement("a");

    link.href = resumeUrl;
    link.download = "CV_Pranit_Yawalkar_Full_Stack_Developer.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="max-w-[1200px] px-5 mx-auto scroll-mt-32">
      <div className="flex min-h-[600px] flex-col-reverse py-5 md:flex-row justify-between items-center">
        <div className="md:w-3/5 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h6 className="font-medium text-2xl dark:text-white">HELLO, I'M</h6>
            <h2 className="font-extrabold text-5xl md:text-7xl font-bolsomiq dark:text-white">
              Pranit Yawalkar
            </h2>
            <p className="font-semibold text-3xl md:text-4xl text-primary">
              Full Stack Developer
            </p>
          </div>
          <div className="my-5">
            <p className="text-xl font-light dark:text-white">
              I am a passionate Full Stack Developer with expertise in crafting
              visually stunning and user-friendly web applications.
            </p>
          </div>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <button
              onClick={downloadCV}
              className="bg-primary text-white cursor-pointer py-3 px-5 md:px-8 text-lg rounded-lg shadow-md"
            >
              Download CV
            </button>
            <a
              href="#contact"
              className="border-primary border-2 py-3 px-5 md:px-8 text-lg rounded-lg shadow-md text-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="rounded-full md:w-2/5 text-center md:-mt-20">
          <Image className="w-full mx-auto" src="/images/hero_img.svg" alt="profile" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
