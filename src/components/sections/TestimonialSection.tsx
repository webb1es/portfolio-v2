export function TestimonialSection() {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 - Placeholder */}
          <div className="bg-surface p-6 rounded-lg shadow-md border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary font-bold text-xl">
                JD
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-foreground-secondary">CEO, Tech Company</p>
              </div>
            </div>
            <p className="text-foreground-secondary">
              "Testimonial content will go here. This is a placeholder for client feedback about the work and experience."
            </p>
          </div>
          
          {/* Testimonial Card 2 - Placeholder */}
          <div className="bg-surface p-6 rounded-lg shadow-md border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary font-bold text-xl">
                JS
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-sm text-foreground-secondary">CTO, E-commerce Platform</p>
              </div>
            </div>
            <p className="text-foreground-secondary">
              "Testimonial content will go here. This is a placeholder for client feedback about the work and experience."
            </p>
          </div>
          
          {/* Testimonial Card 3 - Placeholder */}
          <div className="bg-surface p-6 rounded-lg shadow-md border border-border md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-tertiary/20 flex items-center justify-center text-accent-tertiary font-bold text-xl">
                RJ
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Robert Johnson</h3>
                <p className="text-sm text-foreground-secondary">Product Manager, SaaS Company</p>
              </div>
            </div>
            <p className="text-foreground-secondary">
              "Testimonial content will go here. This is a placeholder for client feedback about the work and experience."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
