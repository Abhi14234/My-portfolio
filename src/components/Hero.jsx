// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 gap-10 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Hey, I'm <span className="text-blue-600 dark:text-blue-400">Abhijeet</span>
        </h1>
        <div className="text-2xl text-zinc-600 dark:text-zinc-300 font-medium mb-6 h-12">
          <Typewriter
            options={{
              strings: [
                'AI Software Engineer 💡',
                'Data Engineer 🔧',
                'Vedic Tech Visionary 🔭',
                'Full-Stack Developer 🧠',
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 40,
            }}
          />
        </div>
        <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-400 max-w-xl">
          Bridging ancient wisdom with modern tech. I build intelligent systems, automate data flows, and craft scalable AI experiences with impact.
        </p>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center md:justify-start mt-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
          >
            🚀 View My Work
          </a>

          <a
            href="/Abhijeet_Resume.pdf"
            download
            className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition transform hover:scale-105 duration-300"
          >
            📄 Download Resume
          </a>
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
            alt="Abhijeet Kumar"
            className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out z-10 relative"
          />
        </div>
      </motion.div>
    </section>
  );
}
