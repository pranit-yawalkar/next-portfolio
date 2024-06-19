import React from "react";

export interface IExperience {
  companyName: string;
  position: string;
  startYear: string;
  endYear: string;
  description: string[];
}

const Experience = () => {
  const experiences: IExperience[] = [
    {
      companyName: "Deepneura Technologies",
      position: "Sr. Full Stack Developer",
      startYear: "12/2022",
      endYear: "Present",
      description: [
        "Successfully delivered several user-friendly interfaces for web applications using React, Angular, Material UI and Tailwind CSS",
        "Developed robust mobile applications with React Native, achieving high user satisfaction. Integrated native modules and third-party APIs to extend app functionality.",
        "Leveraged AWS Serverless architecture to create cost-effective and scalable solutions.",
        "Managed cloud infrastructure using AWS services and ensured high availability and security.",
        "Built and maintained scalable backend services using Node.js. Designed and implemented RESTful APIs for various applications.",
      ],
    },
    {
      companyName: "Wipro",
      position: "Intern",
      startYear: "03/2022",
      endYear: "07/2022",
      description: [
        "Worked on a project which includes Java, Spring Boot, Microservices in Backend",
        "In frontend, worked on Angular, Angular Material and Bootstrap",
      ],
    },
  ];
  return (
    <div
      id="experience"
      className="max-w-[1200px] px-5 py-8 mx-auto dark:text-white scroll-mt-32"
    >
      <h2 className="font-bolsomiq text-5xl text-center font-semibold">
        Experience
      </h2>
      <div className="flex flex-col gap-10 justify-center my-20">
        {experiences.map((experience: IExperience, index: number) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h5 className="font-medium text-3xl font-merriweather">
                {experience.position}
              </h5>
              <h4 className="text-xl">{experience.companyName}</h4>
              <span className="text-md font-light">
                {experience.startYear}-{experience.endYear}
              </span>
            </div>
            <ul className="font-light">
              {experience.description.map((desc: string, index: number) => (
                <li key={index} className="list-disc">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
