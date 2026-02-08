'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Zap, DollarSign, Code2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ── Smart Animated Counter Hook ── 
   Supports counting UP (from → to where from < to) 
   and counting DOWN (from → to where from > to) */
function useSmartCounter(from: number, to: number, duration: number = 2200) {
  const [value, setValue] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    let raf: number;
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const delta = to - from; // positive = count up, negative = count down
    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(from + ease(progress) * delta));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, from, to, duration]);

  return { ref, value };
}

const stats = [
  {
    from: 0, to: 22, prefix: '+', suffix: '%',
    label: 'Retrieval Relevance (P@5)',
    sublabel: '0% → +22%',
    icon: TrendingUp, color: '#22c55e',
    direction: 'up' as const,
  },
  {
    from: 1300, to: 640, prefix: '', suffix: 'ms',
    label: 'P95 End-to-End Latency',
    sublabel: '1.3s → 640ms',
    icon: Zap, color: '#f59e0b',
    direction: 'down' as const,
  },
  {
    from: 0, to: 31, prefix: '-', suffix: '%',
    label: 'LLM Cost per Request',
    sublabel: 'Saved 31% per request',
    icon: DollarSign, color: '#3b82f6',
    direction: 'down' as const,
  },
  {
    from: 0, to: 6, prefix: '', suffix: '+',
    label: 'Years Engineering',
    sublabel: 'And counting…',
    icon: Code2, color: '#8b5cf6',
    direction: 'up' as const,
  },
];

const highlights = [
  'ML Engineer (GenAI/RAG)',
  '6+ Years Software Engineering',
  'Production RAG Systems',
  'AWS Certified ML Specialty',
  'Evaluation-Driven Development',
  'LangChain & pgvector',
  'RAGAS & LLM-as-Judge',
  'FastAPI Microservices',
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;
  const { ref, value } = useSmartCounter(stat.from, stat.to, 2400);
  const isDown = stat.direction === 'down';

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      className="group card-hover rounded-2xl p-6 flex flex-col items-start gap-3 relative overflow-hidden"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 40px ${stat.color}15, var(--shadow-lg)`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-15 transition-all duration-700 blur-2xl"
        style={{ background: stat.color }}
      />

      <div className="flex items-center justify-between w-full relative z-10">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${stat.color}15` }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Icon className="w-5 h-5" style={{ color: stat.color }} />
        </motion.div>

        {/* Direction arrow indicator */}
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: `${stat.color}10` }}
        >
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ color: stat.color, transform: isDown ? 'rotate(180deg)' : 'none' }}
          >
            <path d="M6 10V2M6 2L2.5 5.5M6 2L9.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-3xl font-extrabold tracking-tight tabular-nums" style={{ color: 'var(--color-text-primary)' }}>
          {stat.prefix}{value}{stat.suffix}
        </p>
        <p className="text-xs font-medium leading-snug mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          {stat.label}
        </p>
        <p className="text-[10px] leading-snug mt-0.5" style={{ color: `${stat.color}99` }}>
          {stat.sublabel}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="section-container" ref={sectionRef}>
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
              About Me
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}
          >
            Shipping production ML
            <br />
            <span className="gradient-text">with measurable impact.</span>
          </motion.h2>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Description */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <p
                className="text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                I&apos;m <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Balaji Koneti</strong>, 
                a Machine Learning Engineer (GenAI/RAG) with{' '}
                <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>6+ years</strong> in 
                software engineering, shipping production retrieval and evaluation systems on AWS.
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                I&apos;ve delivered measurable gains in{' '}
                <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>retrieval relevance (+22% P@5</strong> on 450 enterprise queries),{' '}
                <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>latency (P95 1.3s to 640ms)</strong>, and{' '}
                <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>LLM cost (-31%)</strong> through 
                evaluation-driven iteration, scalable inference microservices, and reliability guardrails.
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed mb-10"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                I hold a <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Master&apos;s in Computer Science</strong> from 
                Northern Arizona University and served as a Graduate TA for Machine Learning, 
                leading model explainability reviews using SHAP &amp; LIME across 12 projects and 30+ models.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5">
                {highlights.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    variants={fadeUp}
                    className="tag"
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right: Stats grid with animated counters */}
            <motion.div
              variants={stagger}
              className="lg:col-span-2 grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} index={idx} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
