import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          {/* Value proposition area */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-primary-gradient">
              Solving Complex Technical Challenges
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8">
            I transform business requirements into elegant, high-performance web applications that users love.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/work" 
              className="bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity text-center"
            >
              See My Work
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border border-accent-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-primary/10 transition-colors text-center"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
