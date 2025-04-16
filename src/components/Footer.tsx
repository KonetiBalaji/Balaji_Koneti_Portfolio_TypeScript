"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiCredly } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-center py-8 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
      <p className="mb-4">
        © 2025{" "}
        <span className="font-semibold text-black dark:text-white">
          Balaji Koneti
        </span>
        . All rights reserved.
      </p>

      <div className="flex justify-center gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/BalajiKoneti/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5 text-blue-700 dark:text-blue-400 hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://github.com/KonetiBalaji"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5 text-gray-800 dark:text-white hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.credly.com/users/balaji-koneti/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Credly"
        >
          <SiCredly className="w-5 h-5 text-orange-500 dark:text-orange-400 hover:scale-110 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
