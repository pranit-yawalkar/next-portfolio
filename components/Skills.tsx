"use client";
import React, { useState } from "react";

const SkillsAndCapabilities = () => {
  const [activeTab, setActiveTab] = useState<"capabilities" | "techstack">("capabilities");

  const capabilities = [
    { label: "Product Strategy", icon: "🎯" },
    { label: "Solution Architecture", icon: "🏗️" },
    { label: "Enterprise Software", icon: "🏢" },
    { label: "API Development", icon: "🔌" },
    { label: "Cloud Infrastructure", icon: "☁️" },
    { label: "AI Integration", icon: "🤖" },
    { label: "System Modernization", icon: "⚡" },
    { label: "Performance Optimization", icon: "📈" },
    { label: "Automation", icon: "⚙️" },
    { label: "Microservices", icon: "🔧" },
    { label: "Security", icon: "🔒" },
    { label: "Scalable Architecture", icon: "📐" },
  ];

  const techStack = [
    { category: "Frontend", color: "from-sky-500 to-blue-600", items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", color: "from-emerald-500 to-teal-600", items: ["Spring Boot", "Node.js", "Express"] },
    { category: "Cloud", color: "from-amber-500 to-orange-600", items: ["AWS", "Docker", "CI/CD"] },
    { category: "Database", color: "from-purple-500 to-violet-600", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"] },
    { category: "AI & Tools", color: "from-rose-500 to-pink-600", items: ["OpenAI APIs", "LangChain", "GitHub", "Jira", "Postman"] },
  ];

  return (
    <div id="capabilities" className="max-w-[1200px] px-4 md:px-5 py-16 md:py-20 mx-auto scroll-mt-32">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
          Skills & Capabilities
        </h2>
        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          End-to-end expertise from strategy to deployment
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <div className="glass rounded-xl p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("capabilities")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === "capabilities"
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md"
                : "text-dark-700 dark:text-dark-200 hover:text-primary-500"
            }`}
          >
            Core Capabilities
          </button>
          <button
            onClick={() => setActiveTab("techstack")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === "techstack"
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md"
                : "text-dark-700 dark:text-dark-200 hover:text-primary-500"
            }`}
          >
            Tech Stack
          </button>
        </div>
      </div>
      {activeTab === "capabilities" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {capabilities.map((cap, index) => (
            <div key={index} className="card-hover glass rounded-xl p-3 md:p-4">
              <div className="flex items-center gap-2">
                <span className="text-xl flex-shrink-0">{cap.icon}</span>
                <span className="font-medium text-dark-900 dark:text-white text-xs md:text-sm leading-tight">{cap.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "techstack" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((cat, index) => (
            <div key={index} className="card-hover glass rounded-2xl p-5">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${cat.color} text-white text-xs font-semibold mb-4`}>
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech, tIndex) => (
                  <span key={tIndex} className="px-3 py-1 bg-white/60 dark:bg-dark-800/60 text-dark-700 dark:text-dark-200 text-xs rounded-full border border-dark-100 dark:border-dark-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsAndCapabilities;
