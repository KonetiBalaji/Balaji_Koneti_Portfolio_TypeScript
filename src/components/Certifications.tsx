'use client';

import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const certifications = [
  {
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    credlyUrl: 'https://www.credly.com/users/balaji-koneti/',
    color: '#f59e0b',
    badge: 'AWS',
  },
  {
    name: 'IBM Machine Learning Specialist - Advanced',
    issuer: 'IBM',
    date: 'Apr 2025',
    credlyUrl: 'https://www.credly.com/users/balaji-koneti/',
    color: '#3b82f6',
    badge: 'IBM',
  },
  {
    name: 'Deep Learning using TensorFlow',
    issuer: 'IBM / Coursera',
    date: 'Apr 2025',
    credlyUrl: 'https://www.credly.com/users/balaji-koneti/',
    color: '#ef4444',
    badge: 'DL',
  },
];

function CertTiltCard({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      ref.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }, []);

  return (
    <a
      ref={ref}
      className={className}
      style={{ ...style, transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

export default function Certifications() {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="mb-4">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-accent)' }}
            >
              Certifications
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}
          >
            Validated expertise,
            <br />
            <span className="gradient-text">industry recognized.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-14 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Professional certifications backing hands-on ML engineering experience.
          </motion.p>

          {/* Certification cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {certifications.map((cert, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <CertTiltCard
                  className="group card-shine rounded-2xl p-6 sm:p-7 flex flex-col gap-4 relative overflow-hidden block cursor-pointer"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-25 transition-all duration-700 blur-2xl"
                    style={{ background: cert.color }}
                  />
                  {/* Bottom gradient line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: cert.color }}
                  />

                  <div className="flex items-start justify-between relative z-10">
                    {/* Badge with animated pulse */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
                      style={{ background: `${cert.color}15`, color: cert.color }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      {cert.badge}
                    </motion.div>
                    <ExternalLink
                      className="w-4 h-4 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    />
                  </div>

                  <div className="relative z-10">
                    <h3
                      className="text-base font-bold tracking-tight mb-1 leading-snug group-hover:translate-x-0.5 transition-transform duration-500"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                      {cert.issuer}
                    </p>
                    <span className="flex items-center gap-1.5 text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>
                </CertTiltCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
