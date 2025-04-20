import Link from 'next/link';
import { BlogPost } from '@/data/blog';

interface RelatedArticlesProps {
    articles: BlogPost[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    if (articles.length === 0) {
        return null;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <Link
                        href={`/blog/${article.slug}`}
                        key={article.id}
                        className="group flex flex-col bg-surface rounded-lg border border-border overflow-hidden hover:border-accent-primary transition-all hover:shadow-md"
                    >
                        <div className="p-6">
                            {/* Categories */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">
                                    {article.categories[0]}
                                </div>
                                <div className="text-xs text-foreground-secondary">
                                    {formatDate(article.publishedDate)}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-primary transition-colors line-clamp-2">
                                {article.title}
                            </h3>

                            {/* Reading time */}
                            <div className="text-sm text-foreground-secondary flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {article.readingTime} min read
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
