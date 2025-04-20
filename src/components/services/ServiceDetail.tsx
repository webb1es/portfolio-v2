'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ServiceDescription } from '@/content/types';
import { getServiceById, getRelevantTestimonials } from '@/content';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { StrategicTestimonial } from '@/components/ui/StrategicTestimonial';

interface ServiceDetailProps {
  serviceId: string;
}

export function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const [service, setService] = useState<ServiceDescription | null>(null);
  
  useEffect(() => {
    const serviceData = getServiceById(serviceId);
    if (serviceData) {
      setService(serviceData);
    }
  }, [serviceId]);
  
  if (!service) return null;
  
  return (
    <div className="py-8">
      <AnimatedElement>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h2>
      </AnimatedElement>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnimatedElement delay={0.1} className="bg-surface rounded-lg border border-border p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
            <p className="text-foreground-secondary mb-6">{service.problem}</p>
            
            <h3 className="text-xl font-semibold mb-4">My Approach</h3>
            <p className="text-foreground-secondary">{service.approach}</p>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2} className="bg-surface rounded-lg border border-border p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </AnimatedElement>
          
          <AnimatedElement delay={0.3} className="bg-surface rounded-lg border border-border p-6">
            <h3 className="text-xl font-semibold mb-4">Outcomes & Results</h3>
            <div className="space-y-3">
              {service.outcomes.map((outcome, index) => (
                <div 
                  key={index} 
                  className="bg-surface-secondary p-4 rounded-md border border-border"
                >
                  <p>{outcome}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
        
        <div>
          <AnimatedElement delay={0.4} className="bg-surface rounded-lg border border-border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-sm bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.5}>
            <StrategicTestimonial context={service.title} />
          </AnimatedElement>
          
          <AnimatedElement delay={0.6} className="mt-6">
            <div className="bg-surface rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-foreground-secondary mb-4">
                Let's discuss how I can help with your {service.title.toLowerCase()} needs.
              </p>
              <Link
                href="/contact"
                className="w-full bg-primary-gradient text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity text-center block"
              >
                Schedule a Consultation
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}