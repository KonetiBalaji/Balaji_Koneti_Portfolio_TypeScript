'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const workData = [
  {
    id: 'progress-mle',
    role: 'Machine Learning Engineer',
    company: 'Progress Solutions',
    location: 'Plano, TX',
    period: 'Jun 2025 – Present',
    logo: null,
    summary:
      'Leading design and rollout of production RAG services, cutting P95 latency from 1.3s to 640ms, improving retrieval relevance by 22% (P@5), and reducing LLM spend by 31% per request.',
    details: [
      'Led design and rollout of production RAG services (LangChain & pgvector), improving retrieval relevance by 22% (Precision@5) on ~450 real enterprise queries via semantic/recursive chunking and hybrid retrieval tuning.',
      'Cut P95 end-to-end latency from 1.3s to 640ms by separating embedding + generation services, adding Redis caching keyed by (query, tenant, filters), and batching embedding calls.',
      'Reduced LLM spend by 31% per request by enforcing token budgets, prompt compression, and dynamic routing (retrieval-only / low-risk flows) to smaller models without degrading answer quality.',
      'Built evaluation & regression pipeline combining Label Studio human review with LLM-as-judge (RAGAS & custom GPT graders) to catch faithfulness/relevance regressions; operationalized as a release gate.',
      'Productionized inference service (FastAPI & AWS) with health checks, circuit breakers, and explicit abstain/empty-retrieval handling - improved reliability and lowered hallucination in low-confidence scenarios.',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'pgvector', 'AWS', 'Docker', 'Terraform', 'RAGAS'],
  },
  {
    id: 'nau-ta',
    role: 'Graduate Teaching Assistant - Machine Learning',
    company: 'Northern Arizona University',
    location: 'Flagstaff, AZ',
    period: 'Jun 2024 – May 2025',
    logo: '/icons/nau.png',
    summary:
      'Led model explainability reviews using SHAP & LIME across 12 projects / 45 students / 30+ models, building reusable interpretability notebooks that reduced time-to-diagnose by 40%.',
    details: [
      'Led model explainability reviews using SHAP and LIME across 12 projects / 45 students / 30+ models, identifying leakage and bias patterns and converting findings into concrete feature redesign and retraining recommendations.',
      'Built reusable interpretability notebooks and visualization templates adopted in course workflows, reducing time-to-diagnose model issues by 40% and improving clarity for non-ML stakeholders.',
      'Coached teams on evaluation hygiene (proper splits, leakage checks, error analysis) and improved project report quality, reducing rework cycles by 2 iterations.',
    ],
    tags: ['Python', 'SHAP', 'LIME', 'Jupyter', 'scikit-learn', 'Mentoring'],
  },
  {
    id: 'infosys',
    role: 'Software Engineer - Machine Learning Systems',
    company: 'Infosys Ltd',
    location: 'Bangalore, India',
    period: 'Mar 2022 – Dec 2023',
    logo: '/icons/infosys.png',
    summary:
      'Built fraud-detection pipelines over 1M+ transactional records, improved ETL performance by 43%, and integrated ML outputs into backend services through resilient API patterns.',
    details: [
      'Built and operationalized fraud-detection pipelines over 1M+ transactional records, delivering model features and real-time inference via REST API for XGBoost models - enabled faster detection and reduced fraud losses.',
      'Improved ETL performance 43% through SQL tuning (query refactors, indexing, partitioning) and automated data-quality validation for null spikes and schema drift.',
      'Integrated ML outputs into backend services through resilient API patterns (timeouts, retries, structured errors), improving reliability and reducing failed inference runs by 15%.',
    ],
    tags: ['Python', 'SQL', 'XGBoost', 'REST APIs', 'ETL', 'PostgreSQL', 'AWS S3'],
  },
  {
    id: 'nerdsgeeks',
    role: 'Software Engineer',
    company: 'Nerds and Geeks Pvt Ltd',
    location: 'Bangalore, India',
    period: 'Dec 2019 – Feb 2022',
    logo: '/icons/nerd.png',
    summary:
      'Owned backend API development, cutting P95 query latency from 450ms to 120ms and automating reporting workflows from 4 hours to 20 minutes.',
    details: [
      'Owned backend API development for data-driven applications; improved system reliability by adding input validation, structured logging, and consistent error semantics - reduced production defects by 20%.',
      'Optimized database schema and SQL queries (indexes, query rewrites), cutting P95 query latency 450ms to 120ms and enabling 35% higher throughput under load.',
      'Automated reporting/data workflows using Python and SQL, reducing manual reporting from 4 hours to 20 minutes and improving data consistency via repeatable pipelines and sanity checks.',
    ],
    tags: ['Python', 'SQL', 'REST APIs', 'PostgreSQL', 'FastAPI', 'Backend'],
  },
];

