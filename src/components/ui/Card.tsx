'use client';

import { ReactNode, useRef, useState } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'outlined' | 'elevated' | 'minimal' | 'glass';
  href?: string;
  interactive?: boolean;
  hoverEffect?: 'glow' | 'raise' | 'scale' | 'border' | 'none';
  gradientBorder?: boolean;
  glassEffect?: boolean;
}

export function Card({
  children,
  className = '',
  variant = 'default',
  href,
  interactive = true,
  hoverEffect = 'glow',
  gradientBorder = false,
  glassEffect = false,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Handle mouse movement for glow effect - make it generic to work with both div and anchor elements
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  // Base styles for all cards
  const baseStyles = `
    rounded-lg 
    overflow-hidden 
    transition-all duration-300
  `;

  // Variant-specific styles
  const variantStyles = {
    default: 'bg-surface border border-border',
    gradient: 'bg-primary-gradient text-white',
    outlined: 'bg-surface border-2 border-accent-primary/20',
    elevated: 'bg-surface border border-border shadow-xl',
    minimal: 'bg-transparent',
    glass: 'card-glass backdrop-blur-md'
  };

  // Hover effects
  const getHoverStyles = () => {
    if (!interactive) return '';

    switch (hoverEffect) {
      case 'glow':
        return 'card-glow hover:shadow-lg hover:shadow-accent-primary/10';
      case 'raise':
        return 'hover:-translate-y-2';
      case 'scale':
        return 'hover:scale-[1.02] origin-center';
      case 'border':
        return 'hover:border-accent-primary';
      default:
        return '';
    }
  };

  // Combined styles with glassy effect if enabled
  const cardStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${getHoverStyles()}
    ${gradientBorder ? 'card-gradient-border' : ''}
    ${glassEffect ? 'card-glass' : ''}
    ${className}
  `;

  // Wrap with Link if href is provided
  if (href) {
    return (
      <Link 
        href={href}
        className={cardStyles}
        onMouseMove={handleMouseMove}
        ref={cardRef as unknown as React.Ref<HTMLAnchorElement>}
      >
        {interactive && hoverEffect === 'glow' && (
          <div className="glow-container">
            <div className="glow-effect"></div>
          </div>
        )}
        {children}
      </Link>
    );
  }

  // Regular card
  return (
    <div 
      className={cardStyles}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      {interactive && hoverEffect === 'glow' && (
        <div className="glow-container">
          <div className="glow-effect"></div>
        </div>
      )}
      {children}
    </div>
  );
}

// Card subcomponents
export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 border-b border-border ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-foreground-secondary mt-1 text-sm ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export function CardBadge({ 
  children, 
  className = '',
  variant = 'default',
  style,
}: { 
  children: ReactNode; 
  className?: string;
  variant?: 'default' | 'gradient' | 'outline';
  style?: React.CSSProperties;
}) {
  const variantStyles = {
    default: 'bg-accent-primary/10 text-accent-primary',
    gradient: 'badge-gradient',
    outline: 'bg-transparent border border-accent-primary text-accent-primary',
  };

  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}