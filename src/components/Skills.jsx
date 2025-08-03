import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = {
  'Languages & Frameworks': [
    'Python', 'C++', 'SQL', 'JavaScript', 'HTML/CSS',
    'Flask', 'Django', 'FastAPI', 'React', 'Vite', 'Tailwind CSS',
    'Hugging Face Transformers', 'PyTorch', 'Scikit-learn'
  ],
  'AI & Data Science': [
    'TensorFlow', 'NumPy', 'Pandas', 'ARIMA', 'LSTM',
    'Neural Networks', 'CNN', 'Genetic Algorithms', 'NLP',
    'LLM', 'RAG', 'Agentic AI', 'LangChain', 'OpenCV', 'ML', 'LLaMA'
  ],
  'Tools & Platforms': [
    'Git', 'Jupyter Notebook', 'Docker', 'VS Code', 'Eclipse',
    'AWS EC2', 'ROS'
  ],
  'Cloud & DevOps': [
    'Docker Containers', 'CI/CD Pipelines', 'Cloud Storage',
    'Prompt Engineering', 'Model Deployment', 'API Integration'
  ]
};

export default function Skills() {
  const categories = Object.keys(skillCategories);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h3 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        ⚡ My Tech Stack
      </h3>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 backdrop-blur-md border 
              ${
                activeTab === category
                  ? 'bg-indigo-600 text-white border-indigo-700 scale-105 shadow-indigo-400/40'
                  : 'bg-white/20 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-white/30 dark:hover:bg-gray-700'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          {skillCategories[activeTab].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.025 }}
              className="bg-white/40 dark:bg-indigo-900/60 text-indigo-900 dark:text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-xl backdrop-blur-md hover:scale-105 hover:shadow-indigo-500/40 transition-transform duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
