'use client';

import { useRef, useCallback } from 'react';

interface UseTiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export function useTilt({ maxTilt = 8, scale = 1.02, speed = 400 }: UseTiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      ref.current.style.transition = `transform ${speed * 0.1}ms ease`;
    },
    [maxTilt, scale, speed]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    ref.current.style.transition = `transform ${speed}ms ease`;
  }, [speed]);

  return { ref, handleMouseMove, handleMouseLeave };
}
