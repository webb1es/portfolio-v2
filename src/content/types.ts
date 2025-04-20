// Professional Bio Types
export interface Bio {
  type: 'long' | 'medium' | 'short';
  content: string;
  focusArea?: string; // What aspect of expertise this bio emphasizes
}

// Service Description Types
export interface ServiceDescription {
  id: string;
  title: string;
  slug: string;
  problem: string; // Problem statement that resonates with clients
  approach: string; // Solution approach highlighting methodology
  benefits: string[]; // Benefits to the client
  technologies: string[]; // Technologies and tools utilized
  outcomes: string[]; // Example outcomes or results
}

// Testimonial Types
export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle?: string;
  clientCompany?: string;
  content: string;
  focus: 'problem-solving' | 'communication' | 'technical-expertise' | 'outcomes' | 'relationship';
  projectType?: string;
  isAnonymized?: boolean;
}

// Case Study Outline Types
export interface CaseStudyOutline {
  id: string;
  title: string;
  clientIndustry: string;
  clientSize: string;
  isAnonymized: boolean;
  businessChallenge: string;
  objectives: string[];
  technicalChallenges: string[];
  solutionApproach: string;
  implementation: string;
  technologies: string[];
  methodologies: string[];
  results: {
    description: string;
    metrics: string[];
  };
  clientFeedback: string;
  lessonsLearned: string[];
}

// Blog Article Idea Types
export interface BlogArticleIdea {
  id: string;
  title: string;
  synopsis: string;
  targetKeywords: string[];
  clientProblemsAddressed: string[];
  estimatedReadingTime: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}