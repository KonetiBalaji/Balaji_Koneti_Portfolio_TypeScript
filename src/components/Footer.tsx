'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/BalajiKoneti/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/KonetiBalaji',
    icon: FaGithub,
  },
  {
    label: 'Credly',
    href: 'https://www.credly.com/users/balaji-koneti/',
    icon: SiCredly,
  },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="section-container">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-lg font-bold tracking-tight mb-3" style={{ color: 'var(--color-text-primary)' }}>
              Balaji<span className="gradient-text">.dev</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--color-text-tertiary)' }}>
              AI/ML Engineer building intelligent systems that transform data into real-world impact.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-text-tertiary)' }}>
              Navigation
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-300 link-underline inline-block"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Back to top */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-text-tertiary)' }}>
              Connect
            </p>
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'var(--color-bg-tertiary)',
                      color: 'var(--color-text-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-accent)';
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.background = 'var(--color-accent-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.background = 'var(--color-bg-tertiary)';
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm font-medium transition-all duration-300"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
            &copy; {new Date().getFullYear()} Balaji Koneti. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Designed & built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
