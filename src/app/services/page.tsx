'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { BiographySection } from '@/components/sections/BiographySection';
import { StrategicTestimonial } from '@/components/ui/StrategicTestimonial';
import { ContentAwareCTA } from '@/components/ui/ContentAwareCTA';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardBadge } from '@/components/ui/Card';
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-accent-primary">Services</h1>
        </AnimatedElement>
        
        <AnimatedElement delay={0.05}>
          <p className="text-foreground-secondary text-center max-w-3xl mx-auto mb-12">
            I specialize in solving complex technical challenges and delivering solutions that drive real business results.
            Explore my services below to see how I can help your business.
          </p>
        </AnimatedElement>
        
        {/* Service tabs */}
        <AnimatedElement delay={0.1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {services.map((service, index) => (
              <Button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                variant={activeService === service.id ? 'fiery' : 'outline'}
                size="md"
                className="font-medium"
                animated={activeService === service.id}
              >
                {service.title}
              </Button>
            ))}
          </div>
        </AnimatedElement>
        
        {/* Active service detail - simplified animations for better perceived performance */}
        {getActiveService() && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <AnimatedElement delay={0.1}>
                <Card variant="default" gradientBorder className="mb-6 card-glow">
                  <CardContent>
                    <h2 className="text-2xl font-bold mb-4 text-accent-primary">{getActiveService()?.title}</h2>
                    <h3 className="text-xl font-semibold mb-4 text-accent-secondary">The Challenge</h3>
                    <p className="text-foreground-secondary mb-6">{getActiveService()?.problem}</p>
                    
                    <h3 className="text-xl font-semibold mb-4 text-accent-secondary">My Approach</h3>
                    <p className="text-foreground-secondary">{getActiveService()?.approach}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
              
              {/* Key Benefits section */}
              <Card variant="default" className="mb-6 card-glow">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4 text-accent-secondary">Key Benefits</h3>
                  <ul className="space-y-3">
                    {getActiveService()?.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent-primary mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 mt-0.5 animate-pulse-subtle">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Real Results section */}
              <Card variant="default" className="mb-6 card-glow">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4 text-accent-secondary">Real Results</h3>
                  <div className="space-y-4">
                    {getActiveService()?.outcomes.map((outcome, index) => (
                      <Card
                        key={index}
                        variant="minimal"
                        className="bg-surface-secondary p-4 border border-border hover:border-accent-primary transition-colors duration-300"
                      >
                        <CardContent className="p-0">
                          <p>{outcome}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              {/* Technologies section */}
              <AnimatedElement delay={0.15}>
                <Card variant="default" className="mb-6 card-glow">
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-4 text-accent-secondary">Technologies & Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {getActiveService()?.technologies.map((tech, index) => (
                        <CardBadge 
                          key={index}
                          variant="gradient"
                          className="animate-float"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </CardBadge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              
              {/* Testimonial - strategic animation here */}
              <AnimatedElement delay={0.2}>
                <StrategicTestimonial context={getActiveService()?.title || ''} />
              </AnimatedElement>
              
              {/* CTA box */}
              <AnimatedElement delay={0.25}>
                <Card variant="default" className="mt-6 card-gradient-border">
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-4 text-accent-secondary">Ready to Get Started?</h3>
                    <p className="text-foreground-secondary mb-4">
                      Let's discuss how I can help with your specific needs and create a tailored solution for your business.
                    </p>
                    <Button
                      href="/contact"
                      variant="fiery"
                      size="lg"
                      fullWidth
                      animated
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      }
                    >
                      Schedule a Consultation
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        )}
        
        {/* Custom projects section - keep animation here as it's a key conversion element */}
        <AnimatedElement delay={0.1}>
          <Card variant="default" gradientBorder className="card-glow p-8 max-w-3xl mx-auto mb-16">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-fiery-gradient-animated flex items-center justify-center text-white mr-4 animate-float shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-accent-primary">Need Something Custom?</h3>
              </div>
              
              <p className="text-foreground-secondary mb-6">
                Have a project that doesn't fit neatly into these categories? I specialize in solving unique technical challenges and can work with you to create a custom solution tailored to your specific business needs.
              </p>
              
              <Card variant="elevated" className="mb-6">
                <CardContent>
                  <h4 className="font-semibold mb-2 text-accent-secondary">My custom project process:</h4>
                  <ol className="space-y-2 ml-6 list-decimal">
                    <li>In-depth discovery to understand your unique requirements</li>
                    <li>Collaborative solution design with clear deliverables</li>
                    <li>Transparent pricing and timeline estimates</li>
                    <li>Regular updates and demos throughout development</li>
                    <li>Knowledge transfer and support after launch</li>
                  </ol>
                </CardContent>
              </Card>
              
              <div className="flex justify-center">
                <Button 
                  href="/contact"
                  variant="fiery"
                  size="lg"
                  animated
                  glowing
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  }
                >
                  Discuss Your Custom Project
                </Button>
              </div>
            </CardContent>
          </Card>
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