import Link from 'next/link';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

export function NotFound() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-md mx-auto text-center">
                <AnimatedElement>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-background-secondary flex items-center justify-center text-foreground-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </div>
                    </div>
                </AnimatedElement>

                <AnimatedElement delay={0.1}>
                    <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                </AnimatedElement>

                <AnimatedElement delay={0.2}>
                    <p className="text-foreground-secondary mb-8">
                        The article you're looking for doesn't exist or may have been moved.
                    </p>
                </AnimatedElement>

                <AnimatedElement delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/blog"
                        className="bg-primary-gradient text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                    >
                        View All Articles
                    </Link>

                    <Link
                        href="/"
                        className="bg-transparent border border-accent-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-primary/10 transition-colors"
                    >
                        Back to Home
                    </Link>
                </AnimatedElement>
            </div>
        </div>
    );
}
