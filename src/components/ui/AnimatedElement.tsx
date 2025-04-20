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
  const [ref, isInView] = useInView({ threshold, triggerOnce: true });

  // Limit max delay to create snappier animations
  const safeDelay = Math.min(delay, 0.2);
  
  return (
    <div 
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: safeDelay ? `${safeDelay}s` : undefined }}
    >
      {children}
    </div>
  );
}
