import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // For the bullet point icons

const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionUl = motion.ul;
const MotionLi = motion.li;

const AboutSection = () => {
  // Animation variants for the list items (staggered children)
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Staggers the animation of each child item
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </MotionH2>

        {/* Two-Column Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Main Text */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Full Stack Developer
              </span>{" "}
              with a strong focus on backend development. I love turning complex
              problems into efficient and maintainable solutions using modern
              technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I hold a{" "}
              <span className="font-semibold">
                Bachelor's degree in Applied Informatics
              </span>{" "}
              from the University of Macedonia and enjoy working on challenging
              projects that require creativity and logical thinking.
            </p>
            {/* Note: We will add the skills grid in the Skills Section later */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border-l-4 border-blue-500">
              <p className="text-gray-800 dark:text-gray-200 italic">
                "My goal is to write code that is not just functional, but also
                clean, scalable, and a joy for other developers to work with."
              </p>
            </div>
          </MotionDiv>

          {/* Right Column: Skills/Points List */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                My Strengths & Approach
              </h3>

              {/* Animated List */}
              <MotionUl
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-5"
              >
                {[
                  "Strong problem-solving skills and attention to detail",
                  "Collaborative team player with good communication skills",
                  "Passionate about learning new technologies and best practices",
                  "Backend-focused, but comfortable with full-stack development",
                  "Committed to writing tested and documented code",
                  "User-focused when designing application architecture",
                ].map((item, index) => (
                  <MotionLi
                    key={index}
                    variants={listItemVariants}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </MotionLi>
                ))}
              </MotionUl>

              {/* Fun Fact Box */}
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 p-5 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl"
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">?</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Fun Fact
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      When I'm not coding, I'm probably hiking, reading tech
                      blogs, or experimenting with a new framework.
                    </p>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
