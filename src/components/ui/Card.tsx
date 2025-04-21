'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Handle mouse movement for glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    if (cardRef.current) {
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
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

  // Mouse event handlers for interactive cards
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Wrap with Link if href is provided
  if (href) {
    return (
      <Link 
        href={href}
        className={cardStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={cardRef as any}
      >
        {children}
      </Link>
    );
  }

  // Regular card
  return (
    <div 
      className={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
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
}: { 
  children: ReactNode; 
  className?: string;
  variant?: 'default' | 'gradient' | 'outline';
}) {
  const variantStyles = {
    default: 'bg-accent-primary/10 text-accent-primary',
    gradient: 'badge-gradient',
    outline: 'bg-transparent border border-accent-primary text-accent-primary',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}