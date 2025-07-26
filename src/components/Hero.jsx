// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-4">
          Hello, I'm <span className="text-blue-500">Abhijeet</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          AI Software Engineer | Data Engineer | Visionary Technologist
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
      <div className="md:w-1/3">
        <img
          src="/profile.jpg"
          alt="Abhijeet Kumar"
          className="rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-blue-500"
        />
      </div>
    </section>
  );
}
