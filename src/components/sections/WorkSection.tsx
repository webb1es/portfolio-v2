'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getFeaturedProjects, Project } from '@/data/projects';
import { ProjectCard } from '@/components/work/ProjectCard';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

export function WorkSection() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Get featured projects
    const projects = getFeaturedProjects();
    setFeaturedProjects(projects);
  }, []);

  return (
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-bold text-center mb-4">
              Featured Work
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-12">
              A selection of recent projects that showcase my expertise and approach.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
                <AnimatedElement key={project.id} delay={0.2 + (index * 0.1)}>
                  <ProjectCard project={project} />
                </AnimatedElement>
            ))}
          </div>

          <AnimatedElement delay={0.5} className="text-center mt-12">
            <Link
                href="/work"
                className="inline-flex items-center bg-transparent border border-accent-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-primary/10 transition-colors"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </AnimatedElement>
        </div>
      </section>
  );
}
