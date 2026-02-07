import { easeInOut, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// Create explicit motion components so ESLint sees them as used
const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionLi = motion.li;

const AboutSection = () => {
  const strengths = [
    "Strong problem-solving skills and attention to detail",
    "Collaborative team player with good communication skills",
    "Passionate about learning new technologies and best practices",
    "Frontend-focused, but comfortable with full-stack development",
    "User-focused when designing application architecture",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </MotionH2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <p className="text-lg">
              I am a{" "}
              <span className="relative inline-block">
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  whileInView={{ backgroundPosition: "100% 50%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: easeInOut,
                  }}
                  className="font-bold bg-linear-to-r from-blue-600 via-purple-500 to-pink-700 bg-size-[200%_auto] bg-clip-text text-transparent"
                >
                  Full Stack Software Developer
                </motion.span>
              </span>{" "}
              with a strong focus on{" "}
              {/* Animated Gradient: frontend development */}
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                whileInView={{ backgroundPosition: "100% 50%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                  ease: easeInOut,
                }}
                className="font-bold bg-linear-to-r from-blue-600 via-purple-500 to-pink-700 bg-size-[200%_auto] bg-clip-text text-transparent"
              >
                frontend development
              </motion.span>
              . I love turning complex problems into efficient and maintainable
              solutions using modern technologies.
            </p>

            <p className="text-lg">
              I hold a{" "}
              {/* Animated Gradient: Bachelor's degree in Applied Informatics */}
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                whileInView={{ backgroundPosition: "100% 50%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.8,
                  ease: easeInOut
                }}
                className="font-bold bg-linear-to-r from-blue-600 via-purple-500 to-pink-700 bg-size-[200%_auto] bg-clip-text text-transparent"
              >
                Bachelor's degree in Applied Informatics
              </motion.span>{" "}
              from the {/* Animated Gradient: University of Macedonia */}
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                whileInView={{ backgroundPosition: "100% 50%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.1,
                  ease: easeInOut
                }}
                className="font-bold bg-linear-to-r from-blue-600 via-purple-500 to-pink-700 bg-size-[200%_auto] bg-clip-text text-transparent"
              >
                University of Macedonia
              </motion.span>{" "}
              and enjoy working on challenging projects that require creativity
              and logical thinking.
            </p>

            <p className="text-lg">
              I'm actively expanding my skill set into emerging fields, having
              been a finalist in the 'Project Future' program focused on
              Generative AI technologies.
            </p>

            <div className="p-6 bg-linear-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm">
              <p className="italic text-gray-800 dark:text-gray-200">
                "My goal is to write code that is not just functional, but also
                clean, scalable, and a joy for other developers to work with."
              </p>
            </div>
          </MotionDiv>

          {/* Right Column */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">My Strengths</h3>

              <ul className="space-y-4">
                {strengths.map((item, index) => (
                  <MotionLi
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                    <span>{item}</span>
                  </MotionLi>
                ))}
              </ul>

              <div className="mt-10 p-5 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Currently Learning</h4>
                    <p className="text-md">
                      Diving deeper into TypeScript for robust full-stack
                      development and exploring advanced React patterns to write
                      more scalable frontend architectures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
