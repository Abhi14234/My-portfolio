import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import ParticlesBg from './components/ParticlesBg';
import Journey from './components/Journey';
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white transition duration-300 overflow-x-hidden">
        <ParticlesBg />
        <ThemeSwitcher toggle={() => setDarkMode(!darkMode)} />
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
