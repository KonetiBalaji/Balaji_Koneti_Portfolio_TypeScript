'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import nauLogo from '../../public/icons/nau.png';
import jntuLogo from '../../public/icons/jntu.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export const educationData = [
  {
    id: 'nau-ms',
    degree: 'Master of Science in Computer Science',
    institution: 'Northern Arizona University',
    location: 'Flagstaff, AZ',
    year: 'Jan 2024 – May 2025',
    tags: ['AI/ML Focus', 'Graduate TA', 'Model Explainability', 'SHAP & LIME'],
    details: [
      'Graduate Teaching Assistant for Machine Learning - led explainability reviews across 12 projects and 30+ models',
      'Deep focus on ML evaluation, model interpretability, and NLP/LLM systems',
      'Built reusable SHAP/LIME notebooks adopted as course-wide standard',
    ],
    logo: nauLogo,
  },
  {
    id: 'jntu-btech',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Jawaharlal Nehru Technological University',
    location: 'Tirupati, AP, India',
    year: 'Jun 2016 – Nov 2020',
    tags: ['CS Fundamentals', 'Data Structures', 'Algorithms', 'CSI Member'],
    details: [
      'Strong foundation in data structures, algorithms, and systems programming',
      'Active in hackathons and technical competitions',
      'Executive Body Member of Computer Society of India (CSI)',
    ],
    logo: jntuLogo,
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
              Education
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}
          >
            Academic foundations
            <br />
            <span className="gradient-text">that shaped my craft.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-14 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            M.S. in Computer Science with ML specialization, backed by strong CS fundamentals from India.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'var(--color-border-strong)' }}
            />

            <motion.div variants={stagger} className="space-y-8">
              {educationData.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="relative md:pl-16"
                >
                  {/* Timeline node */}
                  <div
                    className="absolute left-4 top-8 w-5 h-5 rounded-full hidden md:flex items-center justify-center z-10"
                    style={{ background: 'var(--color-bg)', border: '2px solid var(--color-accent)' }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: 'var(--color-accent)' }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="group card-hover rounded-2xl p-7 sm:p-8 relative overflow-hidden"
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: 'var(--gradient-subtle)' }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-5">
                        {item.logo && (
                          <div
                            className="w-12 h-12 relative flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center"
                            style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
                          >
                            <Image
                              src={item.logo}
                              alt={`${item.institution} logo`}
                              fill
                              sizes="48px"
                              style={{ objectFit: 'contain', padding: '6px' }}
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-lg sm:text-xl font-bold tracking-tight mb-1"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {item.degree}
                          </h3>
                          <p className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                            {item.institution}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                              <Calendar className="w-3.5 h-3.5" />
                              {item.year}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                              <MapPin className="w-3.5 h-3.5" />
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-5">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: 'var(--color-accent)' }}
                            />
                            <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium"
                            style={{
                              background: 'var(--color-bg-secondary)',
                              color: 'var(--color-text-secondary)',
                              border: '1px solid var(--color-border)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
