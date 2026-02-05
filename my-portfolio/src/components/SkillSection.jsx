import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPhp,
  SiPrisma,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";

// Create explicit motion components so ESLint sees them as used
const MotionDiv = motion.div;

const SkillsSection = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-500 bg-yellow-500/10",
    },
    { name: "React", icon: <SiReact />, color: "text-cyan-500 bg-cyan-500/10" },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      color: "text-green-600 bg-green-600/10",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "text-gray-800 dark:text-gray-300 bg-gray-800/10",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "text-blue-600 bg-blue-600/10",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-700 bg-green-700/10",
    },
    { name: "Java", icon: <FaJava />, color: "text-red-600 bg-red-600/10" },
    {
      name: "HTML",
      icon: <SiHtml5 />,
      color: "text-orange-600 bg-orange-600/10",
    },
    { name: "CSS", icon: <SiCss3 />, color: "text-blue-500 bg-blue-500/10" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-teal-500 bg-teal-500/10",
    },
    { name: "PHP", icon: <SiPhp />, color: "text-purple-700 bg-purple-700/10" },
    {
      name: "Prisma",
      icon: <SiPrisma />,
      color: "text-white dark:text-blue-300 bg-blue-900/30",
    },
    { name: "Git", icon: <SiGit />, color: "text-orange-700 bg-orange-700/10" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-700 bg-blue-700/10" },
    {
      name: "Vite",
      icon: <TbBrandVite />,
      color: "text-purple-600 bg-purple-600/10",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all"
            >
              <div
                className={`h-12 w-12 rounded-xl ${skill.color} flex items-center justify-center p-2 mb-3`}
              >
                <div className="h-8 w-8">{skill.icon}</div>
              </div>
              <span className="text-sm font-medium text-center">
                {skill.name}
              </span>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Always learning new technologies and best practices
            </span>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default SkillsSection;
