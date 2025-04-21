'use client';

import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  if (!mounted) {
    // Use a placeholder of the same size during SSR
    return (
      <button
        aria-label="Toggle theme"
        className="relative p-2 rounded-full overflow-hidden transition-all duration-300 
                  bg-surface hover:bg-surface-hover border border-border
                  focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50"
      >
        <div className="w-5 h-5"></div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full overflow-hidden transition-all duration-300 
                bg-surface hover:bg-surface-hover border border-border hover:border-accent-primary
                focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50
                card-glow"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative z-10">
        {theme === 'dark' ? (
          // Sun icon for dark mode (clicking switches to light)
          <div className="relative">
            <div className="w-5 h-5 bg-fiery-gradient rounded-full shadow-[0_0_10px_rgba(var(--accent-primary-rgb),0.5)]"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white absolute inset-0"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>
        ) : (
          // Moon icon for light mode (clicking switches to dark)
          <div className="relative">
            <div className="w-5 h-5 bg-surface border border-accent-primary/40 rounded-full shadow-[0_0_10px_rgba(var(--accent-primary-rgb),0.3)]"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-accent-primary absolute inset-0"
            >
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Subtle glow background */}
      <span className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
}
