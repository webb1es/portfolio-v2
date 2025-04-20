'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatedElement } from '../ui/AnimatedElement';
import { ServiceDescription } from '@/content/types';

export function ContactSection() {
  const [services, setServices] = useState<ServiceDescription[]>([]);
  
  useEffect(() => {
    // Load services from our content
    const { getAllServices } = require('@/content/services');
    setServices(getAllServices());
  }, []);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-4">
              Let&apos;s Work Together
            </h2>
          </AnimatedElement>
          
          <AnimatedElement delay={0.1}>
            <p className="text-foreground-secondary text-center mb-8">
              Have a project in mind? I&apos;m currently available for freelance work.
            </p>
          </AnimatedElement>
          
          {/* Services overview */}
          {services.length > 0 && (
            <AnimatedElement delay={0.2} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.slice(0, 4).map((service, index) => (
                  <div key={service.id} className="bg-surface border border-border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-foreground-secondary">
                      {/* Show first benefit */}
                      {service.benefits[0]}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          )}
          
          <AnimatedElement delay={0.3} className="bg-surface p-8 rounded-lg border border-border">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Ready to discuss your project?
              </h3>
              <p className="text-foreground-secondary mb-6">
                Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help you bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  Contact Me
                </Link>
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center bg-transparent border border-accent-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-primary/10 transition-colors"
                >
                  Schedule a Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h3>
                <a href="mailto:contact@example.com" className="text-accent-primary hover:underline">
                  contact@example.com
                </a>
                <p className="text-foreground-secondary text-sm mt-1">I typically respond within 24 hours</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Availability
                </h3>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span>Available for new projects</span>
                </div>
                <p className="text-foreground-secondary text-sm mt-1">Currently accepting new projects starting June 2024</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
