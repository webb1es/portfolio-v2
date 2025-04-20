'use client';

import { useEffect, useState } from 'react';
import { Testimonial } from '@/content/types';
import { getRelevantTestimonials } from '@/content';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface StrategicTestimonialProps {
  context: string;
  style?: 'standard' | 'compact' | 'feature';
  showTitle?: boolean;
}

export function StrategicTestimonial({ 
  context, 
  style = 'standard', 
  showTitle = true 
}: StrategicTestimonialProps) {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  
  useEffect(() => {
    const testimonials = getRelevantTestimonials(context, 1);
    if (testimonials.length > 0) {
      setTestimonial(testimonials[0]);
    }
  }, [context]);
  
  if (!testimonial) return null;
  
  if (style === 'compact') {
    return (
      <div className="bg-surface p-4 rounded-lg border border-border mb-4">
        <p className="text-sm italic text-foreground-secondary mb-2">
          "{testimonial.content.length > 150 
            ? `${testimonial.content.substring(0, 150)}...` 
            : testimonial.content}"
        </p>
        <p className="text-xs font-medium">
          {testimonial.isAnonymized
            ? `— ${testimonial.clientTitle || 'Client'}`
            : `— ${testimonial.clientName}, ${testimonial.clientTitle}`}
          {testimonial.clientCompany && !testimonial.isAnonymized && `, ${testimonial.clientCompany}`}
        </p>
      </div>
    );
  }
  
  if (style === 'feature') {
    return (
      <section className="py-16 bg-surface-secondary">
        <div className="container mx-auto px-4">
          {showTitle && (
            <AnimatedElement>
              <h2 className="text-3xl font-bold mb-10 text-center">Client Testimonials</h2>
            </AnimatedElement>
          )}
          
          <AnimatedElement delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-surface p-8 rounded-lg border border-border shadow-md">
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-primary-gradient text-white text-2xl font-semibold">
                    {testimonial.clientName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {testimonial.isAnonymized ? 'Client Testimonial' : testimonial.clientName}
                    </h3>
                    <p className="text-foreground-secondary">
                      {testimonial.clientTitle}
                      {testimonial.clientCompany && !testimonial.isAnonymized && `, ${testimonial.clientCompany}`}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="absolute -top-4 -left-2 w-10 h-10 text-accent-primary/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z" />
                  </svg>
                  
                  <div className="text-lg md:text-xl text-foreground leading-relaxed pl-6">
                    {testimonial.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                
                {testimonial.projectType && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-foreground-secondary">
                      <span className="font-medium">Project Type:</span> {testimonial.projectType}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    );
  }
  
  // Default 'standard' style
  return (
    <div className="bg-surface p-6 rounded-lg border border-border">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-gradient text-white text-lg font-semibold mr-4">
          {testimonial.clientName.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold">
            {testimonial.isAnonymized ? 'Client Testimonial' : testimonial.clientName}
          </h3>
          <p className="text-sm text-foreground-secondary">
            {testimonial.clientTitle}
            {testimonial.clientCompany && !testimonial.isAnonymized && `, ${testimonial.clientCompany}`}
          </p>
        </div>
      </div>
      
      <p className="text-foreground-secondary italic mb-3">
        "{testimonial.content.length > 240 
          ? `${testimonial.content.substring(0, 240)}...` 
          : testimonial.content}"
      </p>
      
      {testimonial.projectType && (
        <p className="text-xs text-foreground-secondary">
          <span className="font-medium">Project Type:</span> {testimonial.projectType}
        </p>
      )}
    </div>
  );
}