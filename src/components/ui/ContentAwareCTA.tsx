'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getStrategicContentRecommendations } from '@/lib/content-utils';
import { CaseStudyOutline, BlogArticleIdea, Testimonial } from '@/content/types';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface ContentAwareCTAProps {
  context: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showCase?: boolean;
  showBlog?: boolean;
  showTestimonial?: boolean;
}

export function ContentAwareCTA({
  context,
  title = "See How I Can Help Your Project",
  description = "I help businesses solve complex technical challenges and build applications that deliver real value.",
  ctaText = "Get in Touch",
  ctaLink = "/contact",
  showCase = true,
  showBlog = true,
  showTestimonial = true,
}: ContentAwareCTAProps) {
  const [recommendations, setRecommendations] = useState<{
    relatedCaseStudy?: CaseStudyOutline;
    relatedBlogIdeas: BlogArticleIdea[];
    testimonial: Testimonial;
  } | null>(null);
  
  useEffect(() => {
    // Get content recommendations based on context
    const contentRecs = getStrategicContentRecommendations(context);
    setRecommendations(contentRecs);
  }, [context]);
  
  if (!recommendations) return null;
  
  return (
    <section className="py-12 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{title}</h2>
            <p className="text-foreground-secondary text-center mb-8">{description}</p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {showCase && recommendations.relatedCaseStudy && (
              <AnimatedElement delay={0.05} className="bg-surface rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold mb-3">Related Case Study</h3>
                <h4 className="text-lg font-medium text-accent-primary mb-2">
                  {recommendations.relatedCaseStudy.title}
                </h4>
                <p className="text-foreground-secondary mb-4">
                  {recommendations.relatedCaseStudy.businessChallenge.substring(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recommendations.relatedCaseStudy.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/${recommendations.relatedCaseStudy.id}`}
                  className="text-accent-primary font-medium hover:underline inline-flex items-center transition-transform duration-150 hover:translate-x-0.5"
                >
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </AnimatedElement>
            )}
            
            {showBlog && recommendations.relatedBlogIdeas.length > 0 && (
              <AnimatedElement delay={0.1} className="bg-surface rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold mb-3">Related Articles</h3>
                <ul className="space-y-4">
                  {recommendations.relatedBlogIdeas.slice(0, 2).map((blog, index) => (
                    <li key={index}>
                      <h4 className="font-medium text-accent-primary mb-1">{blog.title}</h4>
                      <p className="text-sm text-foreground-secondary mb-1">
                        {blog.synopsis.substring(0, 100)}...
                      </p>
                      <div className="flex items-center text-xs text-foreground-secondary">
                        <span className="flex items-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {blog.estimatedReadingTime} min read
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-secondary">
                          {blog.difficulty}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    href="/blog"
                    className="text-accent-primary font-medium hover:underline inline-flex items-center transition-transform duration-150 hover:translate-x-0.5"
                  >
                    Browse All Articles
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </AnimatedElement>
            )}
          </div>
          
          {showTestimonial && (
            <AnimatedElement delay={0.15} className="bg-surface rounded-lg border border-border p-6 mb-8">
              <div className="flex">
                <svg className="h-8 w-8 text-accent-primary/30 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z" />
                </svg>
                <div>
                  <p className="italic text-foreground-secondary mb-4">
                    "{recommendations.testimonial.content.length > 200 
                      ? `${recommendations.testimonial.content.substring(0, 200)}...` 
                      : recommendations.testimonial.content}"
                  </p>
                  <p className="font-medium">
                    {recommendations.testimonial.isAnonymized
                      ? `— ${recommendations.testimonial.clientTitle || 'Client'}`
                      : `— ${recommendations.testimonial.clientName}, ${recommendations.testimonial.clientTitle}`}
                    {recommendations.testimonial.clientCompany && !recommendations.testimonial.isAnonymized && `, ${recommendations.testimonial.clientCompany}`}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          )}
          
          <div className="text-center">
            <Link
              href={ctaLink}
              className="inline-block bg-primary-gradient text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}