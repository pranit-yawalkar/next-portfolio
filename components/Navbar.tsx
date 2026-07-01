"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdBrightness2 } from "react-icons/md";
import { BsBrightnessHighFill } from "react-icons/bs";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Why Me" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#engagement-models", label: "Engagement" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userTheme, setUserTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme") || "light";
      setUserTheme(theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = showMenu ? "hidden" : "";
    }
    return () => { if (typeof document !== "undefined") document.body.style.overflow = ""; };
  }, [showMenu]);

  const changeTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setUserTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setUserTheme("dark");
    }
  };

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"}`}>
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center w-full py-3 px-4 md:px-6">
          <a href="#home" className="relative group flex items-center gap-3" onClick={closeMenu}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <Image
              className="relative rounded-full border-2 border-primary-500 object-cover"
              src="/images/new_photo.jpeg"
              alt="Pranit Yawalkar"
              width={40}
              height={40}
            />
            <span className="hidden sm:block font-display font-bold text-dark-900 dark:text-white text-sm">Pranit Yawalkar</span>
          </a>

          <div className="flex items-center gap-3">
            <ul className="hidden md:flex gap-6 items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-dark-700 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={changeTheme}
              className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {userTheme === "dark" ? (
                <BsBrightnessHighFill className="text-accent-400 text-lg" />
              ) : (
                <MdBrightness2 className="text-primary-600 text-lg" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-all duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={showMenu}
            >
              <span className={`block w-5 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 ${showMenu ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 ${showMenu ? "opacity-0 scale-x-0" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 ${showMenu ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay menu */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${showMenu ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu}></div>
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-dark-900 shadow-2xl flex flex-col transition-transform duration-500 ease-out ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-dark-100 dark:border-dark-800">
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full border-2 border-primary-500 object-cover"
                src="/images/new_photo.jpeg"
                alt="Pranit Yawalkar"
                width={36}
                height={36}
              />
              <span className="font-display font-bold text-dark-900 dark:text-white text-sm">Pranit Yawalkar</span>
            </div>
            <button onClick={closeMenu} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-all duration-200" aria-label="Close menu">
              <span className="text-dark-600 dark:text-dark-300 text-xl leading-none">×</span>
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-dark-800 dark:text-dark-100 font-medium hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              >
                <span className="w-6 h-6 rounded-md bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-xs font-bold text-primary-600 dark:text-primary-400">
                  {i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-dark-100 dark:border-dark-800">
            <a href="#contact" onClick={closeMenu} className="block w-full py-3 text-center bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
              Start a Project →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
