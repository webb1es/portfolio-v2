import Link from 'next/link';
import Image from 'next/image';

export function WorkSection() {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Featured Work
        </h2>
        <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-12">
          A selection of recent projects that showcase my expertise and approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 - Placeholder */}
          <div className="bg-surface rounded-lg overflow-hidden border border-border group hover:border-accent-primary transition-colors">
            <div className="relative h-48 bg-accent-primary/10">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-accent-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Platform Redesign</h3>
              <p className="text-foreground-secondary mb-4">
                Redesigned and optimized an e-commerce platform to improve user experience and conversion rates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">React</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Tailwind CSS</span>
              </div>
              <Link 
                href="/work/ecommerce-platform" 
                className="text-accent-primary font-medium hover:underline inline-flex items-center"
              >
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Project Card 2 - Placeholder */}
          <div className="bg-surface rounded-lg overflow-hidden border border-border group hover:border-accent-secondary transition-colors">
            <div className="relative h-48 bg-accent-secondary/10">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-accent-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Real-time Data Dashboard</h3>
              <p className="text-foreground-secondary mb-4">
                Built a real-time data visualization dashboard for monitoring business metrics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">React</span>
                <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">D3.js</span>
                <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">WebSockets</span>
              </div>
              <Link 
                href="/work/data-dashboard" 
                className="text-accent-secondary font-medium hover:underline inline-flex items-center"
              >
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Project Card 3 - Placeholder */}
          <div className="bg-surface rounded-lg overflow-hidden border border-border group hover:border-accent-tertiary transition-colors">
            <div className="relative h-48 bg-accent-tertiary/10">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-accent-tertiary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Healthcare Patient Portal</h3>
              <p className="text-foreground-secondary mb-4">
                Developed a HIPAA-compliant patient portal for a healthcare provider.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">PostgreSQL</span>
              </div>
              <Link 
                href="/work/healthcare-portal" 
                className="text-accent-tertiary font-medium hover:underline inline-flex items-center"
              >
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/work" 
            className="inline-flex items-center bg-transparent border border-accent-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-primary/10 transition-colors"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
