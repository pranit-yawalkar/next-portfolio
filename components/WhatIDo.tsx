import React from "react";

const WhyBusinessesWorkWithMe = () => {
  return (
    <div
      id="about"
      className="w-full py-14 md:py-20 scroll-mt-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-accent-500/5 to-primary-500/5"></div>
      <div className="max-w-[1200px] px-4 md:px-5 py-5 mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
            Why Businesses Work With Me
          </h2>
          <p className="text-base md:text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto font-light">
            Technology should accelerate growth, not create complexity.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-5 md:p-12">
            <p className="text-sm md:text-xl text-dark-700 dark:text-dark-200 leading-relaxed mb-5 md:mb-8">
              I help businesses design, build, modernize, and scale digital products that solve real operational problems. Whether it&apos;s an ERP platform, a healthcare consultation system, an AI-powered document workflow, or a financial management application, I focus on creating software that is secure, scalable, and easy to evolve.
            </p>
            <p className="text-sm md:text-xl text-dark-700 dark:text-dark-200 leading-relaxed">
              I work across the complete product lifecycle—from architecture and UI/UX implementation to backend development, cloud deployment, and long-term optimization.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass rounded-xl p-6 card-hover">
            <div className="text-3xl font-bold text-gradient mb-2">End-to-End</div>
            <div className="text-dark-600 dark:text-dark-300">From concept to deployment and support</div>
          </div>
          <div className="glass rounded-xl p-6 card-hover">
            <div className="text-3xl font-bold text-gradient mb-2">Business-First</div>
            <div className="text-dark-600 dark:text-dark-300">Technology aligned with your goals</div>
          </div>
          <div className="glass rounded-xl p-6 card-hover">
            <div className="text-3xl font-bold text-gradient mb-2">Scalable</div>
            <div className="text-dark-600 dark:text-dark-300">Built for long-term growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBusinessesWorkWithMe;
