import { ServiceDescription } from '../types';

export const serviceDescriptions: ServiceDescription[] = [
  {
    id: 'web-application',
    title: 'Custom Web Application Development',
    slug: 'custom-web-application-development',
    problem: `Does your business rely on inefficient manual processes, disconnected tools, or outdated systems that are holding you back? Many organizations struggle with scalability limitations, data silos, and workflow inefficiencies that prevent them from reaching their full potential. Off-the-shelf solutions often fall short, forcing uncomfortable compromises in how your business operates.`,
    approach: `I take a strategic approach to custom web application development, beginning with a thorough discovery phase to understand your unique business processes and objectives. From there, I design an architecture that provides both immediate value and long-term flexibility. My development process emphasizes iterative delivery, allowing you to see and provide feedback on working software early and often. This ensures the final product truly aligns with your business needs. Throughout the process, I maintain transparent communication, ensuring you understand technical decisions and their business implications.`,
    benefits: [
      'Streamlined operations by automating manual processes and integrating disparate systems',
      'Enhanced data visibility with centralized information and insightful reporting',
      'Improved user experience for both internal teams and customers',
      'Increased scalability to support business growth without technical limitations',
      'Reduced operational costs through process efficiency and elimination of redundant tools'
    ],
    technologies: [
      'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
    ],
    outcomes: [
      'A manufacturing company reduced order processing time by 68% with a custom inventory management system',
      'A professional services firm increased consultant utilization by 23% using a custom resource allocation platform',
      'An e-commerce business decreased cart abandonment by 31% after implementing a streamlined checkout process'
    ]
  },
  {
    id: 'frontend-architecture',
    title: 'Frontend Architecture & Development',
    slug: 'frontend-architecture-development',
    problem: `Is your web application suffering from slow load times, poor user engagement, or high bounce rates? Many businesses struggle with outdated user interfaces that frustrate customers and limit conversion potential. Development teams often face challenges with inconsistent user experiences, code maintainability issues, and technical debt that slows down feature delivery and creates a poor impression of your brand.`,
    approach: `My approach to frontend development starts with understanding both user needs and business objectives. I create a solid architectural foundation using modern frontend frameworks like React and Next.js, emphasizing component reusability, performance, and maintainability. I implement a structured design system that ensures consistency and scalability while reducing development time for new features. Throughout the process, I focus on performance optimization and user experience, continuously measuring and improving metrics that directly impact user satisfaction and business outcomes.`,
    benefits: [
      'Improved conversion rates through intuitive, responsive user interfaces',
      'Faster page load times and optimized performance for better user retention',
      'Consistent user experience across all devices and screen sizes',
      'Reduced development time for new features through reusable components',
      'Enhanced brand perception through professional, polished user interfaces'
    ],
    technologies: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React Query', 'Webpack', 'Performance optimization', 'Responsive design', 'Accessibility (WCAG)'
    ],
    outcomes: [
      'An e-commerce platform saw a 42% increase in mobile conversions after a frontend redesign',
      'A SaaS application reduced bounce rates by 37% and increased session duration by 58% following UI/UX improvements',
      'A healthcare portal improved accessibility compliance and reduced page load time by 65%, significantly enhancing patient satisfaction'
    ]
  },
  {
    id: 'technical-consultation',
    title: 'Technical Consultation & Code Reviews',
    slug: 'technical-consultation-code-reviews',
    problem: `Is your development team facing complex architectural decisions, struggling with performance issues, or accumulating technical debt? Many organizations lack the specialized expertise needed to evaluate technical options and their long-term implications. This can lead to poor architecture choices, scalability problems, and security vulnerabilities that become increasingly expensive to fix as your application grows.`,
    approach: `I provide expert technical consultation that helps you navigate complex decisions with confidence. My approach begins with a thorough assessment of your current architecture, codebase, and development processes. I identify areas for improvement and provide detailed, actionable recommendations prioritized by business impact. For code reviews, I focus not just on finding issues but on providing educational feedback that helps your team level up. My goal is to transfer knowledge to your team throughout the engagement, ensuring they understand not just what to change, but why.`,
    benefits: [
      'Confidence in technical decisions through expert validation and guidance',
      'Reduced technical risk by identifying and addressing potential issues early',
      'Enhanced team capabilities through knowledge transfer and best practices',
      'Improved code quality leading to fewer bugs and reduced maintenance costs',
      'Optimized development processes that increase team productivity'
    ],
    technologies: [
      'Architecture review', 'Code quality assessment', 'Performance optimization', 'Security best practices', 'Development workflows', 'Team collaboration', 'Technical documentation'
    ],
    outcomes: [
      'A startup avoided a complete rewrite by identifying and refactoring key architectural components, saving 6 months of development time',
      'A financial services application identified and addressed security vulnerabilities before they could be exploited',
      'A development team increased velocity by 40% after implementing recommended workflow improvements and addressing technical debt'
    ]
  },
  {
    id: 'performance-optimization',
    title: 'Application Performance Optimization',
    slug: 'application-performance-optimization',
    problem: `Is your application suffering from slow page loads, poor responsiveness, or crashes under high traffic? Performance issues directly impact user satisfaction, conversion rates, and search engine rankings. Many businesses struggle with complex performance problems they don't have the specialized expertise to diagnose and fix, resulting in lost revenue and frustrated users.`,
    approach: `My performance optimization process begins with comprehensive profiling and measurement to identify specific bottlenecks rather than making assumptions. I analyze frontend rendering, API response times, database queries, and server configurations to pinpoint the root causes of performance issues. Based on this analysis, I develop a prioritized optimization plan focused on improvements that will have the greatest business impact. After implementing optimizations, I conduct rigorous testing to quantify improvements and ensure sustained performance under various load conditions.`,
    benefits: [
      'Faster page load times and improved responsiveness leading to better user retention',
      'Higher conversion rates as users experience a smoother, more responsive application',
      'Improved SEO rankings through better Core Web Vitals scores',
      'Reduced infrastructure costs by making more efficient use of resources',
      'Enhanced ability to handle traffic spikes without degraded performance'
    ],
    technologies: [
      'Lighthouse optimization', 'Core Web Vitals', 'Lazy loading', 'Code splitting', 'Image optimization', 'Caching strategies', 'Database query optimization', 'CDN implementation', 'Server-side rendering', 'Bundle analysis'
    ],
    outcomes: [
      'An e-commerce site reduced page load time by 73%, resulting in a 28% increase in conversion rate',
      'A content platform improved their Lighthouse performance score from 52 to 94, enhancing both user experience and SEO rankings',
      'A SaaS application reduced API response times by 87%, enabling a smoother user experience that increased user engagement metrics'
    ]
  }
];

export function getServiceById(id: string): ServiceDescription | undefined {
  return serviceDescriptions.find(service => service.id === id);
}

export function getServiceBySlug(slug: string): ServiceDescription | undefined {
  return serviceDescriptions.find(service => service.slug === slug);
}

export function getAllServices(): ServiceDescription[] {
  return serviceDescriptions;
}

export default serviceDescriptions;