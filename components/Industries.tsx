import React from "react";

const Industries = () => {
  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Digital Health", icon: "💊" },
    { name: "Finance", icon: "💰" },
    { name: "Startups", icon: "🚀" },
    { name: "Professional Services", icon: "👔" },
    { name: "Education", icon: "📚" },
    { name: "SMBs", icon: "🏪" },
    { name: "Enterprise", icon: "🏢" }
  ];

  return (
    <div id="industries" className="w-full py-14 md:py-20 scroll-mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-primary-500/5 to-accent-500/5"></div>
      <div className="max-w-[1200px] px-4 md:px-5 py-5 mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
            Industries Served
          </h2>
          <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Trusted across diverse sectors to deliver impactful digital solutions
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="card-hover glass rounded-xl p-4 md:p-6 text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="font-display text-sm md:text-lg font-semibold text-dark-900 dark:text-white">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
