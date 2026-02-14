import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin className="size-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dimitris-chios",
      external: true,
    },
    {
      id: 2,
      icon: <FaGithub className="size-5" />,
      label: "GitHub",
      href: "https://github.com/ChiosDim",
      external: true,
    },
    {
      id: 3,
      icon: <HiOutlineMail className="size-5" />,
      label: "Email",
      href: "mailto:chiosdimit@gmail.com?subject=Portfolio%20Inquiry",
      external: false,
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill className="size-5" />,
      label: "Resume",
      href: "/CV_Dimitrios_Chios.pdf",
      download: "CV_Dimitrios_Chios.pdf",
      external: false,
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Connect with me
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors group"
                  download={link.download}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Copyright & Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Dimitrios Chios
              </h3>
              <p className="text-gray-400 max-w-md">
                Software & Web Developer specializing in building efficient,
                scalable solutions with modern technologies. Passionate about
                clean architecture and continuous learning.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Dimitrios Chios. All rights
                  reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
