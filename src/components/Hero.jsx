import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl md:text-6xl font-extrabold">Hi, I'm <span className="text-indigo-500">Abhijeet</span></h2>
      <p className="mt-4 text-lg md:text-2xl max-w-xl">AI Developer • Data Engineer • Tech Explorer</p>
      <a href="#projects" className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition">
        View My Work
      </a>
    </section>
  );
}
