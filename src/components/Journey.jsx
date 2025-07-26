import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2025",
    title: "🚀 Launched My Personal AI Universe",
    description:
      "Built and deployed a full-stack portfolio using React, Tailwind, and Vite. Integrated resume download, live demos, and AI showcases. This marks the beginning of my bold career leap — fully aligned with my Rahu Antardasha for online growth and breakthroughs.",
  },
  {
    year: "2024",
    title: "🎤 Started job as System admin",
    description:
      "Joined P&G Partners",
  },
  {
    year: "2023",
    title: "🧠 Engineering Smart Systems at Scale",
    description:
      "Built Projects and explored foreign lands"
  },
  {
    year: "2022",
    title: "🎓 MSc in Advanced Computer Science (UK)",
    description:
      "Started My MSc at University of York with specialization in Machine Learning, AI, and High-Performance Computing. Built research-grade ML models and worked on academic–industry aligned projects.",
  },
  {
    year: "2020–21",
    title: "🔮 Began My Vedic AI Exploration",
    description:
      "Started fusing ancient Vedic systems with modern AI. This research-driven curiosity evolved into building intelligent tools aligned with deeper patterns — seeding the idea of cosmic intelligence engineering.",
  },
  {
    year: "Before 2020",
    title: "👨‍💻 Learning, Building, Evolving",
    description:
      "Self-taught in Python, C++, and system design. Built early automation tools. My lifelong curiosity for human and artificial intelligence has been the foundation of everything I build.",
  },
];

export default function Journey() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        📜 My Journey
      </h2>
      <div className="relative border-l-4 border-indigo-600 ml-4">
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
              <div
                className={`absolute w-4 h-4 rounded-full -left-2 top-2 ${
                  isCurrentYear
                    ? "bg-yellow-400 animate-ping shadow-yellow-400 shadow-md"
                    : "bg-indigo-600"
                }`}
              ></div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.year} — {item.title}
              </h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
