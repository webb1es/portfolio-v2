'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);
  
  // Initialize theme from localStorage on client side
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Default to system if no theme is stored
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      document.documentElement.classList.add(initialTheme);
      document.documentElement.classList.remove(initialTheme === 'dark' ? 'light' : 'dark');
    }
  }, []);

  // Apply theme class when theme changes
  useEffect(() => {
    if (!mounted) return;

    // Remove both theme classes first
    document.documentElement.classList.remove('light', 'dark');
    
    let effectiveTheme: 'dark' | 'light';
    
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      // Don't store system preference in localStorage
    } else {
      effectiveTheme = theme;
      localStorage.setItem('theme', theme);
    }
    
    // Add the effective theme class
    document.documentElement.classList.add(effectiveTheme);
    
    // Update CSS variable for RBG values needed for animations
    const root = document.documentElement;
    if (effectiveTheme === 'dark') {
      root.style.setProperty('--accent-primary-rgb', '131, 58, 180'); // Instagram Purple in RGB
    } else {
      root.style.setProperty('--accent-primary-rgb', '131, 58, 180'); // Instagram Purple in RGB
    }
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(systemTheme);
        
        // Update CSS variable for RBG values
        const root = document.documentElement;
        if (systemTheme === 'dark') {
          root.style.setProperty('--accent-primary-rgb', '131, 58, 180'); // Instagram Purple in RGB
        } else {
          root.style.setProperty('--accent-primary-rgb', '131, 58, 180'); // Instagram Purple in RGB
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
