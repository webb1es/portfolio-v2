'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { ServiceCarousel } from '@/components/ui/ServiceCarousel';
import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel';

export function ServicesSection() {
  const carouselOptions: EmblaOptionsType = {
    loop: false,
    align: 'center',
    dragFree: false,
    containScroll: 'keepSnaps',
    speed: 30,
    duration: 40,
    startIndex: 1
  };

  return (
    <section id="services" className="py-16 bg-surface/30">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-center mb-4">
            Services
          </h2>
        </AnimatedElement>
        
        <AnimatedElement delay={0.1}>
          <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-8">
            Specialized expertise to help you build, optimize, and scale your web applications.
          </p>
        </AnimatedElement>

        <ServiceCarousel options={carouselOptions} />
        
        <AnimatedElement delay={0.2} className="text-center mt-8">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all hover:scale-105"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </AnimatedElement>
      </div>
    </section>
  );
}
