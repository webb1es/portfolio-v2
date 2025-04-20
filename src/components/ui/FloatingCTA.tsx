'use client';

import { useState, useEffect } from 'react';
import { StrategicCTA } from './StrategicCTA';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show floating CTA after user has scrolled 70% of viewport height
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.7;
      
      setIsVisible(scrollPosition > threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Only show on mobile and tablet
  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
    return null;
  }
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <div className="md:hidden">
      <StrategicCTA 
        type="floating"
        text="Schedule a Call"
        href="/contact"
        withIcon={true}
        location="floating-mobile"
      />
    </div>
  );
}