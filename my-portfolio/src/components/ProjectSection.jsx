import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaStickyNote,
  FaBook,
  FaFilm,
  FaGamepad,
  FaDrum,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiEjs, SiUnrealengine, SiCplusplus } from "react-icons/si";

const MotionDiv = motion.div;

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description:
        "A fully functional online shopping interface built from scratch with modern web tech. Features include product displays, user interaction flows, and shopping cart logic — demonstrating practical e-commerce development skills.",
      tags: ["Full-Stack", "JavaScript", "React", "HTML/CSS", "UI/UX"],
      icons: [
        <FaShoppingCart key="cart" />,
        <FaJs key="js" />,
        <FaHtml5 key="html" />,
      ],
      github: "https://github.com/ChiosDim/e-commerce",
      liveDemo: "#",
      color: "from-blue-600 to-cyan-500",
      featured: true,
      category: "web",
      hasLiveDemo: true,
    },
    {
      id: 2,
      title: "Unreal Engine 5 Games",
      description:
        "Mini games developed in C++ as part of an immersive game development course. Showcases practical learning in real-time rendering, gameplay mechanics & engine workflows.",
      tags: [
        "C++",
        "Unreal Engine 5",
        "Game Development",
        "3D Rendering",
        "Blueprints",
      ],
      icons: [
        <SiUnrealengine key="ue5" />,
        <SiCplusplus key="cpp" />,
        <FaGamepad key="game" />,
      ],
      github: "https://github.com/ChiosDim/UE5_Games_UdemyCourse",
      liveDemo: null,
      courseLink: "https://www.udemy.com/course/unrealcourse/",
      color: "from-purple-600 to-pink-600",
      featured: false,
      category: "game-dev",
      hasLiveDemo: false,
    },
    {
      id: 3,
      title: "PostIt Notes App",
      description:
        "A JavaScript-powered notes app allowing creation and organization of sticky notes with intuitive UI and responsive interaction logic.",
      tags: ["JavaScript", "DOM Manipulation", "CRUD", "Frontend", "UI/UX"],
      icons: [
        <FaStickyNote key="note" />,
        <FaJs key="js" />,
        <FaCss3Alt key="css" />,
      ],
      github: "https://github.com/ChiosDim/PostIt",
      liveDemo: "#",
      color: "from-amber-500 to-orange-500",
      featured: false,
      category: "web",
      hasLiveDemo: true,
    },
    {
      id: 4,
      title: "Movie-Time",
      description:
        "A cinema-focused web experience built with EJS templates and JavaScript, emphasizing dynamic content rendering and template-based development.",
      tags: [
        "EJS",
        "Template Engine",
        "JavaScript",
        "Dynamic Content",
        "Web App",
      ],
      icons: [
        <FaFilm key="film" />,
        <SiEjs key="ejs" />,
        <FaNodeJs key="node" />,
      ],
      github: "https://github.com/ChiosDim/Movie-Time",
      liveDemo: "#",
      color: "from-red-500 to-pink-500",
      featured: false,
      category: "web",
      hasLiveDemo: true,
    },
    {
      id: 5,
      title: "Booklist App",
      description:
        "An interactive web app for managing a list of books — focused on JavaScript logic, DOM updates, and simple UI interactions. Perfect for showcasing foundational web dev skills.",
      tags: ["JavaScript", "DOM", "CRUD", "Frontend", "Learning Project"],
      icons: [<FaBook key="book" />, <FaJs key="js" />, <FaHtml5 key="html" />],
      github: "https://github.com/ChiosDim/Booklist-app",
      liveDemo: "#",
      color: "from-green-500 to-emerald-500",
      featured: false,
      category: "web",
      hasLiveDemo: true,
    },
    {
      id: 6,
      title: "Simon Game",
      description:
        "Classic memory game recreated in the browser. Focuses on game logic and UI interactivity using vanilla JavaScript and CSS animations.",
      tags: [
        "Game Development",
        "JavaScript",
        "CSS Animations",
        "Logic",
        "Interactive",
      ],
      icons: [
        <FaGamepad key="game" />,
        <FaJs key="js" />,
        <FaCss3Alt key="css" />,
      ],
      github: "https://github.com/ChiosDim/Simon-Game",
      liveDemo: "#",
      color: "from-purple-500 to-violet-500",
      featured: false,
      category: "interactive",
      hasLiveDemo: true,
    },
    {
      id: 7,
      title: "Drum Kit Game",
      description:
        "A sound-interactive web app built with JavaScript, turning key presses and clicks into real drum sounds — excellent example of DOM event handling and multimedia integration.",
      tags: ["JavaScript", "Audio API", "DOM Events", "Interactive", "Game"],
      icons: [<FaDrum key="drum" />, <FaJs key="js" />, <FaHtml5 key="html" />],
      github: "https://github.com/ChiosDim/Drum-kit-game",
      liveDemo: "#",
      color: "from-yellow-500 to-orange-500",
      featured: false,
      category: "interactive",
      hasLiveDemo: true,
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
      className="py-20 px-6 md:px-12 lg:px-24 bg-transparent backdrop-blur-sm overflow-x-hidden"
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
            Project Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A curated selection of my work demonstrating progression from
            foundational web development to game development and interactive
            applications.
          </p>

          {/* Project Type Filters - FIXED CONTAINER */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full font-medium flex items-center gap-2 whitespace-nowrap">
              <FaShoppingCart className="h-4 w-4" /> Web Applications
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full font-medium flex items-center gap-2 whitespace-nowrap">
              <FaGamepad className="h-4 w-4" /> Games & Interactive
            </span>
            <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded-full font-medium flex items-center gap-2 whitespace-nowrap">
              <SiUnrealengine className="h-4 w-4" /> Game Development
            </span>
          </div>
        </MotionDiv>

        {/* Featured Project (E-Commerce) */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-linear-to-br from-blue-600 to-cyan-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Project Badge */}
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <FaShoppingCart className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      Featured Project
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      Full-Stack Web App
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      E-Commerce
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                    E-Commerce Web Application
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                    A fully functional online shopping interface built from
                    scratch with modern web tech. Features include product
                    displays, user interaction flows, and shopping cart logic —
                    demonstrating practical e-commerce development skills.
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
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={projects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
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
              className="group relative"
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all flex flex-col relative">
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap max-w-[100px] truncate ${
                      project.category === "web"
                        ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                        : project.category === "game-dev"
                          ? "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300"
                          : "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                    }`}
                  >
                    {project.category === "web"
                      ? "Web App"
                      : project.category === "game-dev"
                        ? "Game Dev"
                        : "Interactive"}
                  </span>
                </div>

                {/* Project Header with Gradient */}
                <div className={`h-2 bg-linear-to-r ${project.color}`}></div>

                <div className="p-6 flex-1 flex flex-col">
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
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description - Fixed height container */}
                  <div className="mb-4 flex-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - ALWAYS at bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                      >
                        <FaGithub /> Code
                      </a>

                      {project.hasLiveDemo === false && project.courseLink ? (
                        <a
                          href={project.courseLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                        >
                          <FaExternalLinkAlt /> Course Details
                        </a>
                      ) : project.hasLiveDemo === true ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                        >
                          <FaExternalLinkAlt /> Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-600 font-medium cursor-not-allowed">
                          <FaExternalLinkAlt /> Demo
                        </span>
                      )}
                    </div>
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
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ChiosDim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <FaGithub className="h-6 w-6" />
            Explore My GitHub Portfolio
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ProjectsSection;
