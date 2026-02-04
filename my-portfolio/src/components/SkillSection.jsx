import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb ,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPhp,
  SiPrisma,
  SiGit,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { FaJava } from 'react-icons/fa';
import { TbBrandVite }  from "react-icons/tb";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const SkillsSection = () => {
  // Define your skills with names and corresponding icons
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-full h-full" />,
      color: "text-yellow-500",
    },
    {
      name: "React",
      icon: <SiReact className="w-full h-full" />,
      color: "text-cyan-500",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-full h-full" />,
      color: "text-green-600",
    },
    {
      name: "Express",
      icon: <SiExpress className="w-full h-full" />,
      color: "text-gray-800 dark:text-gray-300",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-full h-full" />,
      color: "text-blue-600",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-full h-full" />,
      color: "text-green-700",
    },
    {
      name: "Java",
      icon: <FaJava className="w-full h-full" />,
      color: "text-red-600",
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="w-full h-full" />,
      color: "text-orange-600",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="w-full h-full" />,
      color: "text-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-full h-full" />,
      color: "text-teal-500",
    },
    {
      name: "PHP",
      icon: <SiPhp className="w-full h-full" />,
      color: "text-purple-700",
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="w-full h-full" />,
      color: "text-white bg-blue-900 rounded p-1",
    },
    {
      name: "Git",
      icon: <SiGit className="w-full h-full" />,
      color: "text-orange-700",
    },
    {
      name: "Postman",
      icon: <SiPostman className="w-full h-full" />,
      color: "text-orange-600",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-full h-full" />,
      color: "text-blue-700",
    },
    {
      name: "Vite",
      icon: <TbBrandVite className="w-full h-full" />,
      color: "text-purple-600",
    },
  ];

  // Animation settings for the container and each skill card
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Very slight stagger for a wave effect
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    hover: {
      scale: 1.1,
      y: -8,
      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.25)",
      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools, languages, and frameworks I use to bring ideas to life.
            I'm always expanding this list.
          </p>
        </MotionDiv>

        {/* Skills Grid */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 cursor-default relative group"
            >
              {/* Skill Icon */}
              <div
                className={`h-14 w-14 mb-4 ${skill.color} flex items-center justify-center`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-center text-sm md:text-base">
                {skill.name}
              </h3>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </MotionDiv>

        {/* Legend/Note at the bottom */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-200 dark:border-gray-700">
            <div className="mr-4 h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <span className="font-semibold">Currently exploring:</span>{" "}
              Advanced React patterns, Web3 fundamentals, and System Design.
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default SkillsSection;
