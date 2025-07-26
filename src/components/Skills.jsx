import React from 'react';

const skills = [
  'Python', 'TensorFlow', 'Pandas', 'React', 'SQL',
  'Tailwind CSS', 'Docker', 'AWS', 'LangChain', 'OpenAI API',
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-6">Skills</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white rounded-xl text-sm font-medium shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
