import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-14 md:py-20 scroll-mt-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-primary-500/10"></div>
      <div className="max-w-[1200px] px-4 md:px-5 py-5 mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-3xl md:text-6xl font-bold text-dark-900 dark:text-white mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Ready to transform your ideas into scalable digital products? Let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass rounded-2xl p-8 text-center">
            <a
              href="mailto:pranityawalkar@gmail.com"
              className="inline-block group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <p className="mt-4 text-dark-600 dark:text-dark-300 text-sm">
              Or reach out directly at{" "}
              <a href="mailto:pranityawalkar@gmail.com" className="text-primary-600 dark:text-primary-400 font-medium">pranityawalkar@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <a href="tel:+919999999999" className="card-hover glass rounded-2xl p-6 flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <FaPhone className="text-3xl text-primary-500" />
                </div>
              </div>
              <span className="font-medium text-dark-900 dark:text-white text-sm">Phone</span>
            </a>
            <a href="mailto:pranityawalkar@gmail.com" target="_blank" className="card-hover glass rounded-2xl p-6 flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <FaEnvelope className="text-3xl text-primary-500" />
                </div>
              </div>
              <span className="font-medium text-dark-900 dark:text-white text-sm">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/pranit-yawalkar-839212164/" target="_blank" className="card-hover glass rounded-2xl p-6 flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <FaLinkedin className="text-3xl text-primary-500" />
                </div>
              </div>
              <span className="font-medium text-dark-900 dark:text-white text-sm">LinkedIn</span>
            </a>
            <a href="https://twitter.com/YawalkarPranit" target="_blank" className="card-hover glass rounded-2xl p-6 flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <RiTwitterXFill className="text-3xl text-primary-500" />
                </div>
              </div>
              <span className="font-medium text-dark-900 dark:text-white text-sm">Twitter</span>
            </a>
            <a href="https://github.com/pranit-yawalkar" target="_blank" className="card-hover glass rounded-2xl p-6 flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <FaGithub className="text-3xl text-primary-500" />
                </div>
              </div>
              <span className="font-medium text-dark-900 dark:text-white text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-dark-200 dark:border-dark-700">
        <footer className="text-center">
          <p className="text-dark-600 dark:text-dark-400 text-sm">
            Technology Consultant & Product Engineering Partner
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
