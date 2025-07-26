import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-10"
    >
      <p className="mb-2">
        © {new Date().getFullYear()} <span className="font-semibold text-indigo-600 dark:text-indigo-400">Abhijeet Kumar</span>. All rights reserved.
      </p>
      <p>
        Built with <span className="text-pink-500">❤</span> using <span className="font-medium">React</span>, <span className="font-medium">Tailwind</span>, and <span className="font-medium">Vite</span>.
      </p>
    </motion.footer>
  );
}
