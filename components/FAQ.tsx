"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What types of projects do you take on?", answer: "I work on end-to-end product development, system modernization, AI integration, and ongoing technical partnerships. Typical engagements include SaaS platforms, healthcare software, ERP systems, and data-driven web applications." },
    { question: "How long does a typical project take?", answer: "An MVP typically takes 6–10 weeks. Full product builds range from 3–6 months depending on complexity. I always start with a scoping session to give you an accurate estimate." },
    { question: "Do you work with early-stage startups?", answer: "Yes. I have experience working with founders from idea to launch, including helping define technical architecture, build MVPs, and prepare for investor demos." },
    { question: "What is your tech stack?", answer: "My primary stack includes React, Next.js, Angular, Node.js, Spring Boot, TypeScript, and AWS. I adapt based on your existing systems and requirements." },
    { question: "Can you work with our existing team?", answer: "Absolutely. I integrate well with existing engineering teams, contributing as a lead developer, technical architect, or fractional CTO depending on what the team needs." },
    { question: "How do you handle ongoing support after launch?", answer: "I offer retainer-based ongoing support for bug fixes, feature additions, performance optimization, and infrastructure management after launch." },
  ];

  return (
    <div id="faq" className="max-w-[1200px] px-4 md:px-5 py-14 md:py-20 mx-auto scroll-mt-32">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
          Common questions about working together
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="card-hover glass rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center"
            >
              <span className="font-display text-sm md:text-lg font-semibold text-dark-900 dark:text-white text-left">
                {faq.question}
              </span>
              <span className="text-2xl text-primary-500 transition-transform duration-300 flex-shrink-0 ml-2">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
