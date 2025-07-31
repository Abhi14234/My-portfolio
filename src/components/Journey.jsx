import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2025",
    title: "🚀 Launched My AI Portfolio & Joined P&G Partner",
    description:
      "Created a full-stack AI portfolio using React, Tailwind, and Vite. Joined Kalawati Enterprises (P&G Partners) as a System Administrator (MIS), automating and optimizing enterprise data flows.",
  },
  {
    year: "2024",
    title: "🎓 MSc Advanced Computer Science – UK",
    description:
      "Graduated from University of York with distinction. Specialized in AI, Machine Learning, and High-Performance Computing. Built real-world ML solutions and research-grade projects.",
  },
  {
    year: "2023",
    title: "🌍 Built & Explored: York to the World",
    description:
      "Worked on cutting-edge AI projects, explored UK tech and academic culture. Built data engineering pipelines and AI-first systems, expanding both skills and horizons.",
  },
  {
    year: "2022",
    title: "🎓 Moved to the UK for Higher Studies",
    description:
      "Started my MSc journey at University of York. Chose Machine Learning & HPC as core modules. Collaborated with researchers, learned deeply about intelligent systems design.",
  },
  {
    year: "2021",
    title: "📊 Freelance Data & ML Work",
    description:
      "Worked independently with businesses and startups on automation, data pipelines, and prediction tools. Strengthened my portfolio before moving abroad.",
  },
  {
    year: "2020",
    title: "🔮 Began Vedic AI Exploration",
    description:
      "Started fusing ancient Indian knowledge systems with modern AI. This sparked the creation of DARPAN — a vision of spiritual–tech synergy and multiverse simulation.",
  },
  {
    year: "Before 2020",
    title: "🧠 Graduated with Bachelor of Engineering",
    description:
      "Mastered Python, C++, SQL, and system design through passion projects. Built automation scripts and backend tools. This was my foundation for everything that followed.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-16 bg-gray-50 dark:bg-zinc-900 relative overflow-hidden">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ✨ My Evolving Journey
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400 ml-4">

        {/* Optional Background Line Glow */}
        <div className="absolute left-[-2px] top-0 h-full w-px bg-gradient-to-b from-indigo-200 to-transparent dark:from-indigo-500 dark:to-transparent"></div>

        {timeline.map((item, index) => {
          const isCurrentYear = item.year === "2025";
          return (
            <motion.div
              key={index}
              className="mb-12 ml-6 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <span className="absolute left-[-0.8rem] top-2 z-10">
                <span
                  className={`absolute inline-flex h-4 w-4 rounded-full ${
                    isCurrentYear ? "bg-yellow-400 animate-ping" : "bg-indigo-600"
                  } drop-shadow-lg blur-[1px]`}
                />
                <span
                  className={`relative inline-flex rounded-full h-4 w-4 ${
                    isCurrentYear ? "bg-yellow-400" : "bg-indigo-600"
                  }`}
                />
              </span>

              {/* Timeline Card */}
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  <span className="inline-block w-20 font-bold text-indigo-600 dark:text-yellow-400">
                    {item.year}
                  </span>
                  — {item.title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
