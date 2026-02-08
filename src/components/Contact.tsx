'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { SiCredly } from 'react-icons/si';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const contactLinks = [
  {
    label: 'Email',
    value: 'balaji.koneti08@gmail.com',
    href: 'mailto:balaji.koneti08@gmail.com',
    icon: Mail,
    description: 'Drop me a line anytime',
  },
  {
    label: 'LinkedIn',
    value: '/in/BalajiKoneti',
    href: 'https://www.linkedin.com/in/BalajiKoneti/',
    icon: Linkedin,
    description: 'Let\'s connect professionally',
  },
  {
    label: 'GitHub',
    value: '@KonetiBalaji',
    href: 'https://github.com/KonetiBalaji',
    icon: Github,
    description: 'Check out my code',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="mb-4">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-accent)' }}
            >
              Get in Touch
            </span>
          </motion.div>

          {/* Large heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.1 }}
          >
            Let&apos;s build something
            <br />
            <span className="gradient-text-animated">extraordinary together.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-12 max-w-xl mx-auto"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          >
            I&apos;m always open to exciting collaborations, new roles, and conversations
            about AI, machine learning, and the future of technology.
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={fadeUp} className="mb-14">
            <a
              href="mailto:balaji.koneti08@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'var(--gradient-primary)',
                backgroundSize: '200% 200%',
                boxShadow: 'var(--shadow-lg)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-glow)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-lg)'}
            >
              <Mail className="w-5 h-5" />
              Send me an email
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  variants={fadeUp}
                  className="group card-hover rounded-2xl p-6 text-left flex flex-col gap-3"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'var(--color-accent-light)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                      {link.label}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                      {link.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
