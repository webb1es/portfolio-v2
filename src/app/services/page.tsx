'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { BiographySection } from '@/components/sections/BiographySection';
import { StrategicTestimonial } from '@/components/ui/StrategicTestimonial';
import { ContentAwareCTA } from '@/components/ui/ContentAwareCTA';
import { ServiceDescription } from '@/content/types';

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceDescription[]>([]);
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    // Load services from content
    const { getAllServices } = require('@/content/services');
    const serviceData = getAllServices();
    setServices(serviceData);
    
    // Set the first service as active by default
    if (serviceData.length > 0 && !activeService) {
      setActiveService(serviceData[0].id);
    }
  }, [activeService]);

  const getActiveService = () => {
    if (!activeService || !services.length) return null;
    return services.find(service => service.id === activeService) || null;
  };

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Services</h1>
        </AnimatedElement>
        
        <AnimatedElement delay={0.1}>
          <p className="text-foreground-secondary text-center max-w-3xl mx-auto mb-12">
            I specialize in solving complex technical challenges and delivering solutions that drive real business results.
            Explore my services below to see how I can help your business.
          </p>
        </AnimatedElement>
        
        {/* Service tabs */}
        <AnimatedElement delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeService === service.id 
                    ? 'bg-accent-primary text-white' 
                    : 'bg-surface hover:bg-accent-primary/10 border border-border'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </AnimatedElement>
        
        {/* Active service detail */}
        {getActiveService() && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <AnimatedElement delay={0.3} className="bg-surface rounded-lg border border-border p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">{getActiveService()?.title}</h2>
                <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                <p className="text-foreground-secondary mb-6">{getActiveService()?.problem}</p>
                
                <h3 className="text-xl font-semibold mb-4">My Approach</h3>
                <p className="text-foreground-secondary">{getActiveService()?.approach}</p>
              </AnimatedElement>
              
              <AnimatedElement delay={0.4} className="bg-surface rounded-lg border border-border p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {getActiveService()?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
              
              <AnimatedElement delay={0.5} className="bg-surface rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold mb-4">Real Results</h3>
                <div className="space-y-3">
                  {getActiveService()?.outcomes.map((outcome, index) => (
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
              <AnimatedElement delay={0.6} className="bg-surface rounded-lg border border-border p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {getActiveService()?.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={0.7}>
                <StrategicTestimonial context={getActiveService()?.title || ''} />
              </AnimatedElement>
              
              <AnimatedElement delay={0.8} className="mt-6">
                <div className="bg-surface rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="text-foreground-secondary mb-4">
                    Let's discuss how I can help with your specific needs and create a tailored solution for your business.
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
        )}
        
        {/* Custom projects section */}
        <AnimatedElement delay={0.9} className="bg-surface rounded-lg border border-border p-8 max-w-3xl mx-auto mb-16">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 rounded-full bg-primary-gradient flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Need Something Custom?</h3>
          </div>
          
          <p className="text-foreground-secondary mb-6">
            Have a project that doesn't fit neatly into these categories? I specialize in solving unique technical challenges and can work with you to create a custom solution tailored to your specific business needs.
          </p>
          
          <div className="bg-surface-secondary p-5 rounded-lg border border-border mb-6">
            <h4 className="font-semibold mb-2">My custom project process:</h4>
            <ol className="space-y-2 ml-6 list-decimal">
              <li>In-depth discovery to understand your unique requirements</li>
              <li>Collaborative solution design with clear deliverables</li>
              <li>Transparent pricing and timeline estimates</li>
              <li>Regular updates and demos throughout development</li>
              <li>Knowledge transfer and support after launch</li>
            </ol>
          </div>
          
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Discuss Your Custom Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimatedElement>
        
        {/* Bio section with consultation focus */}
        <BiographySection variant="about" focusArea="consulting and collaboration" />
        
        {/* CTA with context-aware recommendations */}
        <ContentAwareCTA 
          context="services technical consulting" 
          title="Ready to Transform Your Project?"
          description="Let's work together to solve your technical challenges and build solutions that deliver real business value."
        />
      </div>
    </div>
  );
}