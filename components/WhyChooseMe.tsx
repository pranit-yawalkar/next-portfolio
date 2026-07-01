import React from "react";

const WhyChooseMe = () => {
  const reasons = [
    { title: "Business-first Thinking", description: "Technology aligned with business goals, not the other way around." },
    { title: "Enterprise Experience", description: "Built software used in healthcare and financial environments." },
    { title: "End-to-End Delivery", description: "From concept to deployment and ongoing support." },
    { title: "Scalable Architecture", description: "Designed for long-term growth and evolution." },
    { title: "Clear Communication", description: "Regular updates, transparent progress, no surprises." },
    { title: "Modern Engineering", description: "Clean, maintainable, secure, and high-performing software." }
  ];

  return (
    <div id="why-choose-me" className="w-full py-14 md:py-20 scroll-mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-primary-500/5 to-accent-500/5"></div>
      <div className="max-w-[1200px] px-4 md:px-5 py-5 mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
            Why Choose Me
          </h2>
          <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            The difference between a developer and a technology partner
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="card-hover glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
