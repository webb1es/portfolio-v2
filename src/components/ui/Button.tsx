'use client';

import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { LinkProps } from 'next/link';

// Base button props without children
interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'fiery';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animated?: boolean;
  glowing?: boolean;
  className?: string;
}

// Button element props
type ButtonElementProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

// Anchor element props
type AnchorElementProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & {
  href: string;
};

// Combined props type
type ButtonProps = ButtonElementProps | AnchorElementProps;

export function Button(props: ButtonProps) {
  const {
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
    ...rest
  } = props;
  
  // Common classes for button styling
  const baseClasses = `
    inline-flex items-center justify-center font-medium relative
    transition-all duration-300 overflow-hidden
    ${fullWidth ? 'w-full' : ''}
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
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        {...(rest as Omit<AnchorElementProps, 'href' | 'className' | 'children'>)}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...(rest as Omit<ButtonElementProps, 'className' | 'children'>)}
    >
      {buttonContent}
    </button>
  );
}