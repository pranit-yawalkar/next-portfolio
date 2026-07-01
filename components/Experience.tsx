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
      position: "Frontend Developer",
      startYear: "12/2022",
      endYear: "Present",
      description: [
        "Worked on making UI for various applications using Angular, Angular Material, React, Bootstrap.",
        "Worked on mobile app development using Ionic, Capacitor and Cordova.",
        "Worked with clients to develop frontends of various applications.",
      ],
    },
    {
      companyName: "Wipro",
      position: "Intern",
      startYear: "03/2022",
      endYear: "07/2022",
      description: [
        "Worked on a project which includes Java, Spring Boot, Microservices in Backend.",
        "In frontend, worked on Angular, Angular Material and Bootstrap.",
      ],
    },
  ];

  return (
    <div id="experience" className="max-w-[1200px] px-4 md:px-5 py-16 md:py-20 mx-auto scroll-mt-32">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
          Work Experience
        </h2>
        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          My professional journey and career milestones
        </p>
      </div>

      {/* Mobile: left-anchored vertical timeline */}
      <div className="md:hidden relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
        <div className="flex flex-col gap-6 pl-12">
          {experiences.map((experience: IExperience, index: number) => (
            <div key={index} className="relative">
              <div className="absolute -left-8 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-dark-900 z-10 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
              <div className="card-hover glass rounded-2xl p-5">
                <span className="inline-block px-2 py-0.5 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-medium mb-2">
                  {experience.startYear} – {experience.endYear}
                </span>
                <h3 className="font-display text-lg font-bold text-dark-900 dark:text-white">{experience.position}</h3>
                <h4 className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">{experience.companyName}</h4>
                <ul className="space-y-1.5">
                  {experience.description.map((desc: string, descIndex: number) => (
                    <li key={descIndex} className="flex items-start gap-2 text-dark-600 dark:text-dark-300 text-xs">
                      <span className="text-primary-500 mt-0.5 flex-shrink-0">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: alternating timeline */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
        <div className="flex flex-col gap-12">
          {experiences.map((experience: IExperience, index: number) => (
            <div key={index} className={`relative flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <div className="w-1/2 flex justify-end">
                {index % 2 === 0 && (
                  <div className="card-hover glass rounded-2xl p-8 max-w-lg w-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-2">
                      {experience.startYear} – {experience.endYear}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-dark-900 dark:text-white">{experience.position}</h3>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">{experience.companyName}</h4>
                    <ul className="space-y-2">
                      {experience.description.map((desc: string, descIndex: number) => (
                        <li key={descIndex} className="flex items-start gap-2 text-dark-600 dark:text-dark-300">
                          <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-dark-900 z-10 flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              <div className="w-1/2">
                {index % 2 !== 0 && (
                  <div className="card-hover glass rounded-2xl p-8 max-w-lg w-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-2">
                      {experience.startYear} – {experience.endYear}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-dark-900 dark:text-white">{experience.position}</h3>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">{experience.companyName}</h4>
                    <ul className="space-y-2">
                      {experience.description.map((desc: string, descIndex: number) => (
                        <li key={descIndex} className="flex items-start gap-2 text-dark-600 dark:text-dark-300">
                          <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
