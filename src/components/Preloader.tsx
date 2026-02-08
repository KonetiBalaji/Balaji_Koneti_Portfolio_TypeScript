'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 60 ? 8 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    // Minimum display time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
          style={{ background: 'var(--color-bg)' }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-2xl font-bold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
              Balaji<span className="gradient-text">.dev</span>
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: 'var(--color-border)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'var(--gradient-primary)' }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
