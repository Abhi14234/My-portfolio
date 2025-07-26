// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-zinc-300 dark:border-zinc-700"
        >
          <img
            src="profile.jpg" // Replace with your own image or avatar
            alt="Abhijeet Kumar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-4xl font-extrabold mb-4 text-zinc-900 dark:text-white">
            Hey, I'm Abhijeet 👋
          </h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl">
            A passionate <strong>AI Engineer & Data Wizard</strong> from India 🌏,
            blending code with creativity to build next-gen tools that don’t just run — they think.
            <br /><br />
            With an <em>MSc in Advanced Computer Science</em> and a love for intelligent automation,
            I architect systems that are fast, scalable, and smart — powering real-world impact.
            <br /><br />
            Currently building AI that understands, predicts, and evolves 🚀.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
