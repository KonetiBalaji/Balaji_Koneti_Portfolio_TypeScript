'use client';

import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import {
  Code2,
  Brain,
  Cpu,
  BarChart3,
  Server,
  Cloud,
  Database,
  Eye,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const skills = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'Java', 'SQL'],
    color: '#3b82f6',
  },
  {
    category: 'GenAI / RAG',
    icon: Brain,
    items: ['LangChain', 'LlamaIndex', 'Semantic Chunking', 'Recursive Chunking', 'Embeddings', 'Vector Search', 'pgvector', 'Hybrid Retrieval'],
    color: '#8b5cf6',
  },
  {
    category: 'LLMs',
    icon: Cpu,
    items: ['OpenAI GPT-4/4o', 'Anthropic Claude', 'Prompt Engineering', 'Token Optimization', 'Dynamic Model Routing'],
    color: '#ec4899',
  },
  {
    category: 'Machine Learning',
    icon: BarChart3,
    items: ['NLP', 'Supervised Learning', 'Feature Engineering', 'Model Evaluation', 'Error Analysis', 'XGBoost', 'scikit-learn'],
    color: '#f97316',
  },
  {
    category: 'Evaluation & Observability',
    icon: Eye,
    items: ['RAGAS', 'LLM-as-Judge', 'Human-in-the-Loop (Label Studio)', 'MLflow', 'Weights & Biases', 'SHAP', 'LIME'],
    color: '#22c55e',
  },
  {
    category: 'ML Serving & APIs',
    icon: Server,
    items: ['FastAPI', 'Inference Microservices', 'REST APIs', 'Circuit Breakers', 'Redis Caching', 'Health Checks'],
    color: '#06b6d4',
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    items: ['AWS (EC2, S3, Lambda, SageMaker)', 'Docker', 'Terraform', 'CI/CD'],
    color: '#f59e0b',
  },
  {
    category: 'Data Engineering',
    icon: Database,
    items: ['PostgreSQL', 'ETL Pipelines', 'Data Validation', 'SQL Tuning', 'Schema Design', 'Indexing & Partitioning'],
    color: '#ef4444',
  },
];

/* ── 3D Tilt Card ── */
function TiltCard({ children, className, style, color }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color: string;
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
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
              Technical Skills
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}
          >
            The stack behind
            <br />
            <span className="gradient-text">production ML systems.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-14 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            From retrieval pipelines to evaluation frameworks - the tools I use to build, ship, and measure ML at scale.
          </motion.p>

          {/* Bento Grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map((group, idx) => {
              const Icon = group.icon;
              const isWide = idx === 1 || idx === 4;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className={isWide ? 'sm:col-span-2' : ''}
                >
                  <TiltCard
                    color={group.color}
                    className={`group rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden h-full cursor-default`}
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {/* Hover gradient glow */}
                    <div
                      className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 blur-3xl"
                      style={{ background: group.color }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${group.color}40, transparent)` }}
                    />

                    {/* Header */}
                    <div className="flex items-center gap-3 relative z-10">
                      <motion.div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${group.color}15` }}
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Icon className="w-5 h-5" style={{ color: group.color }} />
                      </motion.div>
                      <h3
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {group.category}
                      </h3>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {group.items.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{
                            background: 'var(--color-bg-secondary)',
                            color: 'var(--color-text-secondary)',
                            border: '1px solid var(--color-border)',
                          }}
                          whileHover={{
                            scale: 1.06,
                            background: `${group.color}15`,
                            color: group.color,
                            borderColor: `${group.color}30`,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
