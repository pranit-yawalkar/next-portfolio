"use client";
import React, { useEffect, useState } from "react";
import profilePhoto from "/images/photo_square.jpg";
import { MdBrightness2 } from "react-icons/md";
import { BsBrightnessHighFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userTheme, setUserTheme] = useState("dark");
  const systmeTheme = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme") || "light";
      setUserTheme(theme);
      checkTheme(theme);
    }
    // eslint-disable-next-line
  }, []);

  const checkTheme = (theme: string) => {
    if (theme === "dark" || (!theme && systmeTheme)) {
      document.documentElement.classList.add("dark");
      setUserTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setUserTheme("light");
    }
  };

  const changeTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setUserTheme("light");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setUserTheme("dark");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-100 sticky top-0 bg-white z-50 dark:bg-darkGrey">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center w-full py-6 px-4 md:px-0">
        <div className="flex items-center justify-center w-12 h-12 text-white">
          <a href="#home" className="text-xl font-bold w-full">
            <Image
              className="w-full rounded-full border-[1px] border-primary text-center bg-primary"
              src="/images/photo_square.jpg"
              alt="profile"
              width={40}
              height={40}
            />
          </a>
        </div>
        <ul className="flex gap-10 items-center dark:text-white">
          <li className="hidden md:block text-lg hover:text-primary font-medium">
            <a href="#about">About Me</a>
          </li>
          <li className="hidden md:block text-lg hover:text-primary font-medium">
            <a href="#skills">Skills</a>
          </li>
          <li className="hidden md:block text-lg hover:text-primary font-medium">
            <a href="#projects">Projects</a>
          </li>
          <li className="hidden md:block text-lg hover:text-primary font-medium">
            <a href="#experience">Experience</a>
          </li>
          <li
            onClick={changeTheme}
            className="text-lg hover:text-primary font-medium cursor-pointer"
          >
            {userTheme === "dark" ? (
              <BsBrightnessHighFill />
            ) : (
              <MdBrightness2 />
            )}
          </li>
          <li className="mt-2">
            <button
              id="menu-btn"
              onClick={toggleMenu}
              className={`block ${
                showMenu ? "open" : ""
              } hamburger md:hidden focus:outline-none`}
            >
              <span className="hamburger-top dark:bg-white"></span>
              <span className="hamburger-middle dark:bg-white"></span>
              <span className="hamburger-bottom dark:bg-white"></span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute flex flex-col items-center self-end ${
            showMenu ? "translate-x-0 left-8" : "-translate-x-full left-0"
          } py-8 space-y-6 font-bold bg-white dark:bg-black dark:text-white sm:w-auto sm:self-center right-8 drop-shadow-md`}
        >
          <a onClick={toggleMenu} href="#about">
            About Me
          </a>
          <a onClick={toggleMenu} href="#skills">
            Skills
          </a>
          <a onClick={toggleMenu} href="#projects">
            Projects
          </a>
          <a onClick={toggleMenu} href="#experience">
            Experience
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
