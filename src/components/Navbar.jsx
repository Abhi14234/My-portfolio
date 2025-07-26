import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-lg shadow-md px-6 py-3 flex justify-between items-center dark:bg-opacity-10 bg-white bg-opacity-70">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">🏢</h1>
      <div className="space-x-4">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-500 transition">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
