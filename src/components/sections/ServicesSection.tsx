export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Services
        </h2>
        <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-12">
          Specialized expertise to help you build, optimize, and scale your web applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 - Placeholder */}
          <div className="bg-surface p-6 rounded-lg border border-border hover:border-accent-primary transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Web Application Development</h3>
            <p className="text-foreground-secondary mb-4">
              End-to-end development of custom web applications tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">React</span>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Node.js</span>
            </div>
          </div>
          
          {/* Service Card 2 - Placeholder */}
          <div className="bg-surface p-6 rounded-lg border border-border hover:border-accent-secondary transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend Architecture & Development</h3>
            <p className="text-foreground-secondary mb-4">
              Building scalable, maintainable frontend architectures with modern frameworks.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">React</span>
              <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded">Redux</span>
            </div>
          </div>
          
          {/* Service Card 3 - Placeholder */}
          <div className="bg-surface p-6 rounded-lg border border-border hover:border-accent-tertiary transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent-tertiary/20 flex items-center justify-center text-accent-tertiary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Technical Consultation & Code Reviews</h3>
            <p className="text-foreground-secondary mb-4">
              Expert advice on architecture, code quality, and best practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Architecture</span>
              <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Code Quality</span>
              <span className="text-xs bg-accent-tertiary/10 text-accent-tertiary px-2 py-1 rounded">Best Practices</span>
            </div>
          </div>
          
          {/* Service Card 4 - Placeholder */}
          <div className="bg-surface p-6 rounded-lg border border-border hover:border-accent-primary transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Application Performance Optimization</h3>
            <p className="text-foreground-secondary mb-4">
              Improving speed, responsiveness, and efficiency of web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Performance</span>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Optimization</span>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">Lighthouse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
