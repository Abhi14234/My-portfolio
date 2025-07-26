import React from 'react';

const projects = [
  {
    title: 'Route Assignment Tool',
    description: 'Optimized delivery route planner using BallTree and clustering.',
    link: 'https://github.com/Abhi14234/RouteAssignmentTool',
  },
  {
    title: 'Portfolio Site',
    description: 'Portfolio Site using vite + React + Tailwind',
    link: 'https://github.com/Abhi14234/My-portfolio',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-6">Projects</h3>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <a key={i} href={proj.link} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-white dark:bg-gray-900 border dark:border-gray-800 hover:scale-[1.02] transition shadow-xl">
            <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{proj.title}</h4>
            <p className="mt-2 text-sm">{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
