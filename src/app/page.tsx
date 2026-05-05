'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Sparkles } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────
// Set the date you plan to be back live (local time, ISO format).
// Example: '2026-05-18T09:00:00' → Monday May 18, 9:00 AM
// ─────────────────────────────────────────────────────────────────────
const RETURN_DATE = '2026-05-18T09:00:00';

const socials = [
  { label: 'Email', href: 'mailto:balaji.koneti08@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/BalajiKoneti/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/KonetiBalaji', icon: Github },
];

const teasers = ['New work', 'Sharper design', 'Deeper case studies'];

type TimeParts = { days: number; hours: number; minutes: number; seconds: number };

function diffParts(target: number, now: number): TimeParts {
  const ms = Math.max(0, target - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, '0');

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatReturnDate(d: Date) {
  return `${WEEKDAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

export default function ComingSoon() {
  const target = useMemo(() => new Date(RETURN_DATE).getTime(), []);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeParts>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const tick = () => setTime(diffParts(target, Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const isLive = mounted && Date.now() >= target;
  const returnLabel = useMemo(() => formatReturnDate(new Date(RETURN_DATE)), []);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 py-16"
      style={{ background: 'var(--color-bg)', color: 'var(--color-text-primary)' }}
    >
      {/* Gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="absolute -z-10 rounded-full blur-3xl opacity-60"
        style={{
          width: 520,
          height: 520,
          left: '-10%',
          top: '8%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.32), transparent 60%)',
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -z-10 rounded-full blur-3xl opacity-50"
        style={{
          width: 460,
          height: 460,
          right: '-8%',
          bottom: '5%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.28), transparent 60%)',
        }}
        animate={{ x: [0, -30, 25, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -z-10 rounded-full blur-3xl opacity-40"
        style={{
          width: 380,
          height: 380,
          left: '42%',
          top: '32%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.28), transparent 60%)',
        }}
        animate={{ x: [0, 25, -25, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.18em] uppercase mb-8"
          style={{
            background: 'var(--color-accent-light)',
            color: 'var(--color-accent)',
            border: '1px solid var(--color-border)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
              style={{ background: 'var(--color-accent)' }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: 'var(--color-accent)' }}
            />
          </span>
          {isLive ? 'Refreshing' : 'Under construction'}
        </motion.div>

        {/* Sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles
              className="w-10 h-10"
              style={{ color: 'var(--color-accent)' }}
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-5"
        >
          Building something{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'var(--gradient-primary)' }}
          >
            interesting
          </span>
          .
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg max-w-md mx-auto mb-10"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          The site is taking a short break while I ship the next iteration.
          Back live on{' '}
          <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
            {returnLabel}
          </span>
          .
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          {isLive ? (
            <p
              className="text-lg font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              We&rsquo;re back. Refresh the page →
            </p>
          ) : (
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {[
                { label: 'Days', value: time.days },
                { label: 'Hours', value: time.hours },
                { label: 'Minutes', value: time.minutes },
                { label: 'Seconds', value: time.seconds },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="flex flex-col items-center justify-center rounded-xl px-3 sm:px-5 py-3 sm:py-4 min-w-[68px] sm:min-w-[88px]"
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <span
                      className="text-2xl sm:text-4xl font-bold tabular-nums leading-none"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {mounted ? pad(unit.value) : '--'}
                    </span>
                    <span
                      className="mt-2 text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    >
                      {unit.label}
                    </span>
                  </div>
                  {i < 3 && (
                    <span
                      className="text-xl sm:text-2xl font-light"
                      style={{ color: 'var(--color-text-muted)' }}
                      aria-hidden
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* What's coming teasers */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {teasers.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Icon
                className="w-[18px] h-[18px] transition-colors group-hover:text-[var(--color-accent)]"
                strokeWidth={1.75}
              />
            </a>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 text-[11px] tracking-[0.22em] uppercase"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Balaji Koneti &middot; ML Engineer
        </motion.p>
      </div>
    </main>
  );
}
