import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Subtle grid background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      {/* Content */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Simple Footer */}
      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800 mt-20">
        <p className="text-gray-600 dark:text-gray-400">
          Built with React, Tailwind CSS v4 & Framer Motion
        </p>
      </footer>
    </div>
  );
}

export default App;
