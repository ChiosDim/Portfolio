import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Create explicit motion components so ESLint sees them as used
const MotionH2 = motion.h2;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 
     bg-gradient-to-br from-gray-50 to-gray-100 text-white"
    >
      {/* Container for text & code block side-by-side on large screens */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-12
      max-w-7xl mx-auto w-full"
      >
        {/*Left Column: Text & Buttons */}
        <div className="flex-1 text-center lg:text-left">
          {/* Animated Greeting*/}
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="ext-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
          >
            Hi, I'm
          </MotionH2>

          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Dimitris
          </MotionH1>

          {/* Title & Description */}
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
          >
            <span className="font-bold">Software & Web Developer</span>
          </MotionP>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mb-10"
          >
            I enjoy learning new technologies and building efficient, scalable
            solutions with clean and thoughtful architecture.
            <br />
            <br />
            Thanks for visiting my portfolio — feel free to explore my work and
            reach out.
          </MotionP>

          {/* Call-to-Action Buttons */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact" // This will jump to the contact section later
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 text-gray-800 dark:text-gray-300 font-medium rounded-lg transition duration-300"
            >
              Contact Me
            </a>
          </MotionDiv>
        </div>

        {/* Right Column: Styled Code Block */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 max-w-lg w-full"
        >
          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden">
            {/* Code block header */}
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">developer.js</div>
            </div>

            {/* The actual code */}
            <pre className="text-sm md:text-base overflow-x-auto text-gray-300 font-mono">
              {`const developer =
                 { name: "Dimitris", role: "Software & Web Developer",
                  stack: ["React", "Node.js", "Express"],
                  tools: ["Git", "POSTMAN", "VSCode"], 
                  mindset: "Always learning ❤️",
                  goals: "Build scalable solutions",
                  location: "Thessaloniki, Greece" };`}
            </pre>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
