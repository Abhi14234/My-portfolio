import React from 'react';

const skills = [
  'Python', 'TensorFlow', 'Pandas', 'React', 'SQL',
  'Tailwind CSS', 'Docker', 'AWS', 'LangChain', 'OpenAI API',
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-4xl font-bold text-center mb-10">
        <span className="text-indigo-600">⚡</span> My Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-indigo-200 to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 text-indigo-900 dark:text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
