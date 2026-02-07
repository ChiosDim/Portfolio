import { motion } from "framer-motion";

const MotionDiv = motion.div;

const SkillsSection = () => {
  // Organized skill groups - HORIZONTAL sections
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
          name: "Prisma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "VSCode",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </MotionDiv>

        {/* Skill Groups - 3 Horizontal Sections */}
        <div className="space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-8">
              {/* Group Title */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-800 dark:text-gray-200"
              >
                {group.title}
              </MotionDiv>

              {/* Skills Container - HORIZONTAL */}
              <div className="overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-6 min-w-min">
                  {group.skills.map((skill, skillIndex) => (
                    <MotionDiv
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -10 }}
                      className="group bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:border-[#9d92e3]/60 hover:shadow-3xl hover:shadow-blue-900/70 min-w-[140px] shrink-0"
                    >
                      {/* BIG Icon - Using CDN image */}
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Skill Name */}
                      <span className="text-gray-200 font-semibold text-center">
                        {skill.name}
                      </span>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Notice */}
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
