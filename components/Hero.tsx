"use client";
import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div id="home" ref={ref} className={`max-w-[1200px] px-4 md:px-5 mx-auto scroll-mt-20 ${isVisible ? "fade-in visible" : "fade-in"}`}>
      <div className="flex min-h-[90dvh] md:min-h-[700px] flex-col md:flex-row py-12 md:py-20 justify-center items-center gap-10 md:gap-16">

        {/* Left: Text content */}
        <div className="flex flex-col gap-5 flex-1 text-center md:text-left order-2 md:order-1">
          <div className="inline-flex md:justify-start justify-center">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs md:text-sm font-medium">
              Technology Consultant & Product Engineering Partner
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-tight">
            Helping Businesses Transform Ideas into{" "}
            <span className="text-gradient">Scalable Digital Products</span>
          </h1>

          <p className="text-sm md:text-base text-dark-600 dark:text-dark-300 font-light leading-relaxed">
            I partner with startups, healthcare organizations, and enterprises to build secure, scalable software—from AI-powered platforms and ERP systems to cloud-native applications and modern customer experiences.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="glass rounded-xl p-3 text-center card-hover">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-0.5">5+</div>
              <div className="text-xs text-dark-600 dark:text-dark-300">Years Experience</div>
            </div>
            <div className="glass rounded-xl p-3 text-center card-hover">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-0.5">20+</div>
              <div className="text-xs text-dark-600 dark:text-dark-300">Enterprise Features</div>
            </div>
            <div className="glass rounded-xl p-3 text-center card-hover">
              <div className="text-sm md:text-base font-bold text-gradient mb-0.5">Healthcare</div>
              <div className="text-xs text-dark-600 dark:text-dark-300">Finance · AI · Cloud</div>
            </div>
            <div className="glass rounded-xl p-3 text-center card-hover">
              <div className="text-sm md:text-base font-bold text-gradient mb-0.5">Full Product</div>
              <div className="text-xs text-dark-600 dark:text-dark-300">Development</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center md:justify-start">
            <a
              href="#contact"
              className="group relative px-6 py-3.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#expertise"
              className="px-6 py-3.5 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-500/10 transition-all duration-300 hover:scale-105 text-sm"
            >
              View Expertise
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex-shrink-0 order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-primary-500 to-accent-500 shadow-2xl">
              <Image
                src="/images/new_photo.jpeg"
                alt="Pranit Yawalkar"
                width={288}
                height={288}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 glass rounded-xl px-3 py-2 shadow-lg border border-primary-500/20">
              <div className="text-xs font-semibold text-dark-900 dark:text-white">Available for</div>
              <div className="text-xs text-gradient font-bold">New Projects</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
