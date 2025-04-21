'use client';

import { useState, useEffect } from 'react';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

export function TestimonialSection() {
  // State for testimonial carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Import testimonials from content
  const [strategicTestimonials, setStrategicTestimonials] = useState<{
    id: number | string;
    name: string;
    role: string;
    initials: string;
    color: string;
    content: string;
  }[]>([]);
  
  // Load testimonials from content
  useEffect(() => {
    const { getAllTestimonials } = require('@/content/testimonials');
    const contentTestimonials = getAllTestimonials();
    
    // Map to the expected format
    const formattedTestimonials = contentTestimonials.map((t: {
      id: number | string;
      isAnonymized: boolean;
      clientTitle: string;
      clientName: string;
      clientCompany?: string;
      focus: string;
      content: string;
    }) => {
      const colorMap: {[key: string]: string} = {
        'problem-solving': 'primary',
        'communication': 'secondary',
        'technical-expertise': 'tertiary',
        'outcomes': 'primary',
        'relationship': 'secondary'
      };
      
      return {
        id: t.id,
        name: t.isAnonymized ? t.clientTitle : t.clientName,
        role: t.isAnonymized ? '' : `${t.clientTitle}${t.clientCompany ? `, ${t.clientCompany}` : ''}`,
        initials: t.isAnonymized ? 'CL' : t.clientName.split(' ').map((n: string) => n[0]).join(''),
        color: colorMap[t.focus] || 'primary',
        content: t.content.length > 200 ? `${t.content.substring(0, 200)}...` : t.content
      };
    });
    
    setStrategicTestimonials(formattedTestimonials);
  }, []);
  
  // Use the loaded testimonials or fallback to defaults if not loaded yet
  const testimonials = strategicTestimonials.length > 0 ? strategicTestimonials : [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO, FinTech Innovators",
      initials: "SC",
      color: "primary",
      content: "Webster's technical expertise is matched only by his ability to communicate complex concepts clearly. He delivered our platform ahead of schedule and exceeded our performance requirements."
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CEO, E-commerce Solutions",
      initials: "MR",
      color: "secondary",
      content: "Working with Webster transformed our online store. He identified critical performance issues that were hurting our conversion rates and implemented solutions that increased our sales by 42%."
    },
    {
      id: 3,
      name: "Aisha Johnson",
      role: "Product Director, SaaS Platform",
      initials: "AJ",
      color: "tertiary",
      content: "I've worked with many developers, but Webster stands out for his problem-solving abilities. He doesn't just write code—he finds elegant solutions to business problems."
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder, Health Tech Startup",
      initials: "DP",
      color: "primary",
      content: "Webster helped us navigate complex regulatory requirements while building a user-friendly interface. His attention to detail and security expertise were invaluable for our healthcare application."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setProgress(0); // Reset progress when changing testimonial
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Update progress bar
  useEffect(() => {
    const intervalTime = 50; // Update every 50ms for smooth animation
    const totalTime = 5000; // Total time for each testimonial (5 seconds)
    const increment = (intervalTime / totalTime) * 100; // Calculate progress increment

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + increment;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [activeIndex]);

  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress when manually changing testimonial
  };

  // Get color class based on color prop
  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-accent-primary/20 text-accent-primary';
      case 'secondary': return 'bg-accent-secondary/20 text-accent-secondary';
      case 'tertiary': return 'bg-accent-tertiary/20 text-accent-tertiary';
      default: return 'bg-accent-primary/20 text-accent-primary';
    }
  };

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-center mb-6">
            What Clients Say
          </h2>
        </AnimatedElement>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatedElement delay={0.1} className="relative bg-surface p-8 rounded-lg shadow-md border border-border transition-all duration-300">
            {/* Quote icon */}
            <AnimatedElement delay={0.2} className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </AnimatedElement>

            <div className="mb-6">
              <p className="text-xl italic text-foreground transition-opacity duration-300" key={activeIndex}>
                "{testimonials[activeIndex].content}"
              </p>
            </div>

            <div className="flex items-center transition-opacity duration-300" key={`author-${activeIndex}`}>
              <div className={`w-12 h-12 rounded-full ${getColorClass(testimonials[activeIndex].color)} flex items-center justify-center font-bold text-xl`}>
                {testimonials[activeIndex].initials}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">{testimonials[activeIndex].name}</h3>
                <p className="text-sm text-foreground-secondary">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6 mb-4 h-1 bg-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent-primary transition-all duration-300 ease-linear"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>

            {/* Testimonial counter */}
            <div className="flex justify-between items-center mb-4 text-sm text-foreground-secondary">
              <span>Testimonial {activeIndex + 1} of {testimonials.length}</span>
              <span>{Math.ceil((100 - progress) / 20)}s until next</span>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-accent-primary scale-125' : 'bg-border hover:bg-accent-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedElement>
        </div>

        {/* Client Logos */}
        <AnimatedElement delay={0.3} className="mb-16">
          <h3 className="text-center text-lg font-medium mb-8">Trusted by Companies Like</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* These would be actual logos in a real implementation */}
            <AnimatedElement delay={0.4} className="h-12 w-32 bg-surface rounded-md flex items-center justify-center border border-border transition-all hover:shadow-md hover:border-accent-primary">
              <span className="text-foreground-secondary font-medium">TechCorp</span>
            </AnimatedElement>
            <AnimatedElement delay={0.5} className="h-12 w-32 bg-surface rounded-md flex items-center justify-center border border-border transition-all hover:shadow-md hover:border-accent-secondary">
              <span className="text-foreground-secondary font-medium">FinanceAI</span>
            </AnimatedElement>
            <AnimatedElement delay={0.6} className="h-12 w-32 bg-surface rounded-md flex items-center justify-center border border-border transition-all hover:shadow-md hover:border-accent-tertiary">
              <span className="text-foreground-secondary font-medium">HealthPlus</span>
            </AnimatedElement>
            <AnimatedElement delay={0.7} className="h-12 w-32 bg-surface rounded-md flex items-center justify-center border border-border transition-all hover:shadow-md hover:border-accent-primary">
              <span className="text-foreground-secondary font-medium">EduTech</span>
            </AnimatedElement>
          </div>
        </AnimatedElement>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <AnimatedElement delay={0.8} className="bg-surface p-6 rounded-lg border border-border text-center transition-all hover:shadow-md hover:border-accent-primary">
            <AnimatedElement delay={0.9} className="text-3xl font-bold text-accent-primary mb-2">50+</AnimatedElement>
            <div className="text-sm text-foreground-secondary">Projects Completed</div>
          </AnimatedElement>
          <AnimatedElement delay={0.9} className="bg-surface p-6 rounded-lg border border-border text-center transition-all hover:shadow-md hover:border-accent-secondary">
            <AnimatedElement delay={1.0} className="text-3xl font-bold text-accent-secondary mb-2">8+</AnimatedElement>
            <div className="text-sm text-foreground-secondary">Years Experience</div>
          </AnimatedElement>
          <AnimatedElement delay={1.0} className="bg-surface p-6 rounded-lg border border-border text-center transition-all hover:shadow-md hover:border-accent-tertiary">
            <AnimatedElement delay={1.1} className="text-3xl font-bold text-accent-tertiary mb-2">98%</AnimatedElement>
            <div className="text-sm text-foreground-secondary">Client Satisfaction</div>
          </AnimatedElement>
          <AnimatedElement delay={1.1} className="bg-surface p-6 rounded-lg border border-border text-center transition-all hover:shadow-md hover:border-accent-primary">
            <AnimatedElement delay={1.2} className="text-3xl font-bold text-accent-primary mb-2">24h</AnimatedElement>
            <div className="text-sm text-foreground-secondary">Response Time</div>
          </AnimatedElement>
        </div>

        {/* Process Explanation */}
        <AnimatedElement delay={1.2} className="max-w-4xl mx-auto">
          <h3 className="text-center text-xl font-semibold mb-8">My Simple Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <AnimatedElement delay={1.3} className="relative">
              <div className="bg-surface p-6 rounded-lg border border-border text-center h-full transition-all hover:shadow-md hover:border-accent-primary">
                <AnimatedElement delay={1.4} className="w-12 h-12 rounded-full bg-primary-gradient text-white flex items-center justify-center mx-auto mb-4 font-bold">1</AnimatedElement>
                <h4 className="font-medium mb-2">Discovery</h4>
                <p className="text-sm text-foreground-secondary">Understanding your business needs and project requirements</p>
              </div>
              {/* Connector line - visible on desktop only */}
              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
            </AnimatedElement>

            <AnimatedElement delay={1.4} className="relative">
              <div className="bg-surface p-6 rounded-lg border border-border text-center h-full transition-all hover:shadow-md hover:border-accent-secondary">
                <AnimatedElement delay={1.5} className="w-12 h-12 rounded-full bg-primary-gradient text-white flex items-center justify-center mx-auto mb-4 font-bold">2</AnimatedElement>
                <h4 className="font-medium mb-2">Proposal</h4>
                <p className="text-sm text-foreground-secondary">Detailed plan with timeline, deliverables, and pricing</p>
              </div>
              {/* Connector lines - visible on desktop only */}
              <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-0.5 bg-border"></div>
              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
            </AnimatedElement>

            <AnimatedElement delay={1.5} className="relative">
              <div className="bg-surface p-6 rounded-lg border border-border text-center h-full transition-all hover:shadow-md hover:border-accent-tertiary">
                <AnimatedElement delay={1.6} className="w-12 h-12 rounded-full bg-primary-gradient text-white flex items-center justify-center mx-auto mb-4 font-bold">3</AnimatedElement>
                <h4 className="font-medium mb-2">Development</h4>
                <p className="text-sm text-foreground-secondary">Iterative building with regular updates and feedback</p>
              </div>
              {/* Connector lines - visible on desktop only */}
              <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-0.5 bg-border"></div>
              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
            </AnimatedElement>

            <AnimatedElement delay={1.6} className="relative">
              <div className="bg-surface p-6 rounded-lg border border-border text-center h-full transition-all hover:shadow-md hover:border-accent-primary">
                <AnimatedElement delay={1.7} className="w-12 h-12 rounded-full bg-primary-gradient text-white flex items-center justify-center mx-auto mb-4 font-bold">4</AnimatedElement>
                <h4 className="font-medium mb-2">Delivery</h4>
                <p className="text-sm text-foreground-secondary">Final testing, deployment, and ongoing support options</p>
              </div>
              {/* Connector line - visible on desktop only */}
              <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-0.5 bg-border"></div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
