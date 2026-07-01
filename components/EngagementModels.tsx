"use client";
import React, { useState } from "react";

const EngagementModels = () => {
  const [activeTab, setActiveTab] = useState<"engagement" | "services">("engagement");

  const models = [
    { icon: "🎯", title: "Project-Based", description: "Fixed scope, timeline, and deliverables. Ideal for building a new product or feature set with defined requirements.", tags: ["Fixed Cost", "Clear Scope", "Defined Timeline"] },
    { icon: "🔄", title: "Ongoing Retainer", description: "A dedicated monthly engagement for continuous development, feature releases, and product evolution.", tags: ["Monthly", "Flexible Scope", "Continuous Delivery"] },
    { icon: "🤝", title: "Technical Partnership", description: "I act as your fractional CTO or lead engineer — helping you make architecture decisions, hire, and scale.", tags: ["Strategic", "Advisory", "Long-term"] },
    { icon: "🚀", title: "MVP Sprint", description: "Rapid 4–8 week sprint to validate your idea with a working MVP, ready for early users and investors.", tags: ["4–8 Weeks", "Rapid Build", "Investor-Ready"] },
  ];

  const services = [
    { icon: "🌐", title: "Web & Mobile App Development", description: "Full-stack development of scalable web and mobile applications using React, Next.js, Angular, Node.js, and Spring Boot." },
    { icon: "🏗️", title: "System Architecture & Design", description: "Technical architecture planning, stack selection, API design, and cloud infrastructure strategy." },
    { icon: "🤖", title: "AI & Automation Integration", description: "Embedding LLMs, document intelligence, chatbots, and automated workflows into your existing products." },
    { icon: "⚡", title: "System Modernization", description: "Migrating legacy systems to modern, cloud-native architectures without disrupting operations." },
    { icon: "📊", title: "Product Strategy & Roadmap", description: "Defining product vision, prioritizing features, and building a roadmap aligned with business objectives." },
    { icon: "☁️", title: "Cloud Deployment & DevOps", description: "AWS infrastructure setup, CI/CD pipelines, monitoring, and DevOps best practices for reliable deployments." },
  ];

  return (
    <div id="engagement-models" className="max-w-[1200px] px-4 md:px-5 py-14 md:py-20 mx-auto scroll-mt-32">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
          How We Work Together
        </h2>
        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          Flexible engagement models designed around your needs
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="glass rounded-xl p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("engagement")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === "engagement"
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md"
                : "text-dark-700 dark:text-dark-200 hover:text-primary-500"
            }`}
          >
            Engagement Models
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === "services"
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md"
                : "text-dark-700 dark:text-dark-200 hover:text-primary-500"
            }`}
          >
            Services
          </button>
        </div>
      </div>

      {activeTab === "engagement" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {models.map((model, index) => (
            <div key={index} className="card-hover glass rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl flex-shrink-0">{model.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark-900 dark:text-white mb-1">{model.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{model.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {model.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "services" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-hover glass rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{service.icon}</span>
              <h3 className="font-display text-base font-bold text-dark-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EngagementModels;
