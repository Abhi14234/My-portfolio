// src/components/Contact.jsx

import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-8 py-20 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        <div className="space-y-6 text-lg">
          <a
            href="https://www.linkedin.com/in/abhijeet-kumar-113929169"
            className="flex items-center gap-3 hover:text-blue-600 transition"
            target="_blank" rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
            linkedin.com/in/abhijeet-kumar-113929169
          </a>
          <a
            href="https://github.com/Abhi14234"
            className="flex items-center gap-3 hover:text-gray-800 dark:hover:text-white transition"
            target="_blank" rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
            github.com/Abhi14234
          </a>
          <a
            href="tel:+917262060320"
            className="flex items-center gap-3 hover:text-green-600 transition"
          >
            <FaPhone className="w-6 h-6" />
            +91 7262060320
          </a>
        </div>
      </div>
    </section>
  );
}
