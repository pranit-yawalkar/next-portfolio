"use client";
import React, { useState } from "react";

const Expertise = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Digital Products",
      icon: "🖥️",
      color: "from-sky-500 to-blue-600",
      heading: "Digital Product Engineering",
      description: "I design and build end-to-end digital products — from concept through deployment — with a focus on scalability, performance, and long-term maintainability.",
      points: ["SaaS platform development", "Progressive Web Apps", "Mobile-first responsive design", "API-first architecture", "Cloud-native deployment"]
    },
    {
      label: "Healthcare",
      icon: "🏥",
      color: "from-emerald-500 to-teal-600",
      heading: "Healthcare Technology",
      description: "Deep experience building HIPAA-aware platforms that handle sensitive patient data, clinical workflows, and operational management for healthcare organizations.",
      points: ["EHR/EMR integrations", "Telehealth platforms", "Patient management systems", "Healthcare CRM", "Appointment & scheduling systems"]
    },
    {
      label: "Finance",
      icon: "💰",
      color: "from-amber-500 to-orange-600",
      heading: "Financial Services Software",
      description: "Delivering secure, compliant, and high-performance software for financial institutions — from portfolio management to automated reporting and investment analytics.",
      points: ["Portfolio management platforms", "Investment reporting dashboards", "Automated compliance workflows", "Risk analytics", "Secure document management"]
    },
    {
      label: "AI Solutions",
      icon: "🤖",
      color: "from-purple-500 to-violet-600",
      heading: "AI-Powered Solutions",
      description: "Integrating LLMs, document intelligence, and automation to reduce manual effort and add intelligent capabilities to existing business workflows.",
      points: ["Document intelligence & extraction", "LLM-powered workflows", "Chatbot integrations", "Automated reporting via AI", "Prompt engineering & RAG systems"]
    },
    {
      label: "Enterprise",
      icon: "🏢",
      color: "from-rose-500 to-pink-600",
      heading: "Enterprise Software",
      description: "Building and modernizing large-scale enterprise systems that require high availability, role-based access, audit trails, and deep integrations.",
      points: ["ERP systems", "Multi-tenant SaaS platforms", "Role-based access control", "System modernization", "Third-party integrations & APIs"]
    },
  ];

  return (
    <div id="expertise" className="max-w-[1200px] px-4 md:px-5 py-14 md:py-20 mx-auto scroll-mt-32">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
          Areas of Expertise
        </h2>
        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          Deep specialization across industries and technology domains
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-6 md:justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${tab.color} text-white shadow-md`
                : "glass text-dark-700 dark:text-dark-200 hover:text-primary-500"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="glass rounded-2xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{tabs[activeTab].icon}</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-dark-900 dark:text-white">
            {tabs[activeTab].heading}
          </h3>
        </div>
        <p className="text-dark-600 dark:text-dark-300 text-sm md:text-base leading-relaxed mb-6">
          {tabs[activeTab].description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {tabs[activeTab].points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/40 dark:bg-dark-800/40 rounded-lg px-3 py-2">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${tabs[activeTab].color} flex-shrink-0`}></span>
              <span className="text-dark-700 dark:text-dark-200 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
