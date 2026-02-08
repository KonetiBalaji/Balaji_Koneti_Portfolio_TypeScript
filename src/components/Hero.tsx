'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, FileText, ScrollText } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.8, // after preloader
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

/* Floating geometric shapes */
const shapes = [
  { size: 60, x: '10%', y: '20%', delay: 0, duration: 18, color: 'var(--color-accent)', opacity: 0.08, shape: 'circle' },
  { size: 80, x: '85%', y: '15%', delay: 2, duration: 22, color: '#8b5cf6', opacity: 0.06, shape: 'square' },
  { size: 40, x: '75%', y: '70%', delay: 1, duration: 20, color: '#ec4899', opacity: 0.07, shape: 'circle' },
  { size: 50, x: '20%', y: '75%', delay: 3, duration: 16, color: '#22c55e', opacity: 0.06, shape: 'triangle' },
  { size: 30, x: '60%', y: '85%', delay: 2, duration: 24, color: '#f59e0b', opacity: 0.08, shape: 'circle' },
  { size: 70, x: '40%', y: '10%', delay: 1, duration: 19, color: '#06b6d4', opacity: 0.05, shape: 'square' },
];

function FloatingShape({ shape }: { shape: typeof shapes[0] }) {
  const borderRadius = shape.shape === 'circle' ? '50%' : shape.shape === 'square' ? '12px' : '0';
  const clipPath = shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: shape.size,
        height: shape.size,
        left: shape.x,
        top: shape.y,
        borderRadius,
        clipPath,
        background: shape.color,
        opacity: shape.opacity,
        filter: 'blur(1px)',
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.1, 0.9, 1.05, 1],
      }}
      transition={{
        duration: shape.duration,
        delay: shape.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Balaji";
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacitySection = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // Delay typing until after preloader
    const preloaderDelay = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(true), 200);
        }
      }, 70);

      return () => clearInterval(interval);
    }, 1900);

    return () => clearTimeout(preloaderDelay);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Floating geometric shapes */}
      {shapes.map((shape, i) => (
        <FloatingShape key={i} shape={shape} />
      ))}

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-accent-glow), transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'var(--gradient-primary)' }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage: `linear-gradient(to right, var(--color-text-primary) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--color-text-primary) 1px, transparent 1px)`,
        }}
      />

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ opacity: opacitySection }}
        className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-24 pt-32"
      >
        {/* Text content */}
        <motion.div style={{ y: yText }} className="text-center lg:text-left max-w-2xl">
          {/* Status badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                boxShadow: 'var(--shadow-xs)',
              }}
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-sm)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span className="glow-dot" />
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Main heading with typing */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 min-h-[4rem]"
            style={{ color: 'var(--color-text-primary)', lineHeight: 1.1 }}
          >
            {text}
            {showCursor && (
              <span className="animate-blink" style={{ color: 'var(--color-accent)' }}>|</span>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl font-medium mb-4"
          >
            <span className="gradient-text-animated">
              ML Engineer &middot; GenAI/RAG &middot; Production Systems
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          >
            6+ years shipping production retrieval &amp; evaluation systems on AWS.
            Measurable gains in relevance, latency, and cost through evaluation-driven ML.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="/Balaji_Resume.pdf"
              download
              className="group magnetic-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-500"
              style={{
                background: 'var(--gradient-primary)',
                backgroundSize: '200% 200%',
                boxShadow: 'var(--shadow-md)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="/Balaji_CV.pdf"
              download
              className="group magnetic-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-500"
              style={{
                color: 'var(--color-text-primary)',
                border: '1.5px solid var(--color-border-strong)',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-xs)',
              }}
              whileHover={{ scale: 1.05, borderColor: 'var(--color-accent)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <ScrollText className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          variants={scaleIn}
          style={{ y: yImage }}
          className="relative flex-shrink-0"
        >
          {/* Animated gradient ring */}
          <motion.div
            className="absolute -inset-3 rounded-full"
            style={{ background: 'var(--gradient-primary)', backgroundSize: '200% 200%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          {/* Outer glow */}
          <motion.div
            className="absolute -inset-6 rounded-full blur-2xl"
            style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}
            animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Image container */}
          <div
            className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full p-1"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <img
              src="/profile.jpg"
              alt="Balaji Koneti"
              className="w-full h-full rounded-full object-cover"
              style={{ border: '4px solid var(--color-bg)' }}
            />
          </div>

        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--color-text-tertiary)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" style={{ color: 'var(--color-text-tertiary)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
