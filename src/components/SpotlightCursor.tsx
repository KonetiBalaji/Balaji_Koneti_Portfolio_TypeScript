'use client';

import { useEffect, useRef } from 'react';

export default function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        spotlight.style.opacity = '1';
        spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed top-0 left-0 z-30 hidden lg:block"
      style={{
        width: '600px',
        height: '600px',
        marginLeft: '-300px',
        marginTop: '-300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        willChange: 'transform',
      }}
    />
  );
}
