import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = ['Home', 'About','Journey', 'Skills', 'Projects', 'Contact'];

  // Handle active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sections.map((id) => {
        const el = document.getElementById(id.toLowerCase());
        return el ? { id, top: el.offsetTop - 100 } : null;
      });

      const current = offsets.reverse().find(item => item && scrollY >= item.top);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-md transition-all duration-300 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          Abhijeet.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-200 ${
                activeSection === item
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 flex flex-col space-y-3 text-sm font-medium">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`transition-colors duration-200 ${
                activeSection === item
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
