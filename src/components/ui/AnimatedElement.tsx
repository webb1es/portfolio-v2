'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

export function AnimatedElement({ 
  children, 
  delay = 0, 
  threshold = 0.1,
  className = ''
}: AnimatedElementProps) {
  const [ref, isInView] = useInView({ threshold });

  return (
    <div 
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
