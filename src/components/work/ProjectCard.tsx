import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    // Helper function to format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
    };

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
        <div className="bg-surface rounded-lg overflow-hidden border border-border h-full flex flex-col hover:border-accent-primary transition-colors hover:shadow-md">
            {/* Project Image */}
            <div className="relative h-48 bg-accent-primary/5 flex items-center justify-center overflow-hidden">
                {project.featuredImage ? (
                    // If the project has a featured image, render it
                    <div className="absolute inset-0 flex items-center justify-center text-accent-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                ) : (
                    // Fallback icon if no image is available
                    <div className="text-accent-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col">
                {/* Project metadata */}
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-foreground-secondary">{project.industry}</span>
                    <span className="text-xs text-foreground-secondary">{formatDate(project.date)}</span>
                </div>

                {/* Project title and short description */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground-secondary mb-4 flex-grow">{project.shortDescription}</p>

                {/* Problem solved */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium mb-1">Problem Solved:</h4>
                    <p className="text-sm text-foreground-secondary">{project.problem}</p>
                </div>

                {/* Key outcome */}
                {project.outcomes && project.outcomes.length > 0 && (
                    <div className="bg-accent-primary/5 p-3 rounded-md mb-4">
                        <div className="flex items-center">
                            <span className="font-medium text-accent-primary mr-2">Key Result:</span>
                            <span className="text-sm">{project.outcomes[0].description}</span>
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech.name}
                                className={`text-xs px-2 py-1 rounded ${getTechColorClass(tech.category)}`}
                            >
                {tech.name}
              </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="text-xs px-2 py-1 rounded bg-foreground-secondary/10 text-foreground-secondary">
                +{project.technologies.length - 4} more
              </span>
                        )}
                    </div>
                </div>

                {/* Case study link */}
                <Link
                    href={`/work/${project.slug}`}
                    className="text-accent-primary font-medium hover:underline inline-flex items-center mt-auto"
                >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
