import {Project} from '@/data/projects';
import {AnimatedElement} from '@/components/ui/AnimatedElement';

interface CaseStudyContentProps {
    project: Project;
}

export function CaseStudyContent({project}: CaseStudyContentProps) {
    // Get the color class for tech tags based on category
    const getTechColorClass = (category: string) => {
        switch (category) {
            case 'frontend':
                return 'bg-accent-primary/10 text-accent-primary';
            case 'backend':
                return 'bg-accent-secondary/10 text-accent-secondary';
            case 'database':
                return 'bg-accent-tertiary/10 text-accent-tertiary';
            case 'devops':
                return 'bg-status-info/10 text-status-info';
            default:
                return 'bg-foreground-secondary/10 text-foreground-secondary';
        }
    };

    return (
        <div className="container mx-auto px-4 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Main content - 2/3 width on desktop */}
                <div className="md:col-span-2">
                    {/* Challenge section */}
                    <AnimatedElement className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                        <div className="bg-surface p-6 rounded-lg border border-border mb-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1">
                                    <div
                                        className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Client's Problem</h3>
                                    <p className="text-foreground-secondary">{project.problem}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-foreground-secondary mb-4">{project.fullDescription}</p>
                    </AnimatedElement>

                    {/* Approach section */}
                    <AnimatedElement className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">The Approach</h2>
                        <p className="text-foreground-secondary mb-6">{project.approach}</p>

                        {/* Key Features */}
                        <h3 className="text-xl font-medium mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {project.keyFeatures.map((feature, index) => (
                                <div key={index} className="bg-surface p-4 rounded-lg border border-border">
                                    <div className="flex items-start">
                                        <div className="mr-3 mt-1">
                                            <div
                                                className="w-8 h-8 rounded-full bg-primary-gradient flex items-center justify-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M4.5 12.75l6 6 9-13.5"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">{feature.title}</h4>
                                            <p className="text-sm text-foreground-secondary">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedElement>

                    {/* Results section */}
                    <AnimatedElement className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">The Results</h2>

                        {/* Outcome cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {project.outcomes.map((outcome, index) => (
                                <div key={index}
                                     className="bg-surface p-4 rounded-lg border border-border overflow-hidden relative">
                                    {/* Subtle gradient decoration */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-gradient"></div>
                                    <h4 className="font-medium mb-1">{outcome.metric}</h4>
                                    <div className="text-3xl font-bold text-accent-primary mb-1">{outcome.value}</div>
                                    <p className="text-sm text-foreground-secondary">{outcome.description}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedElement>

                    {/* Testimonial section - if the project has a testimonial */}
                    {project.testimonial && (
                        <AnimatedElement className="mb-12">
                            <div className="bg-surface p-6 rounded-lg border border-border">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center text-white mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium">Client Testimonial</h3>
                                    </div>
                                </div>
                                <blockquote className="mb-4">
                                    <p className="text-lg italic text-foreground-secondary">"{project.testimonial.quote}"</p>
                                </blockquote>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-medium">{project.testimonial.author}</p>
                                        <p className="text-sm text-foreground-secondary">{project.testimonial.role}, {project.testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedElement>
                    )}
                </div>

                {/* Sidebar - 1/3 width on desktop */}
                <div>
                    {/* Technologies used */}
                    <AnimatedElement delay={0.2} className="mb-8">
                        <div className="bg-surface p-6 rounded-lg border border-border sticky top-8">
                            <h3 className="text-xl font-medium mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className={`px-3 py-1 rounded ${getTechColorClass(tech.category)} inline-flex items-center`}
                                    >
                    {tech.name}
                  </span>
                                ))}
                            </div>

                            {/* Project metadata */}
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-foreground-secondary mb-1">Industry</h4>
                                    <p>{project.industry}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-foreground-secondary mb-1">Client</h4>
                                    <p>{project.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-foreground-secondary mb-1">Project
                                        Duration</h4>
                                    <p>{project.duration}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-foreground-secondary mb-1">Completion
                                        Date</h4>
                                    <p>{new Date(project.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long'
                                    })}</p>
                                </div>
                            </div>

                            {/* Call to action */}
                            <div className="mt-8 pt-6 border-t border-border">
                                <h4 className="font-medium mb-4">Need a similar project?</h4>
                                <a
                                    href="/contact"
                                    className="block w-full bg-primary-gradient text-white py-3 px-4 rounded-md text-center font-medium hover:opacity-90 transition-opacity"
                                >
                                    Let's Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    );
}
