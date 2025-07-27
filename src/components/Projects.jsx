// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Route Assignment Tool',
    description: 'Optimized delivery route planner using BallTree and clustering.',
    link: 'https://github.com/Abhi14234/RouteAssignmentTool',
    tags: ['Python', 'Clustering', 'Logistics'],
  },
  {
    title: 'Portfolio Site',
    description: 'Portfolio site using Vite, React, and Tailwind CSS.',
    link: 'https://github.com/Abhi14234/My-portfolio',
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'Snake Game AI',
    description: 'AI that learns to play Snake using Neural Networks and Genetic Algorithms.',
    link: 'https://github.com/Abhi14234/snake-ai-neuroevolution',  // Replace with your actual GitHub link
    tags: ['Python', 'Neuroevolution', 'Genetic Algorithm', 'AI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">🚀 Projects</h3>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">{proj.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{proj.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {proj.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
