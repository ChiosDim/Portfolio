import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Create explicit motion components so ESLint sees them as used
const MotionDiv = motion.div;
const MotionA = motion.a;

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
              Hi, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Dimitris!
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
              Software & Web Developer
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I enjoy learning new technologies and building efficient, scalable
              solutions with clean and thoughtful architecture.
              <br />
              <br />
              Thanks for visiting my portfolio — feel free to explore my work
              and reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <MotionA
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </MotionA>

              <MotionA
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 font-semibold rounded-xl transition-all"
              >
                Contact Me
              </MotionA>
            </div>
          </MotionDiv>
        </div>

        {/* Right: Code Block */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 w-full max-w-lg"
        >
          <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl overflow-hidden">
            {/* Window buttons */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-400">developer.js</span>
            </div>

            {/* Code */}
            <pre className="text-gray-300 font-mono text-sm md:text-base overflow-x-auto">
              {`const developer = {
  name: "Dimitris",
  role: "Aspiring Software Developer",
  stack: ["React", "Node.js", "Express"],
  tools: ["Git", "VSCode"],
  mindset: "Always learning ❤️",
  goals: "Build scalable solutions",
  location: "Greece"
};`}
            </pre>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
