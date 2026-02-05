import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaEthereum,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiStripe,
  SiNextdotjs,
  SiPrisma,
  SiMysql,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

// Create explicit motion components so ESLint sees them as used
const MotionDiv = motion.div;

const ProjectsSection = () => {
  // Project data - easy to update
  const projects = [
    {
      id: 1,
      title: "Smart Inventory Management",
      description:
        "A Full-Stack Inventory Management System with Clerk authentication and Shadcn UI components.",
      tags: ["React", "Tailwind", "Vite", "Clerk", "Shadcn UI", "Prisma"],
      icons: [
        <FaReact key="react" />,
        <SiTailwindcss key="tailwind" />,
        <TbBrandVite key="vite" />,
        <SiPrisma key="prisma" />,
      ],
      github: "#",
      liveDemo: "#",
      color: "from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      id: 2,
      title: "Brieffy",
      description:
        "Web tool that summarizes articles and webpages from URLs using React, Redux, and Tailwind CSS.",
      tags: ["React", "Vite", "Redux", "Tailwind"],
      icons: [
        <FaReact key="react" />,
        <SiVite key="vite" />,
        <SiRedux key="redux" />,
        <SiTailwindcss key="tailwind" />,
      ],
      github: "#",
      liveDemo: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "DocWebox",
      description:
        "Search doctors based on location and profession, with appointment booking functionality.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      icons: [<FaPhp key="php" />],
      github: "#",
      liveDemo: "#",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with React frontend, Node.js/Express backend, MongoDB database, and Clerk authentication. Stripe integration coming soon.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Stripe"],
      icons: [
        <FaReact key="react" />,
        <FaNodeJs key="node" />,
        <SiMongodb key="mongo" />,
      ],
      github: "#",
      liveDemo: "#",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Lottery Dapp",
      description:
        "Web3 Lottery App on the Sepolia network. Users participate in a lottery using Metamask.",
      tags: ["Web3", "Ethereum", "Solidity", "React"],
      icons: [<FaEthereum key="eth" />],
      github: "#",
      liveDemo: "#",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Issue Tracker",
      description:
        "Next.js app for tracking issues, with Prisma/MySQL backend, status tracking, and CRUD functionality.",
      tags: ["Next.js", "Prisma", "MySQL", "React"],
      icons: [
        <SiNextdotjs key="next" />,
        <SiPrisma key="prisma" />,
        <SiMysql key="mysql" />,
      ],
      github: "#",
      liveDemo: "#",
      color: "from-gray-700 to-gray-900",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent works showcasing my skills in full-stack
            development, modern frameworks, and problem-solving.
          </p>
        </MotionDiv>

        {/* Featured Project (First one) */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div
            className={`bg-linear-to-br ${projects[0].color} rounded-3xl p-1 shadow-2xl`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Project Badge */}
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <FaReact className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      Featured Project
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      Full Stack
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4">
                    {projects[0].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                    {projects[0].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {projects[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={projects[0].github}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors"
                    >
                      <FaGithub /> View Code
                    </a>
                    <a
                      href={projects[0].liveDemo}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 font-semibold rounded-xl transition-all"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* All Projects Grid */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(1).map((project) => (
            <MotionDiv
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all">
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-linear-to-r ${project.color}`}></div>

                <div className="p-6">
                  {/* Project Icons */}
                  <div className="flex items-center gap-3 mb-4">
                    {project.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.liveDemo}
                      className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* View More Button */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <FaGithub className="h-6 w-6" />
            View All Projects on GitHub
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ProjectsSection;
