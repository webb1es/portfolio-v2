import { CaseStudyOutline } from '../types';

export const caseStudyOutlines: CaseStudyOutline[] = [
  {
    id: 'cs-ecommerce-platform',
    title: 'E-commerce Platform Performance Optimization',
    clientIndustry: 'Retail / E-commerce',
    clientSize: 'Mid-size (50-200 employees)',
    isAnonymized: false,
    businessChallenge: `NexusCommerce was facing significant challenges with their e-commerce platform's performance. Page load times averaged 6-8 seconds, leading to high bounce rates (62%) and cart abandonment (78%). Their conversion rate had dropped to 1.2%, well below industry standards. With the holiday shopping season approaching, they needed a rapid solution to prevent substantial revenue loss.`,
    objectives: [
      'Reduce average page load time to under 2 seconds',
      'Improve mobile performance and responsiveness',
      'Optimize the checkout process to reduce abandonment',
      'Enhance overall user experience without a complete rewrite',
      'Implement solutions that could scale with holiday traffic surges'
    ],
    technicalChallenges: [
      'Large, unoptimized JavaScript bundles causing significant client-side rendering delays',
      'Inefficient database queries creating API bottlenecks during high traffic',
      'Outdated image delivery system without proper sizing or formats',
      'Lack of caching strategy resulting in unnecessary server requests',
      'Complex third-party integrations adding significant performance overhead',
      'Technical debt making code changes risky and time-consuming'
    ],
    solutionApproach: `I began with a comprehensive performance audit using Lighthouse, WebPageTest, and custom profiling tools to identify specific bottlenecks. After prioritizing issues by impact and implementation complexity, I developed a phased optimization plan focused on critical rendering path improvements and backend efficiency. Working closely with the client team, I implemented code splitting, lazy loading, and image optimization on the frontend while refactoring database queries and implementing efficient caching on the backend. Rather than suggesting a complete rewrite, I focused on strategic improvements that would deliver maximum impact with minimal risk.`,
    implementation: `The implementation followed a carefully structured approach. First, I optimized the critical rendering path by refactoring JavaScript bundles, implementing code splitting, and setting up efficient lazy loading for non-critical components. Next, I developed a modern image optimization pipeline using WebP format with appropriate fallbacks, responsive sizes, and lazy loading. On the backend, I refactored key database queries, implemented Redis caching for frequent operations, and optimized third-party API interactions. Throughout the process, I worked with the client team to transfer knowledge, ensuring they could maintain the optimizations. All changes were implemented with comprehensive testing to prevent regressions.`,
    technologies: [
      'React', 'Next.js', 'Redis', 'Webpack', 'Lighthouse', 'WebP images', 'Service Workers', 'PostgreSQL optimization', 'CDN configuration', 'Performance monitoring'
    ],
    methodologies: [
      'Performance-driven development', 'Progressive enhancement', 'Incremental optimization', 'A/B testing', 'Continuous performance monitoring'
    ],
    results: {
      description: `The performance optimizations delivered significant and measurable business impact for NexusCommerce:`,
      metrics: [
        'Reduced average page load time from 6.8s to 1.4s (79% improvement)',
        'Decreased bounce rate from 62% to 31% (50% improvement)',
        'Reduced cart abandonment from 78% to 42% (46% improvement)',
        'Increased conversion rate from 1.2% to 3.1% (158% improvement)',
        'Improved mobile conversion rate by 212%',
        'Achieved 99.98% uptime during Black Friday/Cyber Monday despite 3x normal traffic',
        'Reduced server costs by 42% despite handling more transactions'
      ]
    },
    clientFeedback: `"The performance improvements Webster delivered exceeded our expectations in every way. Not only did he solve our technical challenges, but the business impact was immediate and substantial. Our holiday season sales increased by 43% year-over-year, directly attributable to the improved user experience and conversion rates. Just as valuable was how clearly he explained the issues and solutions, enabling our team to maintain the improvements going forward."`,
    lessonsLearned: [
      'Early performance monitoring could have prevented many issues from developing',
      'More frequent, smaller optimizations are preferable to major overhauls',
      'Cross-functional team involvement helps prioritize optimizations with highest business impact',
      'Simple solutions often outperform complex ones for common performance issues',
      'Knowledge transfer throughout the process is essential for sustained performance'
    ]
  },
  {
    id: 'cs-saas-application',
    title: 'SaaS Workflow Automation Platform Architecture & Development',
    clientIndustry: 'Business Services / Professional Services',
    clientSize: 'Startup (10-50 employees)',
    isAnonymized: true,
    businessChallenge: `A professional services firm was struggling with fragmented workflows across multiple tools (CRM, project management, invoicing, resource allocation). This fragmentation was causing significant inefficiencies: employees spent 15+ hours weekly on manual data entry, customer information was frequently outdated or inconsistent, project profitability was difficult to track, and resource allocation was suboptimal. These issues were limiting the company's ability to scale operations and impacting client satisfaction.`,
    objectives: [
      'Develop a unified platform integrating client management, project workflows, time tracking, and billing',
      'Eliminate manual data transfer between systems',
      'Create real-time visibility into resource utilization and project profitability',
      'Build customizable workflows that adapt to different client requirements',
      'Design an architecture capable of scaling with the company growth'
    ],
    technicalChallenges: [
      'Integration with multiple third-party systems with inconsistent APIs',
      'Complex business logic and workflows requiring sophisticated state management',
      'Need for real-time updates across multiple user interfaces',
      'Granular permission requirements based on user roles and client relationships',
      'High data volume requiring efficient database design and query optimization',
      'Requirement for both web and mobile access with offline capabilities'
    ],
    solutionApproach: `I proposed a microservices-based architecture to allow independent scaling and development of core system components while maintaining data consistency through an event-driven approach. After conducting detailed workshops to map current workflows and identify optimization opportunities, I designed a flexible data model that could adapt to the company evolving needs. A key decision was implementing a real-time synchronization layer to ensure all users had up-to-date information while building in offline capabilities for field work. The solution leveraged existing third-party tools where appropriate while eliminating unnecessary data duplication and manual transfers.`,
    implementation: `The implementation was phased over six months, beginning with core user management, client data, and project structures. I built a Node.js backend using Express and TypeScript, with MongoDB as the primary database and Redis for caching and real-time features. The frontend was developed in React with TypeScript, using Redux for state management and React Query for data fetching. For mobile access, I developed a progressive web app with offline capabilities using service workers and local storage. Throughout development, I maintained comprehensive documentation and conducted regular knowledge transfer sessions with the client technical team.`,
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'GraphQL', 'WebSockets', 'Progressive Web App', 'Docker', 'AWS'
    ],
    methodologies: [
      'Domain-Driven Design', 'Event Sourcing', 'Agile development', 'Microservices architecture', 'Continuous Integration/Deployment'
    ],
    results: {
      description: `The custom SaaS platform transformed the client's operations and enabled significant business growth:`,
      metrics: [
        'Reduced administrative time by 83% (from 15+ hours to <3 hours per employee per week)',
        'Improved resource utilization by 42%, increasing billable hours without adding staff',
        'Decreased project delivery time by 28% through optimized workflow automation',
        'Reduced invoicing errors by 94% and shortened billing cycles by 11 days',
        'Increased customer satisfaction scores from 7.2 to 9.1 out of 10',
        'Enabled company growth from 32 to 78 employees while maintaining operational efficiency',
        'Provided 99.9% system uptime since launch'
      ]
    },
    clientFeedback: `"This platform has transformed how we operate. What previously required multiple systems and constant manual updates now happens automatically in one place. Our team can focus on client work instead of administrative tasks, and we have unprecedented visibility into our operations. The system has scaled perfectly as we've more than doubled in size, and the architecture decisions have proven excellent as we continue to add new features. This has been a true competitive advantage for our business."`,
    lessonsLearned: [
      'Early user feedback is essential for workflow automation that actually matches real-world usage',
      'Designing for flexibility from the start enables adaptation to unexpected business requirements',
      'Incremental migration from legacy systems reduces business disruption during implementation',
      'Investment in comprehensive testing pays dividends in system reliability',
      'Training and change management are as important as technical quality for successful adoption'
    ]
  },
  {
    id: 'cs-healthcare-portal',
    title: 'Healthcare Patient Portal with HIPAA Compliance',
    clientIndustry: 'Healthcare',
    clientSize: 'Mid-size (200-500 employees)',
    isAnonymized: false,
    businessChallenge: `HealthFirst Medical Group was struggling with an outdated patient portal that had poor user experience, limited functionality, and growing security concerns. Patient adoption was below 30%, and the system couldn't support modern features like telehealth, secure messaging, or online scheduling. Staff spent extensive time on phone calls for tasks that could be self-service, and the organization was concerned about maintaining HIPAA compliance with their aging infrastructure. They needed a modern, secure patient portal that would improve patient engagement while reducing administrative burden.`,
    objectives: [
      'Create a secure, HIPAA-compliant patient portal with enhanced functionality',
      'Improve user experience for patients of all ages and technical abilities',
      'Implement self-service features for appointments, prescription refills, and medical records',
      'Enable secure patient-provider messaging and telehealth integration',
      'Develop mobile-friendly interfaces accessible across all devices',
      'Establish comprehensive audit trails and security monitoring'
    ],
    technicalChallenges: [
      'Stringent HIPAA compliance and security requirements for protected health information',
      'Integration with existing electronic health record (EHR) system with limited API capabilities',
      'Need for strong authentication while maintaining accessibility for elderly patients',
      'Real-time synchronization of data between portal and clinical systems',
      'Complex permission model based on provider relationships and information sensitivity',
      'Requirement for extensive audit logging and security monitoring'
    ],
    solutionApproach: `I approached this project with security and compliance as foundational principles throughout the development lifecycle. After conducting stakeholder interviews with both clinical staff and patients, I designed a system architecture that maintained strict data segregation and implemented defense-in-depth security. A key decision was implementing a secure API gateway to mediate all interactions with the EHR system, providing an additional security layer and abstraction from the legacy system. For the frontend, I focused on intuitive design that worked well for users with varying technical abilities while implementing progressive enhancement to support older browsers.`,
    implementation: `I built the system using a modern, secure stack: a React frontend with TypeScript, a Node.js backend with Express, and PostgreSQL database with encrypted health data. All communication used TLS 1.3 with certificate pinning, and I implemented JWE (JSON Web Encryption) for API tokens. The authentication system used multi-factor authentication with accommodations for accessibility. For telehealth, I integrated WebRTC with end-to-end encryption and developed a custom scheduling system that integrated with the EHR. Throughout development, I conducted regular security audits and HIPAA compliance reviews, documenting all security measures for the client's compliance records.`,
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'WebRTC', 'End-to-end encryption', 'OAuth 2.0 with PKCE', 'FHIR integration', 'AWS (with BAA)', 'Docker'
    ],
    methodologies: [
      'Security by Design', 'Privacy by Design', 'HIPAA Security Rule compliance', 'Accessibility-driven development (WCAG AA)', 'Behavior-driven development'
    ],
    results: {
      description: `The new patient portal transformed patient engagement while maintaining the highest security standards:`,
      metrics: [
        'Increased patient portal adoption from 28% to 87% within six months of launch',
        'Reduced call volume for routine requests by 67%, freeing staff for higher-value activities',
        'Decreased no-show rates by 54% through automated reminders and easy rescheduling',
        'Enabled 12,000+ telehealth visits in the first year, creating a new service line',
        'Improved patient satisfaction scores from 3.2/5 to 4.7/5 for digital interactions',
        'Passed independent HIPAA security audit with zero high or medium findings',
        'Reduced administrative costs by approximately $380,000 annually'
      ]
    },
    clientFeedback: `"The patient portal Webster developed has transformed our practice. Our patients, even those who aren't tech-savvy, find it intuitive and helpful. The security implementation has given us complete confidence in our HIPAA compliance, which was a major concern. Most importantly, our staff has reclaimed countless hours previously spent on phone calls and paperwork, allowing them to focus on patient care. The ROI on this project was evident within the first three months, and it continues to pay dividends in operational efficiency and patient satisfaction."`,
    lessonsLearned: [
      'Involving actual patients in usability testing was crucial for adoption across age groups',
      'Building security and compliance into every phase of development prevented costly rework',
      'Starting with core functionality and adding features iteratively allowed for earlier launch and feedback',
      'Staff training was essential for them to become advocates for patient adoption',
      'Detailed documentation of security measures significantly simplified compliance audits'
    ]
  }
];

export function getCaseStudyOutlineById(id: string): CaseStudyOutline | undefined {
  return caseStudyOutlines.find(outline => outline.id === id);
}

export function getAllCaseStudyOutlines(): CaseStudyOutline[] {
  return caseStudyOutlines;
}

export default caseStudyOutlines;