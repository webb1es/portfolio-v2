'use client';

import { useState, useEffect } from 'react';
import { getAllProjects, getProjectCategories, Project } from '@/data/projects';
import { ProjectCard } from '@/components/work/ProjectCard';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

export default function WorkPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [categories, setCategories] = useState<{ industries: string[], technologies: string[] }>({
        industries: [],
        technologies: []
    });

    // Filter states
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [selectedTech, setSelectedTech] = useState<string>('');
    const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'impact'>('latest');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Initialize data
    useEffect(() => {
        const allProjects = getAllProjects();
        const projectCategories = getProjectCategories();

        setProjects(allProjects);
        setFilteredProjects(allProjects);
        setCategories(projectCategories);
    }, []);

    // Apply filters
    useEffect(() => {
        let result = [...projects];

        // Apply industry filter
        if (selectedIndustry) {
            result = result.filter(project => project.industry === selectedIndustry);
        }

        // Apply technology filter
        if (selectedTech) {
            result = result.filter(project =>
                project.technologies.some(tech => tech.name === selectedTech)
            );
        }

        // Apply search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(project =>
                project.title.toLowerCase().includes(query) ||
                project.shortDescription.toLowerCase().includes(query) ||
                project.client.toLowerCase().includes(query) ||
                project.problem.toLowerCase().includes(query)
            );
        }

        // Apply sorting
        result = sortProjects(result, sortBy);

        setFilteredProjects(result);
    }, [projects, selectedIndustry, selectedTech, searchQuery, sortBy]);

    // Sort projects based on selected criteria
    const sortProjects = (projectsToSort: Project[], sortMethod: string) => {
        const sorted = [...projectsToSort];

        switch(sortMethod) {
            case 'latest':
                return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            case 'oldest':
                return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            case 'impact':
                // For impact sorting, we'll use a simple metric based on the first outcome value
                // In a real app, you might have a more sophisticated impact score
                return sorted.sort((a, b) => {
                    const aValue = parseInt(a.outcomes[0]?.value.replace(/[^0-9.-]+/g, '') || '0');
                    const bValue = parseInt(b.outcomes[0]?.value.replace(/[^0-9.-]+/g, '') || '0');
                    return bValue - aValue;
                });
            default:
                return sorted;
        }
    };

    // Reset all filters
    const resetFilters = () => {
        setSelectedIndustry('');
        setSelectedTech('');
        setSortBy('latest');
        setSearchQuery('');
    };

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h1 className="text-4xl font-bold mb-4 text-center">My Work</h1>
                </AnimatedElement>

                <AnimatedElement delay={0.1}>
                    <p className="text-foreground-secondary text-center mb-12 max-w-3xl mx-auto">
                        Browse through my portfolio of projects. Each case study details the challenges faced, the solutions implemented, and the measurable business impact achieved.
                    </p>
                </AnimatedElement>

                {/* Filters */}
                <AnimatedElement delay={0.2} className="bg-surface rounded-lg p-6 mb-12 border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {/* Search */}
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium mb-2">
                                Search Projects
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

                        {/* Industry filter */}
                        <div>
                            <label htmlFor="industry" className="block text-sm font-medium mb-2">
                                Industry
                            </label>
                            <select
                                id="industry"
                                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                value={selectedIndustry}
                                onChange={(e) => setSelectedIndustry(e.target.value)}
                            >
                                <option value="">All Industries</option>
                                {categories.industries.map((industry) => (
                                    <option key={industry} value={industry}>
                                        {industry}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Technology filter */}
                        <div>
                            <label htmlFor="technology" className="block text-sm font-medium mb-2">
                                Technology
                            </label>
                            <select
                                id="technology"
                                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                value={selectedTech}
                                onChange={(e) => setSelectedTech(e.target.value)}
                            >
                                <option value="">All Technologies</option>
                                {categories.technologies.map((tech) => (
                                    <option key={tech} value={tech}>
                                        {tech}
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
                                onChange={(e) => setSortBy(e.target.value as 'latest' | 'oldest' | 'impact')}
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="impact">Most Impactful</option>
                            </select>
                        </div>
                    </div>

                    {/* Filter actions */}
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="text-sm text-foreground-secondary">
                            Showing {filteredProjects.length} of {projects.length} projects
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

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <AnimatedElement key={project.id} delay={0.3 + (index * 0.1)}>
                                <ProjectCard project={project} />
                            </AnimatedElement>
                        ))}
                    </div>
                ) : (
                    <AnimatedElement delay={0.3} className="text-center py-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-foreground-secondary mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <h3 className="text-xl font-medium mb-2">No matching projects found</h3>
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
