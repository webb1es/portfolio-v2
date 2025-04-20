'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getPostsByTag, getAllTags, BlogPost } from '@/data/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

export default function TagPage() {
    const params = useParams();
    const [tag, setTag] = useState<string>('');
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [allTags, setAllTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.tag) {
            const tagSlug = Array.isArray(params.tag)
                ? params.tag[0]
                : params.tag;

            // Decode the tag from the URL
            const decodedTag = decodeURIComponent(tagSlug);
            setTag(decodedTag);

            // Get all posts for this tag
            const tagPosts = getPostsByTag(decodedTag);
            setPosts(tagPosts);

            // Get all tags for the sidebar
            const tags = getAllTags();
            setAllTags(tags);

            setLoading(false);
        }
    }, [params]);

    // Format tag name for display
    const formatTagName = (name: string) => {
        // Convert from slug format to display format
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center items-center min-h-[50vh]">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-12 w-48 bg-background-secondary rounded mb-4"></div>
                        <div className="h-4 w-64 bg-background-secondary rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h1 className="text-3xl font-bold mb-2 text-center">
                        #{formatTagName(tag)}
                    </h1>
                </AnimatedElement>

                <AnimatedElement delay={0.1}>
                    <p className="text-foreground-secondary text-center mb-12">
                        Browse articles tagged with "#{formatTagName(tag)}"
                    </p>
                </AnimatedElement>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar with all tags */}
                    <AnimatedElement delay={0.2} className="lg:col-span-1">
                        <div className="bg-surface rounded-lg border border-border p-6 sticky top-24">
                            <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {allTags.map((t) => (
                                    <Link
                                        href={`/blog/tag/${encodeURIComponent(t.toLowerCase())}`}
                                        key={t}
                                        className={`text-sm px-3 py-1 rounded-full ${
                                            t.toLowerCase() === tag.toLowerCase()
                                                ? 'bg-accent-primary text-white'
                                                : 'bg-background-secondary text-foreground-secondary hover:bg-accent-primary/10 hover:text-accent-primary'
                                        } transition-colors`}
                                    >
                                        #{t}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-border">
                                <Link
                                    href="/blog"
                                    className="text-accent-primary hover:underline flex items-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                    </svg>
                                    View All Articles
                                </Link>
                            </div>
                        </div>
                    </AnimatedElement>

                    {/* Main content with posts */}
                    <div className="lg:col-span-3">
                        {posts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {posts.map((post, index) => (
                                    <AnimatedElement key={post.id} delay={0.3 + (index * 0.1)}>
                                        <BlogCard post={post} />
                                    </AnimatedElement>
                                ))}
                            </div>
                        ) : (
                            <AnimatedElement delay={0.3} className="text-center py-12 bg-surface rounded-lg border border-border">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-foreground-secondary mb-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                                <p className="text-foreground-secondary mb-4">
                                    There are no articles tagged with "#{formatTagName(tag)}" yet.
                                </p>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center bg-primary-gradient text-white px-4 py-2 rounded-md"
                                >
                                    View All Articles
                                </Link>
                            </AnimatedElement>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