/* ── Animated timeline connector ── */
function AnimatedTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.2', 'end 0.8'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="absolute left-6 top-0 bottom-0 hidden md:block">
      {/* Background line */}
      <div
        className="absolute inset-0 w-px"
        style={{ background: 'var(--color-border)' }}
      />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 w-px origin-top"
        style={{
          background: 'var(--gradient-primary)',
          scaleY,
          height: '100%',
        }}
      />
    </div>
  );
}

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState<string | null>('progress-mle');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="work"
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
              Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}
          >
            6+ years shipping
            <br />
            <span className="gradient-text">production systems.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-14 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            From production RAG services to fraud detection pipelines - every role measured by real impact.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            <AnimatedTimeline />

            <motion.div variants={stagger} className="space-y-6">
              {workData.map((item, itemIdx) => {
                const isExpanded = expandedId === item.id;
                const isCurrent = itemIdx === 0;
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    className="relative md:pl-16"
                  >
                    {/* Timeline node */}
                    <motion.div
                      className="absolute left-4 top-8 w-5 h-5 rounded-full hidden md:flex items-center justify-center z-10"
                      style={{
                        background: 'var(--color-bg)',
                        border: `2px solid ${isCurrent ? '#22c55e' : 'var(--color-accent)'}`,
                      }}
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIdx * 0.15 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: isCurrent ? '#22c55e' : 'var(--color-accent)' }}
                        animate={isCurrent ? { scale: [1, 1.5, 1] } : {}}
                        transition={isCurrent ? { duration: 2, repeat: Infinity } : {}}
                      />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="group rounded-2xl p-7 sm:p-8 relative overflow-hidden"
                      style={{
                        background: 'var(--color-surface)',
                        border: `1px solid ${isCurrent ? 'var(--color-accent)' : 'var(--color-border)'}`,
                        boxShadow: isExpanded ? 'var(--shadow-md)' : isCurrent ? 'var(--shadow-sm)' : 'none',
                      }}
                      whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      {/* Current badge */}
                      {isCurrent && (
                        <motion.div
                          className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: '#22c55e15', color: '#22c55e' }}
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="glow-dot" style={{ width: 6, height: 6 }} />
                          Current
                        </motion.div>
                      )}

                      {/* Hover gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{ background: 'var(--gradient-subtle)' }}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          {item.logo ? (
                            <div
                              className="w-11 h-11 relative flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center"
                              style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
                            >
                              <Image
                                src={item.logo}
                                alt={`${item.company} logo`}
                                width={44}
                                height={44}
                                style={{ objectFit: 'contain', padding: '4px' }}
                                className="rounded"
                              />
                            </div>
                          ) : (
                            <motion.div
                              className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center text-base font-bold"
                              style={{
                                background: 'var(--color-accent-light)',
                                color: 'var(--color-accent)',
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            >
                              {item.company.split(' ').map(w => w[0]).join('').slice(0, 2)}
                            </motion.div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3
                              className="text-lg font-bold tracking-tight"
                              style={{ color: 'var(--color-text-primary)' }}
                            >
                              {item.role}
                            </h3>
                            <p className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                              {item.company}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                                <Calendar className="w-3.5 h-3.5" />
                                {item.period}
                              </span>
                              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                                <MapPin className="w-3.5 h-3.5" />
                                {item.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Summary */}
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {item.summary}
                        </p>

                        {/* Expandable details */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2.5 mb-5 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                            {item.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-2.5"
                                initial={{ opacity: 0, x: -10 }}
                                animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: idx * 0.08, duration: 0.4 }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ background: 'var(--color-accent)' }}
                                />
                                <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                  {detail}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* Tags + expand toggle */}
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
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
                          <motion.button
                            onClick={() => toggleExpand(item.id)}
                            className="flex items-center gap-1 text-xs font-medium transition-colors duration-300"
                            style={{ color: 'var(--color-accent)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {isExpanded ? (
                              <>Less <ChevronUp className="w-3.5 h-3.5" /></>
                            ) : (
                              <>Details <ChevronDown className="w-3.5 h-3.5" /></>
                            )}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
