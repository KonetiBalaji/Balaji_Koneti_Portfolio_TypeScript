'use client';

import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 max-w-5xl mx-auto text-left text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        I&apos;m always open to exciting collaborations, new roles, or tech conversations.
        Let’s connect, share ideas, and create something impactful together.
      </p>

      <a
        href="mailto:your.email@example.com"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
      >
        <span className="hover:underline">Send me an email</span>
        <Mail className="w-5 h-5 hover:no-underline" />
      </a>
    </section>
  );
}
