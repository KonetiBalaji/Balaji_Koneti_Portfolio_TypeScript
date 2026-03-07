'use client';

import { motion } from 'framer-motion';

const metrics = [
  { label: 'Retrieval Relevance', value: '+22% P@5', icon: '/' },
  { label: 'P95 Latency', value: '1.3s to 640ms', icon: '/' },
  { label: 'LLM Cost Reduction', value: '-31% per request', icon: '/' },
  { label: 'Enterprise Queries Evaluated', value: '450+', icon: '/' },
  { label: 'Years Engineering', value: '6+', icon: '/' },
  { label: 'Models Reviewed as TA', value: '30+', icon: '/' },
  { label: 'ETL Performance Gain', value: '+43%', icon: '/' },
  { label: 'Query Latency Cut', value: '450ms to 120ms', icon: '/' },
];

const doubled = [...metrics, ...metrics];

export default function MetricsTicker() {
  return (
    <div
      className="relative py-5 overflow-hidden select-none"
      style={{
        background: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--color-bg-secondary), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--color-bg-secondary), transparent)' }}
      />

      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {doubled.map((metric, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            <span
              className="text-sm font-bold tabular-nums"
              style={{ color: 'var(--color-accent)' }}
            >
              {metric.value}
            </span>
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {metric.label}
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: 'var(--color-border-strong)' }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
