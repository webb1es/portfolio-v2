'use client';

import { AnimatedElement } from '@/components/ui/AnimatedElement';

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-center mb-4">
            Services
          </h2>
        </AnimatedElement>
        
        <AnimatedElement delay={0.1}>
          <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-12">
            Specialized expertise to help you build, optimize, and scale your web applications.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service Card 1 */}
          <AnimatedElement delay={0.2} className="bg-surface rounded-lg border border-border hover:border-accent-primary transition-all hover:shadow-lg overflow-hidden">
            <div className="p-6">
              <AnimatedElement delay={0.3} className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                </svg>
              </AnimatedElement>
              
              <AnimatedElement delay={0.4} className="text-xl font-semibold mb-2">
                Custom Web Application Development
              </AnimatedElement>
              
              <AnimatedElement delay={0.5} className="text-foreground-secondary mb-4">
                Transform your business requirements into a custom web application that solves real problems for your users. I handle everything from architecture to deployment, ensuring your application is scalable, maintainable, and secure.
              </AnimatedElement>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">React</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">TypeScript</span>
              </div>

              <div className="flex items-center text-sm text-foreground-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Typical timeframe: 8-12 weeks</span>
              </div>
            </div>

            {/* Mini case study */}
            <div className="border-t border-border p-6 bg-background/50">
              <h4 className="font-medium text-sm uppercase text-foreground-secondary mb-2">Case Study</h4>
              <p className="text-sm mb-3">
                Built a custom CRM for a real estate agency that reduced their lead response time by 68% and increased conversions by 32%.
              </p>

              {/* Testimonial */}
              <div className="bg-surface p-3 rounded border border-border">
                <p className="text-sm italic text-foreground-secondary mb-2">
                  "The custom application Webster built for us completely transformed our business processes. It paid for itself within 3 months."
                </p>
                <p className="text-xs font-medium">— CEO, Real Estate Agency</p>
              </div>
            </div>
          </AnimatedElement>

          {/* Service Card 2 */}
          <AnimatedElement delay={0.3} className="bg-surface rounded-lg border border-border hover:border-accent-secondary transition-all hover:shadow-lg overflow-hidden">
            <div className="p-6">
              <AnimatedElement delay={0.4} className="w-12 h-12 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              </AnimatedElement>
              
              <AnimatedElement delay={0.5} className="text-xl font-semibold mb-2">
                Frontend Architecture & Development
              </AnimatedElement>
              
              <AnimatedElement delay={0.6} className="text-foreground-secondary mb-4">
                Get a modern, responsive frontend that delights your users and drives conversions. I build scalable frontend architectures that are easy to maintain and extend as your business grows.
              </AnimatedElement>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">React</span>
                <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">Redux</span>
                <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">Tailwind CSS</span>
              </div>

              <div className="flex items-center text-sm text-foreground-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Typical timeframe: 4-8 weeks</span>
              </div>
            </div>

            {/* Mini case study */}
            <div className="border-t border-border p-6 bg-background/50">
              <h4 className="font-medium text-sm uppercase text-foreground-secondary mb-2">Case Study</h4>
              <p className="text-sm mb-3">
                Redesigned the frontend for an e-commerce site, resulting in a 27% increase in conversion rate and 45% reduction in cart abandonment.
              </p>

              {/* Testimonial */}
              <div className="bg-surface p-3 rounded border border-border">
                <p className="text-sm italic text-foreground-secondary mb-2">
                  "Our customers love the new interface. It's faster, more intuitive, and has significantly improved our sales."
                </p>
                <p className="text-xs font-medium">— CTO, E-commerce Platform</p>
              </div>
            </div>
          </AnimatedElement>

          {/* Service Card 3 */}
          <AnimatedElement delay={0.4} className="bg-surface rounded-lg border border-border hover:border-accent-tertiary transition-all hover:shadow-lg overflow-hidden">
            <div className="p-6">
              <AnimatedElement delay={0.5} className="w-12 h-12 rounded-full bg-accent-tertiary/20 flex items-center justify-center text-accent-tertiary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </AnimatedElement>
              
              <AnimatedElement delay={0.6} className="text-xl font-semibold mb-2">
                Technical Consultation & Code Reviews
              </AnimatedElement>
              
              <AnimatedElement delay={0.7} className="text-foreground-secondary mb-4">
                Get expert guidance on your technical challenges. Whether you need help with architecture decisions, code quality improvements, or best practices implementation, I provide actionable insights that improve your codebase.
              </AnimatedElement>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Architecture</span>
                <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Code Quality</span>
                <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Best Practices</span>
                <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Security</span>
              </div>

              <div className="flex items-center text-sm text-foreground-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Typical timeframe: 1-2 weeks</span>
              </div>
            </div>

            {/* Mini case study */}
            <div className="border-t border-border p-6 bg-background/50">
              <h4 className="font-medium text-sm uppercase text-foreground-secondary mb-2">Case Study</h4>
              <p className="text-sm mb-3">
                Conducted a comprehensive code review for a fintech startup, identifying critical security vulnerabilities and performance bottlenecks before their launch.
              </p>

              {/* Testimonial */}
              <div className="bg-surface p-3 rounded border border-border">
                <p className="text-sm italic text-foreground-secondary mb-2">
                  "The issues Webster identified would have caused major problems down the line. His review saved us from a potential security breach."
                </p>
                <p className="text-xs font-medium">— CTO, Fintech Startup</p>
              </div>
            </div>
          </AnimatedElement>

          {/* Service Card 4 */}
          <AnimatedElement delay={0.5} className="bg-surface rounded-lg border border-border hover:border-accent-primary transition-all hover:shadow-lg overflow-hidden">
            <div className="p-6">
              <AnimatedElement delay={0.6} className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </AnimatedElement>
              
              <AnimatedElement delay={0.7} className="text-xl font-semibold mb-2">
                Application Performance Optimization
              </AnimatedElement>
              
              <AnimatedElement delay={0.8} className="text-foreground-secondary mb-4">
                Speed up your existing application and improve user experience. I identify and fix performance bottlenecks, optimize resource usage, and implement best practices to make your application lightning fast.
              </AnimatedElement>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Performance</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Optimization</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Lighthouse</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Core Web Vitals</span>
              </div>

              <div className="flex items-center text-sm text-foreground-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Typical timeframe: 2-4 weeks</span>
              </div>
            </div>

            {/* Mini case study */}
            <div className="border-t border-border p-6 bg-background/50">
              <h4 className="font-medium text-sm uppercase text-foreground-secondary mb-2">Case Study</h4>
              <p className="text-sm mb-3">
                Optimized a slow-loading SaaS dashboard, reducing load time by 73% and improving Core Web Vitals scores across all metrics.
              </p>

              {/* Testimonial */}
              <div className="bg-surface p-3 rounded border border-border">
                <p className="text-sm italic text-foreground-secondary mb-2">
                  "Our dashboard went from frustratingly slow to lightning fast. User complaints dropped to zero and engagement increased significantly."
                </p>
                <p className="text-xs font-medium">— Product Manager, SaaS Company</p>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Custom Project Option */}
        <AnimatedElement delay={0.6} className="bg-surface rounded-lg border border-border p-6 max-w-3xl mx-auto">
          <div className="flex items-center mb-4">
            <AnimatedElement delay={0.7} className="w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </AnimatedElement>
            <AnimatedElement delay={0.8} className="text-xl font-semibold ml-4">
              Custom Project
            </AnimatedElement>
          </div>

          <AnimatedElement delay={0.9} className="text-foreground-secondary mb-6">
            Have a unique project that doesn't fit neatly into the services above? I specialize in solving complex technical challenges and can work with you to create a custom solution tailored to your specific needs.
          </AnimatedElement>

          <AnimatedElement delay={1.0} className="flex justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Discuss Your Project
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </section>
  );
}
