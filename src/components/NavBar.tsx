'use client';

import ThemeSwitcher from './ThemeSwitcher';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Home,
  User,
  Layers,
  FolderKanban,
  GraduationCap,
  Briefcase,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Layers },
  { name: 'Projects', href: '#projects', icon: FolderKanban },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Experience', href: '#work', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function NavBar() {
  const [active, setActive] = useState<string>('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based active detection + hide on scroll down
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    // Show/hide based on direction
    if (currentY > lastScrollY && currentY > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(currentY);

    // Scrolled state for glass effect
    setScrolled(currentY > 20);

    // Active section
    const offsets = navItems.map(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return { name: '', top: Infinity };
      const rect = (el as HTMLElement).getBoundingClientRect();
      return { name: href, top: Math.abs(rect.top - 100) };
    });
    const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
    const found = navItems.find((item) => item.href === closest.name);
    if (found) setActive(found.name);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-[var(--shadow-sm)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="#hero"
          aria-label="Home"
          className="relative group"
        >
          <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
            Balaji
            <span className="gradient-text font-extrabold">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = active === name;
            return (
              <Link
                key={name}
                href={href}
                aria-label={name}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group"
                style={{
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)';
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'var(--color-accent-light)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="w-4 h-4" strokeWidth={isActive ? 2.5 : 2} />
                  <span className="hidden lg:inline">{name}</span>
                </span>
              </Link>
            );
          })}

          <div className="ml-2 pl-2" style={{ borderLeft: '1px solid var(--color-border)' }}>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitcher />
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50"
                style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col"
                style={{ background: 'var(--color-surface)', borderLeft: '1px solid var(--color-border)' }}
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile header */}
                <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <span className="text-lg font-bold gradient-text">Menu</span>
                  <button
                    className="p-2 rounded-lg transition-colors"
                    style={{ color: 'var(--color-text-primary)' }}
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile nav links */}
                <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                  {navItems.map(({ name, href, icon: Icon }, idx) => {
                    const isActive = active === name;
                    return (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={href}
                          aria-label={name}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                          style={{
                            color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                            background: isActive ? 'var(--color-accent-light)' : 'transparent',
                          }}
                        >
                          <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                          <span>{name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile footer */}
                <div className="p-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                    Designed & Built by Balaji Koneti
                  </p>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
