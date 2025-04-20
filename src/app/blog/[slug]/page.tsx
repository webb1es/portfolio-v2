'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getPostBySlug, BlogPost, getAllPosts } from '@/data/blog';
import { ArticleHeader } from '@/components/blog/ArticleHeader';
import { ArticleContent } from '@/components/blog/ArticleContent';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { NotFound } from '@/components/blog/NotFound';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { ContentAwareCTA } from '@/components/ui/ContentAwareCTA';

export default function BlogArticlePage() {
    const params = useParams();
    const [article, setArticle] = useState<BlogPost | null>(null);
    const [relatedArticles, setRelatedArticles] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (params.slug) {
            // Get the slug as string
            const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

            // Fetch article data
            const articleData = getPostBySlug(slug);

            if (articleData) {
                setArticle(articleData);

                // Find related articles based on categories and tags
                const allPosts = getAllPosts();
                const related = allPosts
                    .filter(post => post.id !== articleData.id) // Exclude current article
                    .filter(post => {
                        // Check for common categories or tags
                        const hasCommonCategory = post.categories.some(category =>
                            articleData.categories.includes(category)
                        );
                        const hasCommonTag = post.tags.some(tag =>
                            articleData.tags.includes(tag)
                        );
                        return hasCommonCategory || hasCommonTag;
                    })
                    .slice(0, 3); // Limit to 3 related articles

                setRelatedArticles(related);
            } else {
                setNotFound(true);
            }

            setLoading(false);
        }
    }, [params]);

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

    if (notFound || !article) {
        return <NotFound />;
    }

    return (
        <div className="py-8 md:py-16">
            <ArticleHeader article={article} />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <ArticleContent article={article} />
                    
                    <AnimatedElement delay={0.2}>
                        <AuthorBio 
                            variant="short" 
                            context={article.categories.join(' ') + ' ' + article.tags.join(' ')}
                        />
                    </AnimatedElement>

                    <AnimatedElement delay={0.3} className="mt-16 border-t border-border pt-16">
                        <RelatedArticles articles={relatedArticles} />
                    </AnimatedElement>
                    
                    <AnimatedElement delay={0.4} className="mt-16">
                        <ContentAwareCTA 
                            context={article.categories.join(' ') + ' ' + article.tags.join(' ')}
                            title="Need Help With a Similar Project?"
                            description="I specialize in solving complex technical challenges like those discussed in this article."
                            ctaText="Schedule a Consultation"
                            showCase={true}
                            showBlog={false}
                        />
                    </AnimatedElement>
                </div>
            </div>
        </div>
    );
}
