'use client';

import { ReactNode, ButtonHTMLAttributes, useState } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'fiery';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animated?: boolean;
  glowing?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  icon,
  iconPosition = 'right',
  animated = false,
  glowing = false,
  ...props
}: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    props.onClick?.(e);
  };

  // Common classes for button styling
  const baseClasses = `
    inline-flex items-center justify-center font-medium relative
    transition-all duration-300 overflow-hidden
    ${fullWidth ? 'w-full' : ''}
    ${isClicked ? 'animate-click' : ''}
  `;

  // Size-specific classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-md',
    md: 'text-sm px-4 py-2 rounded-md',
    lg: 'text-base px-6 py-3 rounded-lg',
  };

  // Variant-specific classes
  const variantClasses = {
    primary: `bg-primary-gradient text-white ${glowing ? 'animate-glow' : ''} hover:opacity-90`,
    secondary: `bg-secondary-gradient text-white ${glowing ? 'animate-glow' : ''} hover:opacity-90`,
    outline: 'border-gradient bg-surface text-foreground hover:bg-surface-hover',
    ghost: 'bg-transparent text-foreground hover:bg-surface-hover',
    link: 'bg-transparent text-accent-primary hover:underline p-0 rounded-none',
    fiery: `bg-fiery-gradient-animated text-white ${glowing ? 'animate-glow' : ''} hover:opacity-90`,
  };

  // Animation class
  const animationClass = animated ? 'btn-sheen' : '';

  // Combined classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${animationClass}
    ${className}
  `;

  // Button content with icon positioning
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      
      {/* Gradient shimmer effect (only visible on hover) */}
      {animated && (
        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transform-gpu transition-transform duration-1000 group-hover:translate-x-full"></span>
      )}
    </>
  );

  // Return either a Link or Button component
  return href ? (
    <Link
      href={href}
      className={buttonClasses}
      {...(props as any)}
    >
      {buttonContent}
    </Link>
  ) : (
    <button
      className={buttonClasses}
      onClick={handleClick}
      {...props}
    >
      {buttonContent}
    </button>
  );
}