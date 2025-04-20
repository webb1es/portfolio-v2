import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface ArticleHeaderProps {
    article: BlogPost;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
    // Helper function to format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
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
                            <Link href="/blog" className="text-foreground-secondary hover:text-accent-primary transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li className="text-foreground-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </li>
                        <li className="text-foreground truncate max-w-[200px]">{article.title}</li>
                    </ol>
                </nav>
            </AnimatedElement>

            <div className="max-w-4xl mx-auto">
                {/* Categories */}
                <AnimatedElement delay={0.1} className="mb-4">
                    <div className="flex flex-wrap gap-3">
                        {article.categories.map((category) => (
                            <Link
                                href={`/blog/category/${encodeURIComponent(category.toLowerCase())}`}
                                key={category}
                                className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full hover:bg-accent-primary/20 transition-colors"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </AnimatedElement>

                {/* Title */}
                <AnimatedElement delay={0.2}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
                </AnimatedElement>

                {/* Article metadata */}
                <AnimatedElement delay={0.3} className="flex flex-wrap items-center gap-4 text-sm text-foreground-secondary mb-8">
                    {/* Author */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary font-medium mr-3">
                            {article.author.name.split(' ').map(name => name[0]).join('')}
                        </div>
                        <div>
                            <div className="font-medium text-foreground">{article.author.name}</div>
                            <div className="text-xs">{article.author.title}</div>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span>{formatDate(article.publishedDate)}</span>
                    </div>

                    {/* Reading time */}
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{article.readingTime} min read</span>
                    </div>
                </AnimatedElement>

                {/* Hero image or cover image */}
                {article.coverImage ? (
                    <AnimatedElement delay={0.4} className="mb-8">
                        <div className="aspect-video rounded-lg bg-background-secondary flex items-center justify-center overflow-hidden">
                            {/* In a real implementation, this would be an actual image */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-foreground-secondary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                    </AnimatedElement>
                ) : null}

                {/* Description / Excerpt */}
                <AnimatedElement delay={0.5} className="text-xl text-foreground-secondary mb-8">
                    {article.description}
                </AnimatedElement>
            </div>
        </div>
    );
}
