'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'highlight';
  className?: string;
}

export function GradientText({ 
  children, 
  variant = 'primary', 
  className = '' 
}: GradientTextProps) {
  const gradientClass = 
    variant === 'primary' ? 'text-primary-gradient' :
    variant === 'secondary' ? 'text-secondary-gradient' : 
    'text-highlight-gradient';

  return (
    <span className={`${gradientClass} ${className}`}>
      {children}
    </span>
  );
}