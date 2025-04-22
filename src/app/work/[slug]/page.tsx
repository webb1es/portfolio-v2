'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProjectBySlug, Project } from '@/data/projects';
import { CaseStudyHeader } from '@/components/work/CaseStudyHeader';
import { CaseStudyContent } from '@/components/work/CaseStudyContent';
import { CaseStudyFooter } from '@/components/work/CaseStudyFooter';
import { NotFound } from '@/components/work/NotFound';
import { BiographySection } from '@/components/sections/BiographySection';
import { ContentAwareCTA } from '@/components/ui/ContentAwareCTA';
import { StrategicTestimonial } from '@/components/ui/StrategicTestimonial';

export const runtime = 'edge';

export default function CaseStudyPage() {
    const params = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (params.slug) {
            // Get the slug as string
            const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

            // Fetch project data
            const projectData = getProjectBySlug(slug);

            if (projectData) {
                setProject(projectData);
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

    if (notFound || !project) {
        return <NotFound />;
    }

    return (
        <div className="py-8 md:py-16">
            <CaseStudyHeader project={project} />
            <CaseStudyContent project={project} />
            
            {/* Strategic testimonial based on project type */}
            <StrategicTestimonial 
                context={`${project.industry} ${project.technologies.map(t => t.name).join(' ')}`} 
                style="feature"
            />
            
            {/* Bio section with appropriate focus for this project */}
            <BiographySection 
                variant="case-study" 
                focusArea={project.technologies.some(t => t.category === 'frontend') ? 'technical problem-solving' : 'consulting and collaboration'} 
            />
            
            {/* Content-aware CTA */}
            <ContentAwareCTA
                context={`${project.industry} ${project.technologies.map(t => t.name).join(' ')}`}
                title="Need a Similar Solution?"
                description="Let's discuss how I can help you achieve comparable results for your business."
            />
            
            <CaseStudyFooter project={project} />
        </div>
    );
}
