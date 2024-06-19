import React, { ReactElement } from "react";
import { FiMonitor } from "react-icons/fi";
import { BiServer } from "react-icons/bi";
import { BsFillCloudCheckFill } from "react-icons/bs";

interface WhatIDoItem {
  icon: ReactElement;
  title: string;
  subtitle: string;
}

const WhatIDo = () => {
  const items: WhatIDoItem[] = [
    {
      icon: <FiMonitor size={100} />,
      title: "Frontend",
      subtitle:
        "I design and build beautiful, responsive, and user-friendly websites and web applications using modern frontend frameworks and libraries such as React and Angular",
    },
    {
      icon: <BiServer size={100} />,
      title: "Backend",
      subtitle:
        "I build and maintain robust and scalable backend APIs and microservices using popular programming languages such as Spring Boot and Node.js.",
    },
    {
      icon: <BsFillCloudCheckFill size={100} />,
      title: "Deployment",
      subtitle:
        "I am also proficient in modern deployment tools like Docker, Kubernetes and deploygng and managing the web applications in a variety of environments.",
    },
  ];

  return (
    <div
      id="about"
      className="bg-gray-200 dark:bg-[#232D3F] dark:text-white w-100 py-5 scroll-mt-32"
    >
      <div className="max-w-[1200px] px-5 py-5 mx-auto">
        <h2 className="font-bolsomiq text-5xl text-center font-semibold">
          What I do?
        </h2>
        <div className="flex gap-5 my-10 flex-col md:flex-row">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <div className="flex flex-col gap-3 items-center">
                {item.icon}
                <h3 className="font-bolsomiq text-2xl">{item.title}</h3>
                <p className="text-center text-lg font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
