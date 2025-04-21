'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Debounce the mouse move for better performance
    let lastTime = 0;
    const throttleMs = 10; // Lower value means more responsive but more CPU intensive
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;
      
      setPosition({ x: e.clientX, y: e.clientY });
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
      className="fixed pointer-events-none z-0 opacity-30 transition-opacity duration-500"
      style={{
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: isVisible ? 0.12 : 0,
      }}
    >
      <div
        className="absolute rounded-full bg-primary-gradient blur-[100px]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '350px',
          height: '350px',
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.2s linear, top 0.2s linear',
          willChange: 'left, top',
        }}
      />
    </div>
  );
}