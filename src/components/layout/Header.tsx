'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Webbies
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground hover:text-accent-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-foreground hover:text-accent-primary transition-colors">
            Services
          </Link>
          <Link href="/work" className="text-foreground hover:text-accent-primary transition-colors">
            Work
          </Link>
          <Link href="/blog" className="text-foreground hover:text-accent-primary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-foreground hover:text-accent-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Available for Hire Status */}
          <div className="hidden md:flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-status-success"></span>
            </span>
            <span className="text-sm font-medium">Available for Hire</span>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact"
            className="hidden md:block bg-primary-gradient text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-foreground hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-foreground hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/work" 
              className="text-foreground hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/blog" 
              className="text-foreground hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Available for Hire Status (Mobile) */}
            <div className="flex items-center py-2">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-status-success"></span>
              </span>
              <span className="text-sm font-medium">Available for Hire</span>
            </div>
            
            {/* CTA Button (Mobile) */}
            <Link 
              href="/contact"
              className="bg-primary-gradient text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
