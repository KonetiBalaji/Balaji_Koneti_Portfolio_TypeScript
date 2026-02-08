'use client';

import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { ArrowUpRight, Bot, ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const projects = [
  {
    title: 'Intelligent Learning Assistant',
    subtitle: 'Restricting AI Guidance via Prompt Injection Detection',
    description:
      'Built an NLP-based learning assistant using BERT + Transformers to guide 200+ students through stepwise learning workflows, improving task accuracy by 35% via structured prompting and intent-aware routing.',
    impact: [
      '+35% task accuracy via structured prompting & intent-aware routing',
      '-30% successful prompt-injection attempts on adversarial test set',
      '+40% improvement in learning outcome evaluation',
    ],
    tags: ['Python', 'Hugging Face', 'BERT', 'PyTorch', 'FastAPI', 'Transformers'],
    github: 'https://github.com/KonetiBalaji',
    number: '01',
    icon: Bot,
    color: '#8b5cf6',
  },
  {
    title: 'LLM for Security Log Detection',
    subtitle: 'Hybrid LLM + BERT Pipeline for Threat Analysis',
    description:
      'Designed a hybrid security log analysis pipeline combining LLMs + BERT + regex rules to detect anomalies and threats early in system logs, generating structured triage outputs with severity, suspected cause, and recommended actions.',
    impact: [
      'Hybrid pipeline: LLM + BERT + regex for multi-layered detection',
      'Structured triage: severity, cause, recommended actions',
      'Web + CLI interfaces for investigation & operational use',
    ],
    tags: ['Python', 'LLM APIs', 'BERT', 'Transformers', 'Regex', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/KonetiBalaji',
    number: '02',
    icon: ShieldCheck,
    color: '#22c55e',
  },
];

/* ── 3D Tilt Card for Projects ── */
function ProjectTiltCard({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      ref.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

      // Move the spotlight
      const spotlight = ref.current.querySelector('.spotlight') as HTMLElement;
      if (spotlight) {
        spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.06), transparent 40%)`;
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    const spotlight = ref.current.querySelector('.spotlight') as HTMLElement;
    if (spotlight) spotlight.style.background = 'transparent';
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="spotlight absolute inset-0 pointer-events-none rounded-2xl z-0 transition-all duration-300" />
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
              Featured Projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}
          >
            Built to solve
            <br />
            <span className="gradient-text">real-world problems.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-14 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            End-to-end ML projects with quantified impact - from NLP-powered assistants to security threat detection pipelines.
          </motion.p>

          {/* Project cards */}
          <motion.div variants={stagger} className="grid grid-cols-1 gap-6">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <ProjectTiltCard
                    className="group relative rounded-2xl p-8 sm:p-10 overflow-hidden cursor-pointer"
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {/* Hover gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                      style={{ background: 'var(--gradient-subtle)' }}
                    />

                    {/* Animated border on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10"
                      style={{ background: `linear-gradient(90deg, ${project.color}, var(--color-accent))` }}
                    />

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
                      style={{ textDecoration: 'none' }}
                    >
                      {/* Project number + icon */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-3">
                        <span
                          className="text-5xl sm:text-6xl font-black tracking-tighter select-none"
                          style={{
                            color: 'transparent',
                            WebkitTextStroke: '1.5px var(--color-border-strong)',
                          }}
                        >
                          {project.number}
                        </span>
                        <motion.div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${project.color}15` }}
                          whileHover={{ scale: 1.2, rotate: 12 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                          <Icon className="w-5 h-5" style={{ color: project.color }} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h3
                            className="text-xl sm:text-2xl font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-500"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-all duration-500">
                            <FaGithub className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
                            <ArrowUpRight
                              className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                              style={{ color: 'var(--color-text-secondary)' }}
                            />
                          </div>
                        </div>

                        <p className="text-sm font-medium mb-4" style={{ color: project.color }}>
                          {project.subtitle}
                        </p>

                        <p
                          className="text-sm sm:text-base mb-5 leading-relaxed max-w-2xl"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {project.description}
                        </p>

                        {/* Impact bullets */}
                        <ul className="space-y-1.5 mb-5">
                          {project.impact.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <motion.span
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ background: project.color }}
                                whileHover={{ scale: 2 }}
                              />
                              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-300"
                              style={{
                                background: 'var(--color-accent-light)',
                                color: 'var(--color-accent)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </ProjectTiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
