import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher({ toggle }) {
  return (
    <button onClick={toggle} className="fixed bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg z-50">
      <Moon className="w-5 h-5 dark:hidden" />
      <Sun className="w-5 h-5 hidden dark:inline" />
    </button>
  );
}
