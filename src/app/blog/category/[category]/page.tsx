'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getPostsByCategory, getAllCategories, BlogPost } from '@/data/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

export default function CategoryPage() {
    const params = useParams();
    const [category, setCategory] = useState<string>('');
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [allCategories, setAllCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.category) {
            const categorySlug = Array.isArray(params.category)
                ? params.category[0]
                : params.category;

            // Decode the category from the URL
            const decodedCategory = decodeURIComponent(categorySlug);
            setCategory(decodedCategory);

            // Get all posts for this category
            const categoryPosts = getPostsByCategory(decodedCategory);
            setPosts(categoryPosts);

            // Get all categories for the sidebar
            const categories = getAllCategories();
            setAllCategories(categories);

            setLoading(false);
        }
    }, [params]);

    // Format category name for display
    const formatCategoryName = (name: string) => {
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
                        {formatCategoryName(category)}
                    </h1>
                </AnimatedElement>

                <AnimatedElement delay={0.1}>
                    <p className="text-foreground-secondary text-center mb-12">
                        Browse articles in the "{formatCategoryName(category)}" category
                    </p>
                </AnimatedElement>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar with all categories */}
                    <AnimatedElement delay={0.2} className="lg:col-span-1">
                        <div className="bg-surface rounded-lg border border-border p-6 sticky top-24">
                            <h2 className="text-xl font-semibold mb-4">Categories</h2>
                            <ul className="space-y-2">
                                {allCategories.map((cat) => (
                                    <li key={cat}>
                                        <Link
                                            href={`/blog/category/${encodeURIComponent(cat.toLowerCase())}`}
                                            className={`flex items-center ${
                                                cat.toLowerCase() === category.toLowerCase()
                                                    ? 'text-accent-primary font-medium'
                                                    : 'text-foreground-secondary hover:text-accent-primary'
                                            } transition-colors`}
                                        >
                                            {cat.toLowerCase() === category.toLowerCase() && (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                </svg>
                                            )}
                                            {cat}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
                                    There are no articles in the "{formatCategoryName(category)}" category yet.
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
