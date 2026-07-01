"use client";
import React from "react";

interface ProjectItem {
  title: string;
  description: string;
  businessOutcome: string;
  capabilities: string[];
  url?: string;
}

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      title: "Enterprise Healthcare ERP",
      description: "A centralized platform for managing healthcare operations, user workflows, reporting, scheduling, and administrative processes.",
      businessOutcome: "Unified fragmented business operations into a centralized platform with role-based workflows, reporting, and operational visibility.",
      capabilities: ["Patient Management", "Role-based Dashboards", "Analytics", "Appointment Scheduling", "Workflow Automation", "Admin Portal", "Cloud Deployment"]
    },
    {
      title: "Healthcare CRM",
      description: "Designed for healthcare organizations to streamline lead management, patient engagement, campaign tracking, and operational visibility.",
      businessOutcome: "Reduced manual administrative effort by digitizing customer and patient workflows.",
      capabilities: ["Lead Management", "Patient Engagement", "Campaign Tracking", "Reporting Dashboard", "Role Management"]
    },
    {
      title: "AI-Powered Document Intelligence",
      description: "A financial services platform that automates contract analysis, document processing, and investment reporting using AI.",
      businessOutcome: "Reduced document processing time by automating contract analysis and report generation workflows.",
      capabilities: ["Contract Analysis", "AI Document Processing", "Investment Dashboard", "Audit Logs", "Role Based Access"]
    },
    {
      title: "Online Consultation Platform",
      description: "Telehealth platform enabling video consultations, appointment management, and doctor-patient communication.",
      businessOutcome: "Enabled seamless remote healthcare delivery with scheduling, video consultation, and secure patient data.",
      capabilities: ["Video Consultation", "Appointment Management", "Doctor Dashboards", "Secure Messaging", "Mobile App"]
    },
    {
      title: "SaaS Admin Dashboard",
      description: "A multi-tenant admin platform with advanced role management, analytics, and workflow automation.",
      businessOutcome: "Streamlined operations across multiple business units with real-time visibility and automation.",
      capabilities: ["Multi-Tenant", "Role Management", "Analytics", "Workflow Automation", "API Integrations"]
    }
  ];

  const openProject = (url?: string) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div id="projects" className="max-w-[1200px] px-4 md:px-5 py-14 md:py-20 mx-auto scroll-mt-32">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          Real solutions delivering measurable business outcomes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {projects.map((project: ProjectItem, index: number) => (
          <div key={index} className="card-hover glass rounded-2xl p-6 group">
            <div className="mb-4">
              <h3 className="font-display text-xl font-bold text-dark-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-4">{project.description}</p>
            </div>
            <div className="mb-4 p-3 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg">
              <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-1">BUSINESS OUTCOME</p>
              <p className="text-sm text-dark-700 dark:text-dark-200 italic">&ldquo;{project.businessOutcome}&rdquo;</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.capabilities.map((cap, cIndex) => (
                <span key={cIndex} className="px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs rounded-full">{cap}</span>
              ))}
            </div>
            {project.url && (
              <button onClick={() => openProject(project.url)} className="mt-4 text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline">
                View Project →
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
