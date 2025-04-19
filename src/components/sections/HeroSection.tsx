'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

export function HeroSection() {
  // Animation state for gradient
  const [gradientPosition, setGradientPosition] = useState(0);

  // Refs for scroll animations
  const [subtitleRef, isSubtitleVisible] = useInView({ threshold: 0.1 });
  const [headingRef, isHeadingVisible] = useInView({ threshold: 0.1 });
  const [paragraphRef, isParagraphVisible] = useInView({ threshold: 0.1 });
  const [statusRef, isStatusVisible] = useInView({ threshold: 0.1 });
  const [ctaRef, isCtaVisible] = useInView({ threshold: 0.1 });

  // Subtle animation for gradient - using a slower interval to reduce potential glitching
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 100);
    }, 100); // Increased from 50ms to 100ms for smoother animation

    return () => clearInterval(interval);
  }, []);

  const gradientStyle = {
    backgroundSize: '200% 200%',
    backgroundPosition: `${gradientPosition}% ${gradientPosition}%`,
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background animation */}
      <div 
        className="absolute inset-0 bg-primary-gradient opacity-5 -z-10 blur-3xl"
        style={gradientStyle}
      ></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          {/* Professional subtitle */}
          <div 
            ref={subtitleRef} 
            className={`mb-4 inline-block animate-on-scroll ${isSubtitleVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="text-sm md:text-base font-medium px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary">
              Senior Software Engineer
            </span>
          </div>

          {/* Value proposition area */}
          <h1 
            ref={headingRef} 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll ${isHeadingVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="bg-clip-text text-transparent bg-primary-gradient animate-gradient">
              Solving Complex Technical Challenges
            </span>
          </h1>

          <p 
            ref={paragraphRef} 
            className={`text-xl md:text-2xl text-foreground-secondary mb-6 animate-on-scroll ${isParagraphVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            I transform business requirements into elegant, high-performance web applications that users love.
          </p>

          {/* Availability status */}
          <div 
            ref={statusRef} 
            className={`mb-8 inline-flex items-center px-4 py-2 rounded-md bg-surface border border-border animate-on-scroll ${isStatusVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-status-success"></span>
            </span>
            <span className="text-sm font-medium">Available for Projects</span>
            <span className="text-xs text-foreground-secondary ml-2">• Starting June 2024</span>
          </div>

          {/* CTA buttons */}
          <div 
            ref={ctaRef} 
            className={`flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-on-scroll ${isCtaVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <Link 
              href="/work" 
              className="bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all hover:scale-105 text-center"
            >
              See My Work
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border border-accent-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-primary/10 transition-all hover:scale-105 text-center"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
