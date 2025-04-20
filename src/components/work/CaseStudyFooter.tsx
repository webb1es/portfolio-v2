import Link from 'next/link';
import { Project, getAllProjects } from '@/data/projects';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface CaseStudyFooterProps {
    project: Project;
}

export function CaseStudyFooter({ project }: CaseStudyFooterProps) {
    // Get all projects to find next/previous
    const allProjects = getAllProjects();

    // Sort projects by date (newest first)
    const sortedProjects = [...allProjects].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Find current project index
    const currentIndex = sortedProjects.findIndex(p => p.id === project.id);

    // Determine next and previous projects
    const prevProject = currentIndex < sortedProjects.length - 1
        ? sortedProjects[currentIndex + 1]
        : null;

    const nextProject = currentIndex > 0
        ? sortedProjects[currentIndex - 1]
        : null;

    return (
        <div className="container mx-auto px-4 mb-16">
            <div className="max-w-4xl mx-auto">
                {/* CTA section */}
                <AnimatedElement className="bg-background-secondary rounded-lg p-8 mb-16">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Need a Similar Project?</h2>
                        <p className="text-foreground-secondary mb-6">
                            I specialize in building high-quality web applications that solve real business problems.
                            Let's discuss how I can help with your next project.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                            >
                                Contact Me
                            </Link>
                            <Link
                                href="/services"
                                className="bg-transparent border border-accent-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-primary/10 transition-colors"
                            >
                                View Services
                            </Link>
                        </div>
                    </div>
                </AnimatedElement>

                {/* Navigation between projects */}
                <AnimatedElement delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prevProject && (
                            <Link
                                href={`/work/${prevProject.slug}`}
                                className="bg-surface p-6 rounded-lg border border-border hover:border-accent-primary transition-colors flex items-start"
                            >
                                <div className="mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-foreground-secondary mb-1">Previous Project</div>
                                    <div className="font-medium">{prevProject.title}</div>
                                </div>
                            </Link>
                        )}

                        {nextProject && (
                            <Link
                                href={`/work/${nextProject.slug}`}
                                className="bg-surface p-6 rounded-lg border border-border hover:border-accent-primary transition-colors flex items-start justify-end text-right"
                            >
                                <div>
                                    <div className="text-sm text-foreground-secondary mb-1">Next Project</div>
                                    <div className="font-medium">{nextProject.title}</div>
                                </div>
                                <div className="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </Link>
                        )}
                    </div>
                </AnimatedElement>

                {/* Back to all projects */}
                <AnimatedElement delay={0.2} className="mt-8 text-center">
                    <Link
                        href="/work"
                        className="inline-flex items-center text-accent-primary hover:underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        View All Projects
                    </Link>
                </AnimatedElement>
            </div>
        </div>
    );
}
