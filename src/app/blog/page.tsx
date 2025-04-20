'use client';

import { useState, useEffect } from 'react';
import { BlogPost, getAllPosts, getAllCategories, getAllTags, searchPosts } from '@/data/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

export default function BlogPage() {
    // State for blog posts and filtering
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'readTime'>('latest');

    // Initialize data
    useEffect(() => {
        const allPosts = getAllPosts();
        const allCategories = getAllCategories();
        const allTags = getAllTags();

        // Find the first featured post for the featured section
        const featured = allPosts.find(post => post.isFeatured) || null;

        // Set the remaining posts (excluding the featured one)
        const remainingPosts = featured
            ? allPosts.filter(post => post.id !== featured.id)
            : allPosts;

        setPosts(remainingPosts);
        setFilteredPosts(remainingPosts);
        setFeaturedPost(featured);
        setCategories(allCategories);
        setTags(allTags);
    }, []);

    // Apply filters
    useEffect(() => {
        let result = [...posts];

        // Apply category filter
        if (selectedCategory) {
            result = result.filter(post =>
                post.categories.some(category =>
                    category.toLowerCase() === selectedCategory.toLowerCase()
                )
            );
        }

        // Apply tag filter
        if (selectedTag) {
            result = result.filter(post =>
                post.tags.some(tag =>
                    tag.toLowerCase() === selectedTag.toLowerCase()
                )
            );
        }

        // Apply search query
        if (searchQuery) {
            result = searchPosts(searchQuery).filter(post =>
                featuredPost ? post.id !== featuredPost.id : true
            );
        }

        // Apply sorting
        result = sortPosts(result, sortBy);

        setFilteredPosts(result);
    }, [posts, selectedCategory, selectedTag, searchQuery, sortBy, featuredPost]);

    // Sort posts based on selected criteria
    const sortPosts = (postsToSort: BlogPost[], sortMethod: string) => {
        const sorted = [...postsToSort];

        switch(sortMethod) {
            case 'latest':
                return sorted.sort((a, b) =>
                    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
                );
            case 'oldest':
                return sorted.sort((a, b) =>
                    new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime()
                );
            case 'readTime':
                return sorted.sort((a, b) => a.readingTime - b.readingTime);
            default:
                return sorted;
        }
    };

    // Reset all filters
    const resetFilters = () => {
        setSelectedCategory('');
        setSelectedTag('');
        setSortBy('latest');
        setSearchQuery('');
    };

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
                </AnimatedElement>

                <AnimatedElement delay={0.1}>
                    <p className="text-foreground-secondary text-center mb-12 max-w-3xl mx-auto">
                        Insights and guides on web development, performance optimization, and creating exceptional digital experiences.
                    </p>
                </AnimatedElement>

                {/* Featured Post */}
                {featuredPost && (
                    <AnimatedElement delay={0.2} className="mb-16">
                        <h2 className="text-2xl font-semibold mb-6">Featured Article</h2>
                        <BlogCard post={featuredPost} isFeatured={true} />
                    </AnimatedElement>
                )}

                {/* Filters */}
                <AnimatedElement delay={0.3} className="bg-surface rounded-lg p-6 mb-12 border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {/* Search */}
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium mb-2">
                                Search Articles
                            </label>
                            <input
                                type="text"
                                id="search"
                                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                placeholder="Search by keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Category filter */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium mb-2">
                                Category
                            </label>
                            <select
                                id="category"
                                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tag filter */}
                        <div>
                            <label htmlFor="tag" className="block text-sm font-medium mb-2">
                                Tag
                            </label>
                            <select
                                id="tag"
                                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                            >
                                <option value="">All Tags</option>
                                {tags.map((tag) => (
                                    <option key={tag} value={tag}>
                                        {tag}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort order */}
                        <div>
                            <label htmlFor="sort" className="block text-sm font-medium mb-2">
                                Sort By
                            </label>
                            <select
                                id="sort"
                                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'latest' | 'oldest' | 'readTime')}
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="readTime">Reading Time</option>
                            </select>
                        </div>
                    </div>

                    {/* Filter actions */}
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="text-sm text-foreground-secondary">
                            Showing {filteredPosts.length} of {posts.length} articles
                        </div>
                        <button
                            onClick={resetFilters}
                            className="text-sm text-accent-primary hover:underline flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            Reset Filters
                        </button>
                    </div>
                </AnimatedElement>

                {/* Blog Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <AnimatedElement key={post.id} delay={0.3 + (index * 0.1)}>
                                <BlogCard post={post} />
                            </AnimatedElement>
                        ))}
                    </div>
                ) : (
                    <AnimatedElement delay={0.3} className="text-center py-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-foreground-secondary mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <h3 className="text-xl font-medium mb-2">No articles found</h3>
                        <p className="text-foreground-secondary mb-4">Try adjusting your filters or search criteria</p>
                        <button
                            onClick={resetFilters}
                            className="inline-flex items-center bg-primary-gradient text-white px-4 py-2 rounded-md"
                        >
                            Reset Filters
                        </button>
                    </AnimatedElement>
                )}
            </div>
        </div>
    );
}
