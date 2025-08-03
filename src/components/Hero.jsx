import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const roles = [
  'AI Software Engineer 💡',
  'Data Engineer 🔧',
  'University of York Graduate 🧑‍🎓',
  'Vedic Tech Visionary 🔭',
  'Full-Stack Developer 🧠',
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 gap-10 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 id="hero-heading" className="text-5xl font-extrabold mb-4 leading-tight">
          Hey, I'm <span className="text-blue-600 dark:text-blue-400">Abhijeet</span>
        </h1>

        <h2 className="text-2xl text-zinc-600 dark:text-zinc-300 font-medium mb-6 h-12">
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 40,
            }}
          />
        </h2>

        <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-400 max-w-xl">
          MSc. in Computer Science from the University of York. Bridging ancient wisdom with modern tech. I build intelligent systems, automate data flows, and craft scalable AI experiences with impact.
        </p>

        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center md:justify-start mt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            🚀 View My Work
          </motion.a>

          <motion.a
            href="/Abhijeet_Resume.pdf"
            download
            title="Download Resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            📄 Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-8 py-3 font-bold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl animate-pulse hover:animate-none transition-transform duration-300 border border-white/20 hover:shadow-[0_0_20px_#a855f7,0_0_40px_#ec4899]"
          >
            💼 Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/3"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 mx-auto">
          <div className="absolute inset-0 bg-blue-300 dark:bg-blue-800 blur-3xl opacity-30 rounded-full"></div>
          <img
            src="/profile.jpg"
            alt="Profile photo of Abhijeet Kumar"
            loading="lazy"
            className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out z-10 relative"
          />
        </div>
      </motion.div>
    </section>
  );
}
