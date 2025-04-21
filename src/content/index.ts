// Export all content from a central location
import { Bio } from './types';
import { Testimonial } from './types';
import { CaseStudyOutline } from './types';
import { BlogArticleIdea } from './types';

// Import directly from files to avoid re-export issues
import * as bios from './bios';
import * as services from './services';
import * as testimonials from './testimonials';
import * as caseStudies from './case-studies';
import * as blogIdeas from './blog-ideas';

// Re-export type definitions
export * from './types';

// Re-export the imported functions
export const { 
  bios: biosList,
  getBioByType, 
  getBioByFocus 
} = bios;

export const { 
  serviceDescriptions,
  getServiceById, 
  getServiceBySlug, 
  getAllServices 
} = services;

export const { 
  testimonials: testimonialsList,
  getTestimonialById, 
  getTestimonialsByFocus, 
  getAllTestimonials 
} = testimonials;

export const {
  caseStudyOutlines,
  getCaseStudyOutlineById,
  getAllCaseStudyOutlines
} = caseStudies;

export const {
  blogArticleIdeas,
  getBlogArticleIdeaById,
  getAllBlogArticleIdeas
} = blogIdeas;

// Helper functions for content usage

/**
 * Get appropriate bio based on context
 */
export function getContextualBio(context: 'about' | 'case-study' | 'blog', focusArea?: string): Bio {
  const bioMap = {
    'about': 'long',
    'case-study': 'medium',
    'blog': 'short'
  } as const;
  
  const type = bioMap[context];
  
  // If focus area specified, try to get a bio with that focus area and type
  if (focusArea) {
    const bio = biosList.find(
      (b: Bio) => b.type === type && b.focusArea === focusArea
    );
    if (bio) return bio;
  }
  
  // Otherwise return first bio of the requested type
  return biosList.find(
    (b: Bio) => b.type === type
  ) as Bio;
}

/**
 * Get relevant testimonials for a specific service or context
 */
export function getRelevantTestimonials(context: string, count: number = 2): Testimonial[] {
  // Filter by service type if specified, otherwise return mixed focus areas
  let filtered = testimonialsList;
  if (context.includes('technical')) {
    filtered = testimonialsList.filter((t: Testimonial) => 
      t.focus === 'technical-expertise' || t.focus === 'problem-solving'
    );
  } else if (context.includes('communication')) {
    filtered = testimonialsList.filter((t: Testimonial) => 
      t.focus === 'communication' || t.focus === 'relationship'
    );
  } else if (context.includes('performance')) {
    filtered = testimonialsList.filter((t: Testimonial) => 
      t.focus === 'outcomes' || t.focus === 'problem-solving'
    );
  }
  
  // Shuffle the array and return requested count
  return filtered
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

/**
 * Get related case studies for a specific context (service, blog post, etc.)
 */
export function getRelatedCaseStudies(context: string, count: number = 1): CaseStudyOutline[] {
  // Match case studies to context
  let filtered = caseStudyOutlines;
  if (context.includes('ecommerce') || context.includes('performance')) {
    filtered = caseStudyOutlines.filter((cs: CaseStudyOutline) => 
      cs.id === 'cs-ecommerce-platform' || cs.technologies.includes('Performance optimization')
    );
  } else if (context.includes('saas') || context.includes('application')) {
    filtered = caseStudyOutlines.filter((cs: CaseStudyOutline) => 
      cs.id === 'cs-saas-application'
    );
  } else if (context.includes('healthcare') || context.includes('security')) {
    filtered = caseStudyOutlines.filter((cs: CaseStudyOutline) => 
      cs.id === 'cs-healthcare-portal'
    );
  }
  
  // Return requested count, or all if filtered.length < count
  return filtered.slice(0, count);
}

/**
 * Get related blog ideas for a specific context (service, case study, etc.)
 */
export function getRelatedBlogIdeas(context: string, count: number = 2): BlogArticleIdea[] {
  // Match blog ideas to context
  let filtered = blogArticleIdeas;
  if (context.includes('performance') || context.includes('optimization')) {
    filtered = blogArticleIdeas.filter((blog: BlogArticleIdea) => 
      blog.id === 'article-2' || blog.title.toLowerCase().includes('performance')
    );
  } else if (context.includes('architecture') || context.includes('frontend')) {
    filtered = blogArticleIdeas.filter((blog: BlogArticleIdea) => 
      blog.id === 'article-1' || blog.id === 'article-6'
    );
  } else if (context.includes('security') || context.includes('authentication')) {
    filtered = blogArticleIdeas.filter((blog: BlogArticleIdea) => 
      blog.id === 'article-5'
    );
  }
  
  // Return requested count, shuffled
  return filtered
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}