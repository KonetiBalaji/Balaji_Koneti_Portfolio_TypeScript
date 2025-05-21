'use client';

import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-12 max-w-5xl mx-auto text-left text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-left">Get in Touch</h2>

      <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        I&apos;m always open to exciting collaborations, new roles, or tech conversations.
        Let's connect, share ideas, and create something impactful together.
      </p>

      <a
        href="mailto:koneti.balaji08@gmail.com"
        className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full shadow-sm hover:shadow-lg text-base font-medium transition-all duration-300 focus:outline-none"
      >
        <span>Send me an email</span>
        <Mail className="w-5 h-5" />
      </a>
    </section>
  );
}
