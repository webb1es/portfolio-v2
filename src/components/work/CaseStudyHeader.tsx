import Link from 'next/link';
import { Project } from '@/data/projects';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface CaseStudyHeaderProps {
    project: Project;
}

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
    // Helper function to format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
    };

    return (
        <div className="container mx-auto px-4 mb-12">
            {/* Breadcrumb */}
            <AnimatedElement>
                <nav className="mb-8">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <Link href="/" className="text-foreground-secondary hover:text-accent-primary transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="text-foreground-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </li>
                        <li>
                            <Link href="/work" className="text-foreground-secondary hover:text-accent-primary transition-colors">
                                Work
                            </Link>
                        </li>
                        <li className="text-foreground-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </li>
                        <li className="text-foreground font-medium truncate max-w-[200px]">{project.title}</li>
                    </ol>
                </nav>
            </AnimatedElement>

            <div className="max-w-4xl mx-auto">
                {/* Project metadata */}
                <AnimatedElement delay={0.1} className="mb-4">
                    <div className="flex flex-wrap gap-3 text-sm mb-2">
            <span className="bg-background-secondary text-foreground-secondary px-3 py-1 rounded-full">
              {project.industry}
            </span>
                        <span className="bg-background-secondary text-foreground-secondary px-3 py-1 rounded-full">
              {formatDate(project.date)}
            </span>
                        <span className="bg-background-secondary text-foreground-secondary px-3 py-1 rounded-full">
              {project.duration}
            </span>
                    </div>
                </AnimatedElement>

                {/* Project Title */}
                <AnimatedElement delay={0.2}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
                </AnimatedElement>

                {/* Client */}
                <AnimatedElement delay={0.25} className="mb-6">
                    <div className="flex items-center">
                        <span className="text-foreground-secondary mr-2">Client:</span>
                        <span className="font-medium">{project.client}</span>
                        {project.clientAnonymized && (
                            <span className="text-xs text-foreground-secondary ml-2">(anonymized)</span>
                        )}
                    </div>
                </AnimatedElement>

                {/* Project Image */}
                <AnimatedElement delay={0.3} className="mb-8">
                    <div className="aspect-video rounded-lg bg-background-secondary flex items-center justify-center overflow-hidden">
                        {/* In a real implementation, this would be an actual image */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-foreground-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                </AnimatedElement>

                {/* Project introduction */}
                <AnimatedElement delay={0.4} className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-foreground-secondary">{project.fullDescription}</p>
                </AnimatedElement>
            </div>
        </div>
    );
}
