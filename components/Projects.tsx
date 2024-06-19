"use client";
import React from "react";
import shoppingspot from "../assets/images/projects/shopping-spot.png";
import shopforhome from "../assets/images/projects/shopforhome.jpeg";
import vmeet from "../assets/images/projects/vmeet.png";
import Image from "next/image";

interface ProjectItem {
  image: string;
  title: string;
  description: string;
  url: string;
}

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      image: "/images/projects/vmeet.png",
      title: "VMeet - A Video Conference App",
      description:
        "VMeet is a video conference application created using NextJS 13, ShadcnUI. This application involves instant meetings, schedule meetings, recording and advanced meeting features.",
      url: "https://vmeetapp.vercel.app/",
    },
    {
      image: "/images/projects/shopping-spot.png",
      title: "Shopping Spot Ecommerce App",
      description:
        "Shopping Spot is an ecommerce application created using ReactJS and TailwindCSS in Frontend and Nodejs, Express, MongoDB in backend. This application also involves payment integration using Razorpay.",
      url: "https://shopping-spot.netlify.app/",
    },
    {
      image: "/images/projects/shopforhome.jpeg",
      title: "ShopForHome",
      description:
        "Shopforhome is an Microservices based ecommerce application created using Java, Spring Boot in baceknd and Angular and Bootstrap 5 are used in the front end.",
      url: "",
    },
  ];

  const openProject = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      id="projects"
      className="max-w-[1200px] px-5 py-8 mx-auto dark:text-white scroll-mt-32"
    >
      <h2 className="font-bolsomiq text-5xl text-center font-semibold">
        Projects
      </h2>
      {projects.map((project: ProjectItem, index: number) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-center my-20"
        >
          <div className="max-w-[400px] w-full h-[250px] relative group">
            <Image
              className="mx-auto rounded-lg border-2 border-gray-200 p-3 transition-transform transform-gpu group-hover:scale-105 group-hover:brightness-50"
              src={project.image}
              alt={project.title}
              fill
            />
            {project.url && (
              <button
                onClick={() => openProject(project.url)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 py-2 px-3 rounded-full border-white text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Preview
              </button>
            )}
          </div>
          <div className="flex flex-col items-center md:items-start gap-8">
            <h4 className="font-medium text-3xl text-center md:text-start">
              {project.title}
            </h4>
            <p className="text-center md:text-justify text-lg font-light">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
