'use client';

import ThemeSwitcher from './ThemeSwitcher';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Home,
  User,
  Hammer,
  FileText,
  GraduationCap,
  Briefcase,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Hammer },
  { name: 'Projects', href: '#projects', icon: FileText },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Work Experience', href: '#work', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function NavBar() {
  const [active, setActive] = useState<string>('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement>(null);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

  // Scroll-based active state
  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map(({ href }) => {
        const el = document.querySelector(href);
        if (!el) return { name: '', top: Infinity };
        const rect = (el as HTMLElement).getBoundingClientRect();
        return { name: href, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      const found = navItems.find((item) => item.href === closest.name);
      if (found) setActive(found.name);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update underline position/width on active change or resize
  useEffect(() => {
    const updateUnderline = () => {
      const idx = navItems.findIndex((item) => item.name === active);
      const el = navRefs.current[idx];
      if (el) {
        const rect = el.getBoundingClientRect();
        const parentRect = el.parentElement?.getBoundingClientRect();
        if (parentRect) {
          setUnderlineProps({
            left: rect.left - parentRect.left,
            width: rect.width,
          });
        }
      }
    };
    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [active, menuOpen]);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <Link href="#hero" aria-label="Home">Balaji.dev</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {navItems.map(({ name, href, icon: Icon }, idx) => (
            <Link
              key={name}
              href={href}
              aria-label={name}
              ref={el => { navRefs.current[idx] = el; }}
              className={`group relative flex items-center justify-center text-sm text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition
                ${active === name ? 'text-blue-600 dark:text-blue-400' : ''}`}
            >
              <div className="relative flex items-center">
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                {active === name && (
                  <span className="ml-1 px-2 py-1 rounded text-sm animate-slide-in">
                    {name}
                  </span>
                )}
              </div>
            </Link>
          ))}
          {/* True gliding underline */}
          <motion.div
            ref={underlineRef}
            className="absolute bottom-0 h-1 rounded bg-blue-600 dark:bg-blue-400"
            animate={{ left: underlineProps.left, width: underlineProps.width }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ zIndex: 1 }}
          />
          <ThemeSwitcher />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="w-6 h-6 text-blue-600 dark:text-blue-400" /> : <Menu className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
        </button>

        {/* Slide-out mobile menu */}
        <div
          className={`fixed inset-0 z-50 bg-black/40 dark:bg-black/60 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={!menuOpen}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-xl transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full p-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Menu</span>
                <button
                  className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </button>
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center space-x-3 text-lg font-medium px-3 py-2 rounded transition
                      ${active === name ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'}`}
                  >
                    <div className="relative flex items-center w-full">
                      <Icon className="w-5 h-5" />
                      <span className="ml-2">{name}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <ThemeSwitcher />
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}
