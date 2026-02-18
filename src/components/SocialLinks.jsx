import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/dimitris-chios",
      style: "rounded-tr-md",
      title: "Connect on LinkedIn",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/ChiosDim",
      title: "Check out my GitHub",
    },
    {
      id: 3,
      child: (
        <>
          Email
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:chiosdimit@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Dimitris,",
      title: "Send me an email",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/CV_Dimitrios_Chios.pdf",
      style: "rounded-br-md",
      download: "CV_Dimitrios_Chios.pdf",
      title: "Download my Resume",
      external: false,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-30">
      <ul>
        {links.map(({ id, child, href, style, download, title }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-44 h-14 px-4 my-2 -ml-28 hover:-ml-2 rounded-md transition-all duration-300 hover:shadow-lg
              ${style || ""}
              bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-gray-200 hover:text-blue-400 hover:bg-gray-900 hover:border-blue-500`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target={download ? undefined : "_blank"}
              rel={download ? undefined : "noreferrer"}
              title={title}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
