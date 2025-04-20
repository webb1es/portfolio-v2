import Link from 'next/link';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
    post: BlogPost;
    isFeatured?: boolean;
}

export function BlogCard({ post, isFeatured = false }: BlogCardProps) {
    // Format date for display
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    return (
        <div
            className={`bg-surface rounded-lg border border-border overflow-hidden flex flex-col transition-all 
      hover:border-accent-primary hover:shadow-md 
      ${isFeatured ? 'md:col-span-2' : ''}`}
        >
            {/* Featured indicator */}
            {isFeatured && (
                <div className="bg-primary-gradient text-white text-xs font-medium px-3 py-1 w-fit rounded-br-lg">
                    Featured Article
                </div>
            )}

            <div className="p-6 flex-grow flex flex-col">
                {/* Categories and Date */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    {post.categories.slice(0, 2).map((category) => (
                        <Link
                            href={`/blog/category/${encodeURIComponent(category.toLowerCase())}`}
                            key={category}
                            className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded hover:bg-accent-primary/20 transition-colors"
                        >
                            {category}
                        </Link>
                    ))}
                    <span className="text-xs text-foreground-secondary ml-auto">
            {formatDate(post.publishedDate)}
          </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 hover:text-accent-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-foreground-secondary mb-4 flex-grow">
                    {isFeatured
                        ? post.excerpt
                        : post.excerpt.length > 140
                            ? `${post.excerpt.substring(0, 140)}...`
                            : post.excerpt
                    }
                </p>

                {/* Reading Time and Tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                    <div className="flex items-center text-foreground-secondary text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {post.readingTime} min read
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                            <Link
                                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                                key={tag}
                                className="text-xs text-foreground-secondary bg-background hover:bg-background-secondary transition-colors px-2 py-1 rounded"
                            >
                                #{tag}
                            </Link>
                        ))}
                        {post.tags.length > 2 && (
                            <span className="text-xs text-foreground-secondary">
                +{post.tags.length - 2} more
              </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Read more link */}
            <div className="px-6 py-4 border-t border-border">
                <Link
                    href={`/blog/${post.slug}`}
                    className="text-accent-primary font-medium hover:underline inline-flex items-center"
                >
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
