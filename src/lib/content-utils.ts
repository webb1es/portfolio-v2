import { 
  Bio, 
  ServiceDescription, 
  Testimonial, 
  CaseStudyOutline, 
  BlogArticleIdea,
  getContextualBio,
  getRelevantTestimonials,
  getRelatedCaseStudies,
  getRelatedBlogIdeas
} from '@/content';

/**
 * Get appropriate bio for a specific page or component
 */
export function getBioForContext(context: 'about' | 'case-study' | 'blog', focusArea?: string): Bio {
  return getContextualBio(context, focusArea);
}

/**
 * Get testimonials suitable for a specific page or component
 */
export function getTestimonialsForContext(context: string, count: number = 2): Testimonial[] {
  return getRelevantTestimonials(context, count);
}

/**
 * Get featured testimonial for homepage
 */
export function getFeaturedTestimonial(): Testimonial {
  // Return the best overall testimonial for homepage feature
  const testimonials = getRelevantTestimonials('outcomes', 1);
  return testimonials[0];
}

/**
 * Get service description with enhanced formatting for display
 */
export function getFormattedServiceDescription(serviceId: string): ServiceDescription | null {
  // Import the service descriptions dynamically to avoid server/client mismatch
  const { getServiceById } = require('@/content/services');
  const service = getServiceById(serviceId);
  
  if (!service) return null;
  return service;
}

/**
 * Get case study with appropriate testimonial for display
 */
export function getCaseStudyWithTestimonial(caseStudyId: string): {
  caseStudy: CaseStudyOutline;
  testimonial: Testimonial;
} | null {
  const { getCaseStudyOutlineById } = require('@/content/case-studies');
  const caseStudy = getCaseStudyOutlineById(caseStudyId);
  
  if (!caseStudy) return null;
  
  // Match an appropriate testimonial to this case study
  let focus: Testimonial['focus'] = 'outcomes';
  
  if (caseStudy.id.includes('ecommerce')) {
    focus = 'outcomes';
  } else if (caseStudy.id.includes('saas')) {
    focus = 'technical-expertise';
  } else if (caseStudy.id.includes('healthcare')) {
    focus = 'communication';
  }
  
  const { getTestimonialsByFocus } = require('@/content/testimonials');
  const matchingTestimonials = getTestimonialsByFocus(focus);
  const testimonial = matchingTestimonials[0];
  
  return {
    caseStudy,
    testimonial
  };
}

/**
 * Get strategic content recommendations for a specific page context
 */
export function getStrategicContentRecommendations(
  context: string
): { 
  relatedCaseStudy?: CaseStudyOutline;
  relatedBlogIdeas: BlogArticleIdea[];
  testimonial: Testimonial;
} {
  // Get related case study if appropriate for this context
  const caseStudies = getRelatedCaseStudies(context, 1);
  const relatedCaseStudy = caseStudies.length > 0 ? caseStudies[0] : undefined;
  
  // Get related blog ideas
  const blogIdeas = getRelatedBlogIdeas(context, 2);
  
  // Get an appropriate testimonial
  const testimonials = getRelevantTestimonials(context, 1);
  
  return {
    relatedCaseStudy,
    relatedBlogIdeas: blogIdeas,
    testimonial: testimonials[0]
  };
}

/**
 * Format dates in a consistent way across the application
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}