import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-primary dark:bg-[#232D3F] text-white w-100 pt-5 scroll-mt-32"
    >
      <div className="max-w-[1200px] px-5 py-5 mx-auto">
        <h2 className="font-bolsomiq text-5xl text-center font-semibold">
          Contact Me
        </h2>
        <div className="flex flex-col gap-5 items-center my-14">
          <p className="text-center">
            Do you like what I do? Do you want to collaborate with me. Feel free
            to reach me on:
          </p>
          <div className="flex gap-10 text-3xl">
            <a href="mailto:pranityawalkar@gmail.com" target="_blank">
              <FaEnvelope className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranit-yawalkar-839212164/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a href="https://twitter.com/YawalkarPranit" target="_blank">
              <RiTwitterXFill className="cursor-pointer" />
            </a>
            <a href="https://github.com/pranit-yawalkar" target="_blank">
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t-[1px] border-t-gray-400 py-8">
        <footer>
          This website is designed and developed by Pranit Yawalkar with
          NextJS.
        </footer>
      </div>
    </div>
  );
};

export default Contact;
