import React from "react";

const Process = () => {
  const steps = [
    { number: "01", icon: "🔍", title: "Discovery & Scoping", description: "Deep dive into your business goals, existing systems, user needs, and technical constraints to define a clear product scope." },
    { number: "02", icon: "🏗️", title: "Architecture & Planning", description: "Design the technical architecture, define the tech stack, and create a phased delivery roadmap aligned with your priorities." },
    { number: "03", icon: "⚡", title: "Rapid Prototyping", description: "Build working prototypes to validate assumptions early and align stakeholders before full development begins." },
    { number: "04", icon: "🔨", title: "Iterative Development", description: "Deliver in focused sprints with regular demos, feedback loops, and continuous integration to keep the product evolving." },
    { number: "05", icon: "🧪", title: "Quality & Testing", description: "Rigorous testing across performance, security, and user experience to ensure production-ready software." },
    { number: "06", icon: "🚀", title: "Deployment & Support", description: "Cloud deployment, monitoring setup, team handover, and ongoing optimization to keep the product healthy long-term." },
  ];

  return (
    <div id="process" className="max-w-[1200px] px-4 md:px-5 py-14 md:py-20 mx-auto scroll-mt-32">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
          How I Work
        </h2>
        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          A structured, transparent process from first conversation to live product
        </p>
      </div>

      {/* Mobile: left-line vertical list */}
      <div className="md:hidden relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
        <div className="flex flex-col gap-5 pl-14">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-9 w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-dark-900 z-10 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{step.number}</span>
              </div>
              <div className="card-hover glass rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{step.icon}</span>
                  <h3 className="font-display text-base font-bold text-dark-900 dark:text-white">{step.title}</h3>
                </div>
                <p className="text-dark-600 dark:text-dark-300 text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: alternating timeline */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
        <div className="flex flex-col gap-10">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex gap-8 items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? "flex justify-end" : ""}`}>
                {index % 2 === 0 && (
                  <div className="card-hover glass rounded-2xl p-6 max-w-md w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="font-display text-xl font-bold text-dark-900 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-dark-900 z-10 flex items-center justify-center text-white text-xs font-bold">
                {step.number}
              </div>
              <div className="w-1/2">
                {index % 2 !== 0 && (
                  <div className="card-hover glass rounded-2xl p-6 max-w-md w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="font-display text-xl font-bold text-dark-900 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{step.description}</p>
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

export default Process;
