'use client';

import { useEffect, useState, useRef } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For direct DOM manipulation (faster than state updates)
    const glowElement = glowRef.current;
    
    // No throttling for better responsiveness
    const handleMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation for immediate response
      if (glowElement) {
        glowElement.style.left = `${e.clientX}px`;
        glowElement.style.top = `${e.clientY}px`;
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-0 transition-opacity duration-300"
      style={{
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: isVisible ? 0.18 : 0,
      }}
    >
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '650px', // Slightly increased for better fade-out
          height: '650px',
          transform: 'translate(-50%, -50%)',
          willChange: 'left, top',
          // Enhanced gradient with more natural fade-out
          background: 'radial-gradient(circle, rgba(131, 58, 180, 0.7) 0%, rgba(191, 43, 104, 0.4) 25%, rgba(253, 29, 29, 0.2) 50%, rgba(252, 176, 69, 0.05) 75%, rgba(252, 176, 69, 0) 90%)',
          borderRadius: '50%',
          WebkitBorderRadius: '50%',
          filter: 'blur(200px)', // Slightly increased blur for softer edges
          WebkitFilter: 'blur(200px)',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
          WebkitBackfaceVisibility: 'hidden',
          WebkitTransform: 'translate(-50%, -50%)',
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          mixBlendMode: 'plus-lighter',
        }}
      />
    </div>
  );
}