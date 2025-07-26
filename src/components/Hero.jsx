// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 gap-10 overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Hello, I'm <span className="text-blue-500">Abhijeet</span>
        </h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-6 h-10">
          <Typewriter
            options={{
              strings: [
                'AI Software Engineer',
                'Data Engineer',
                'Vedic Tech Visionary',
                'Full-Stack Developer',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center md:justify-start mt-4">
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>

          <a
            href="/Abhijeet_Resume.pdf"
            download
            className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

      </motion.div>

      {/* Right Photo */}
      <motion.div
        className="md:w-1/3"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/profile.jpg"
          alt="Abhijeet Kumar"
          className="rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </motion.div>
    </section>
  );
}
