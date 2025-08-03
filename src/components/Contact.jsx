// src/components/Contact.jsx

import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = [
    {
      icon: <FaLinkedin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhijeet-kumar-113929169",
      text: "linkedIn",
    },
    {
      icon: <FaGithub className="w-6 h-6 text-gray-800 dark:text-white group-hover:scale-110 transition-transform" />,
      label: "GitHub",
      href: "https://github.com/Abhi14234",
      text: "Github",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />,
      label: "Phone",
      href: "tel:+917262060320",
      text: "+91 7262060320",
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />,
      label: "Email",
      href: "mailto:abhigrt14@gmail.com",
      text: "Gmail",
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          📬 Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg text-zinc-600 dark:text-zinc-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Open to new opportunities, exciting AI projects, or just a coffee chat ☕.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              className="group flex items-center gap-4 mx-auto w-fit px-6 py-4 rounded-xl bg-white/20 dark:bg-zinc-800/30 shadow-md backdrop-blur hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {contact.icon}
              <span className="text-md font-medium">{contact.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
