import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Healthcare Startup Founder",
      role: "CEO, Digital Health Platform",
      content: "Pranit transformed our vision into a fully functional healthcare platform. His understanding of healthcare workflows and attention to data security made him an invaluable partner. The platform has significantly improved our operational efficiency.",
      outcome: "Reduced administrative time by 60%"
    },
    {
      name: "Enterprise Client",
      role: "CTO, Financial Services Company",
      content: "Exceptional technical expertise combined with business acumen. Pranit delivered a complex portfolio management system that exceeded our expectations. His ability to translate business requirements into scalable solutions is remarkable.",
      outcome: "Launched 3 months ahead of schedule"
    },
    {
      name: "Product Manager",
      role: "Product Lead, SaaS Company",
      content: "Working with Pranit was a game-changer for our product roadmap. He doesn't just write code—he thinks about the entire product experience. Our user engagement increased significantly after the improvements he implemented.",
      outcome: "User engagement increased by 45%"
    }
  ];

  return (
    <div id="testimonials" className="w-full py-14 md:py-20 scroll-mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-primary-500/5 to-accent-500/5"></div>
      <div className="max-w-[1200px] px-4 md:px-5 py-5 mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-3">
            What Clients Say
          </h2>
          <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hover glass rounded-2xl p-6">
              <div className="mb-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-dark-700 dark:text-dark-200 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div className="border-t border-dark-200 dark:border-dark-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-dark-900 dark:text-white text-sm">{testimonial.name}</p>
                    <p className="text-dark-600 dark:text-dark-300 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-3 px-3 py-1.5 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">📈 {testimonial.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
