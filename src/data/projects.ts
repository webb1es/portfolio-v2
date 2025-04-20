export interface Project {
    id: string;
    slug: string;
    title: string;
    client: string;
    clientAnonymized?: boolean;
    problem: string;
    shortDescription: string;
    fullDescription: string;
    industry: string;
    featuredImage: string;
    images: string[];
    technologies: Array<{
        name: string;
        category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
    }>;
    outcomes: Array<{
        metric: string;
        value: string;
        description: string;
    }>;
    keyFeatures: Array<{
        title: string;
        description: string;
        icon?: string;
    }>;
    approach: string;
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        company: string;
    };
    isFeatured: boolean;
    date: string;
    duration: string;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'ecommerce-platform-redesign',
        title: 'E-commerce Platform Redesign',
        client: 'Fashion Retailer',
        clientAnonymized: true,
        problem: 'High cart abandonment rate and poor mobile experience leading to lost sales',
        shortDescription: 'Redesigned and optimized an e-commerce platform to improve user experience and conversion rates.',
        fullDescription: `A leading fashion retailer was struggling with high cart abandonment rates (>75%) and a poor mobile experience, 
resulting in significant lost revenue. Their existing platform was slow, difficult to navigate, and not optimized for conversions, 
especially on mobile devices which accounted for 65% of their traffic.`,
        industry: 'E-commerce',
        featuredImage: '/images/projects/ecommerce.svg',
        images: ['/images/projects/ecommerce.svg', '/images/projects/ecommerce-mobile.svg'],
        technologies: [
            { name: 'React', category: 'frontend' },
            { name: 'Next.js', category: 'frontend' },
            { name: 'Tailwind CSS', category: 'frontend' },
            { name: 'Redux', category: 'frontend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'Express', category: 'backend' },
            { name: 'MongoDB', category: 'database' },
            { name: 'Vercel', category: 'devops' }
        ],
        outcomes: [
            { metric: 'Conversion Rate', value: '+32%', description: 'Increased conversion rate from 2.3% to 3.1%' },
            { metric: 'Cart Abandonment', value: '-45%', description: 'Reduced cart abandonment from 75% to 41%' },
            { metric: 'Page Load Time', value: '-67%', description: 'Decreased average page load time from 4.2s to 1.4s' },
            { metric: 'Mobile Transactions', value: '+53%', description: 'Increased mobile transactions by 53%' }
        ],
        keyFeatures: [
            {
                title: 'Streamlined Checkout Process',
                description: 'Reduced checkout steps from 5 to 3 and implemented a persistent shopping cart',
                icon: 'shopping-cart'
            },
            {
                title: 'Personalized Product Recommendations',
                description: 'Integrated ML-based recommendation engine to show relevant products',
                icon: 'sparkles'
            },
            {
                title: 'Responsive Mobile-First Design',
                description: 'Completely rebuilt UI with a mobile-first approach and touch-friendly interface',
                icon: 'device-phone-mobile'
            },
            {
                title: 'Performance Optimization',
                description: 'Implemented image optimization, code splitting, and server-side rendering',
                icon: 'bolt'
            }
        ],
        approach: `I began with a comprehensive audit of the existing platform, identifying performance bottlenecks and UX pain points. 
Working closely with the client's product team, we prioritized improvements based on potential ROI. 
Using a modern tech stack with React and Next.js, I rebuilt the frontend with a mobile-first approach, focusing on speed and usability. 
Server-side rendering was implemented for critical pages to improve SEO and Core Web Vitals metrics. 
The checkout process was completely redesigned to remove friction points, and a headless architecture was adopted to improve flexibility and performance.`,
        testimonial: {
            quote: `Our customers love the new interface. It's faster, more intuitive, and has significantly improved our sales. 
The mobile experience is now our strongest conversion channel when it was previously our weakest.`,
            author: "Sarah Johnson",
            role: "CTO",
            company: "Fashion Retailer"
        },
        isFeatured: true,
        date: '2023-11',
        duration: '3 months'
    },
    {
        id: '2',
        slug: 'data-dashboard',
        title: 'Real-time Data Visualization Dashboard',
        client: 'FinancePro Analytics',
        problem: 'Inability to monitor business metrics in real-time led to delayed decision making',
        shortDescription: 'Built a real-time data visualization dashboard for monitoring critical business metrics.',
        fullDescription: `FinancePro Analytics needed a real-time dashboard to monitor market trends and business KPIs. 
Their existing solution involved manual data pulls and Excel reports, which led to decision-making delays of 24-48 hours. 
In a fast-moving financial market, this lag was causing missed opportunities and delayed responses to market changes.`,
        industry: 'Finance',
        featuredImage: '/images/projects/dashboard.svg',
        images: ['/images/projects/dashboard.svg', '/images/projects/dashboard-mobile.svg'],
        technologies: [
            { name: 'React', category: 'frontend' },
            { name: 'D3.js', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'WebSockets', category: 'frontend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'Redis', category: 'database' },
            { name: 'AWS', category: 'devops' }
        ],
        outcomes: [
            { metric: 'Data Processing Time', value: '-65%', description: 'Reduced data processing time from hours to minutes' },
            { metric: 'Decision Time', value: '24x faster', description: 'Enabled near real-time decision making instead of 24-hour delays' },
            { metric: 'User Adoption', value: '+85%', description: 'Increased dashboard adoption rate among team members' },
            { metric: 'ROI', value: '$1.2M', description: 'Estimated annual return through faster market responses' }
        ],
        keyFeatures: [
            {
                title: 'Real-time Data Streaming',
                description: 'Implemented WebSocket connections for live data updates without page refreshes',
                icon: 'arrow-path'
            },
            {
                title: 'Interactive Visualizations',
                description: 'Created interactive charts and graphs with drill-down capabilities',
                icon: 'chart-bar'
            },
            {
                title: 'Customizable Dashboard',
                description: 'Allowed users to customize their view with drag-and-drop widgets',
                icon: 'squares-2x2'
            },
            {
                title: 'Alerting System',
                description: 'Implemented threshold-based alerts for critical metrics',
                icon: 'bell-alert'
            }
        ],
        approach: `Starting with a deep dive into the client's data structure and reporting needs, I designed a system architecture that could handle real-time updates efficiently. 
I built a scalable backend with Node.js that processed and cached data using Redis, with persistent storage in PostgreSQL. 
On the frontend, I used React with TypeScript for type safety and D3.js for powerful, interactive visualizations. 
WebSockets enabled real-time updates without refreshing. I implemented a widget-based system that allowed users to customize their dashboards to their specific roles and needs, 
with configurations saved server-side for a consistent experience across devices.`,
        testimonial: {
            quote: `The dashboard revolutionized how we monitor market performance. Having real-time data visualizations has improved our decision-making speed dramatically and given us a competitive edge.`,
            author: "Michael Chen",
            role: "Head of Analytics",
            company: "FinancePro Analytics"
        },
        isFeatured: true,
        date: '2023-08',
        duration: '4 months'
    },
    {
        id: '3',
        slug: 'healthcare-portal',
        title: 'Healthcare Patient Portal',
        client: 'MediCare Health Services',
        problem: 'Paper-based patient records and manual appointment scheduling caused inefficiencies and poor patient experience',
        shortDescription: 'Developed a HIPAA-compliant patient portal for a healthcare provider.',
        fullDescription: `MediCare Health Services was struggling with paper-based records and manual appointment scheduling. 
This resulted in administrative bottlenecks, scheduling errors, and a frustrating patient experience. 
They needed a secure, HIPAA-compliant digital solution that would streamline operations while improving patient engagement and satisfaction.`,
        industry: 'Healthcare',
        featuredImage: '/images/projects/healthcare.svg',
        images: ['/images/projects/healthcare.svg', '/images/projects/healthcare-mobile.svg'],
        technologies: [
            { name: 'Next.js', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'Tailwind CSS', category: 'frontend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'Express', category: 'backend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'Auth0', category: 'other' },
            { name: 'AWS', category: 'devops' }
        ],
        outcomes: [
            { metric: 'Appointment No-shows', value: '-48%', description: 'Reduced missed appointments through automated reminders' },
            { metric: 'Administrative Time', value: '-62%', description: 'Reduced time spent on paperwork and scheduling' },
            { metric: 'Patient Satisfaction', value: '+45%', description: 'Improved patient satisfaction scores' },
            { metric: 'Monthly Active Users', value: '50,000+', description: 'Achieved strong adoption among patient base' }
        ],
        keyFeatures: [
            {
                title: 'Secure Patient Records',
                description: 'HIPAA-compliant digital health records with encryption at rest and in transit',
                icon: 'shield-check'
            },
            {
                title: 'Online Appointment Scheduling',
                description: 'Self-service appointment booking with integration to doctor calendars',
                icon: 'calendar'
            },
            {
                title: 'Secure Messaging',
                description: 'HIPAA-compliant messaging system between patients and providers',
                icon: 'chat-bubble-left-right'
            },
            {
                title: 'Prescription Management',
                description: 'Digital prescription tracking and refill requests',
                icon: 'clipboard-document-list'
            }
        ],
        approach: `Security and compliance were the primary concerns for this project. I began with a comprehensive security architecture that ensured HIPAA compliance at every level. 
Using Next.js for the frontend provided a good balance of performance and developer experience, while TypeScript ensured type safety across the codebase. 
The backend was built with Node.js and Express, with PostgreSQL providing a robust, relational database for patient records. 
Auth0 was implemented for secure authentication with multi-factor options. The entire system was deployed on AWS with appropriate security controls and monitoring. 
Throughout development, regular security audits and penetration testing were conducted to ensure compliance and data protection.`,
        testimonial: {
            quote: `This portal has transformed how we interact with patients. The reduction in administrative overhead alone paid for the project within months, 
and our patients love the convenience of managing their care online.`,
            author: "Dr. Emily Rodriguez",
            role: "Medical Director",
            company: "MediCare Health Services"
        },
        isFeatured: true,
        date: '2023-05',
        duration: '6 months'
    },
    {
        id: '4',
        slug: 'saas-application-optimization',
        title: 'SaaS Application Performance Optimization',
        client: 'CloudWork Software',
        problem: 'Slow performance and poor scaling were causing customer complaints and churn',
        shortDescription: 'Optimized a slow, resource-intensive SaaS application to improve performance and user experience.',
        fullDescription: `CloudWork's flagship SaaS product was suffering from performance issues as their customer base grew. 
Page load times had increased to over 6 seconds, API responses were slow, and the application would frequently crash during peak usage. 
These issues were leading to negative reviews, support tickets, and customer churn of approximately 5% per month.`,
        industry: 'SaaS',
        featuredImage: '/images/projects/saas.svg',
        images: ['/images/projects/saas.svg', '/images/projects/saas-mobile.svg'],
        technologies: [
            { name: 'React', category: 'frontend' },
            { name: 'Webpack', category: 'frontend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'MongoDB', category: 'database' },
            { name: 'Redis', category: 'database' },
            { name: 'Docker', category: 'devops' },
            { name: 'Kubernetes', category: 'devops' },
            { name: 'AWS', category: 'devops' }
        ],
        outcomes: [
            { metric: 'Page Load Time', value: '-73%', description: 'Reduced average page load from 6.2s to 1.7s' },
            { metric: 'API Response Time', value: '-81%', description: 'Decreased API response times from 1.8s to 0.34s' },
            { metric: 'Server Costs', value: '-35%', description: 'Reduced cloud infrastructure costs' },
            { metric: 'Customer Churn', value: '-60%', description: 'Decreased monthly customer churn from 5% to 2%' }
        ],
        keyFeatures: [
            {
                title: 'Frontend Optimization',
                description: 'Code splitting, tree shaking, and lazy loading of components',
                icon: 'arrow-trending-down'
            },
            {
                title: 'Database Optimization',
                description: 'Added indexes, optimized queries, and implemented caching',
                icon: 'database'
            },
            {
                title: 'Infrastructure Scaling',
                description: 'Migrated to containerized microservices with auto-scaling',
                icon: 'server'
            },
            {
                title: 'Monitoring & Alerting',
                description: 'Implemented comprehensive performance monitoring and alerting',
                icon: 'chart-bar'
            }
        ],
        approach: `I began with a comprehensive performance audit, using tools like Lighthouse, Chrome DevTools, and New Relic to identify bottlenecks. 
On the frontend, I implemented code splitting, lazy loading, and optimized React rendering patterns. 
Backend optimizations included query optimization, database indexing, and implementing Redis for caching frequently accessed data. 
The monolithic architecture was gradually refactored into microservices using Docker and Kubernetes, which improved scalability and resource utilization. 
Throughout the process, I implemented detailed monitoring and alerting to maintain visibility into performance metrics and quickly address any regressions.`,
        testimonial: {
            quote: `Our dashboard went from frustratingly slow to lightning fast. User complaints dropped to zero, and we've seen a significant improvement in user engagement and retention.`,
            author: "Alex Turner",
            role: "Product Manager",
            company: "CloudWork Software"
        },
        isFeatured: false,
        date: '2023-02',
        duration: '2 months'
    },
    {
        id: '5',
        slug: 'mobile-banking-app',
        title: 'Mobile Banking Application',
        client: 'Community Trust Bank',
        problem: 'Outdated mobile banking experience was losing customers to digital-first competitors',
        shortDescription: 'Developed a modern, secure mobile banking application with advanced features.',
        fullDescription: `Community Trust Bank was losing younger customers to digital-first banks due to their outdated mobile experience. 
Their existing app had limited functionality, poor UI/UX, and lacked features that modern banking customers expect. 
They needed a complete overhaul to remain competitive in an increasingly digital banking landscape.`,
        industry: 'Banking',
        featuredImage: '/images/projects/banking.svg',
        images: ['/images/projects/banking.svg', '/images/projects/banking-screens.svg'],
        technologies: [
            { name: 'React Native', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'NestJS', category: 'backend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'AWS', category: 'devops' },
            { name: 'Terraform', category: 'devops' },
            { name: 'OAuth 2.0', category: 'other' }
        ],
        outcomes: [
            { metric: 'Mobile Engagement', value: '+167%', description: 'Increased mobile banking active users' },
            { metric: 'Feature Usage', value: '+218%', description: 'Increased usage of digital banking features' },
            { metric: 'New Accounts', value: '+23%', description: 'Increased new account signups from mobile channel' },
            { metric: 'App Store Rating', value: '4.7/5', description: 'Improved from previous 2.3/5 rating' }
        ],
        keyFeatures: [
            {
                title: 'Biometric Authentication',
                description: 'Secure login with fingerprint and face recognition',
                icon: 'finger-print'
            },
            {
                title: 'Real-time Transaction Alerts',
                description: 'Instant notifications for account activity',
                icon: 'bell-alert'
            },
            {
                title: 'Budgeting Tools',
                description: 'Expense categorization and budget tracking features',
                icon: 'chart-pie'
            },
            {
                title: 'Mobile Check Deposit',
                description: 'Capture and deposit checks using device camera',
                icon: 'camera'
            }
        ],
        approach: `Security was paramount for this project, so I started with a comprehensive security architecture review. 
I chose React Native to provide a consistent experience across iOS and Android while maintaining a single codebase. 
The backend was built with Node.js and NestJS for a well-structured, secure API layer. 
I implemented biometric authentication, end-to-end encryption for sensitive data, and real-time fraud detection systems. 
The UI was designed with accessibility in mind, following banking industry best practices and regulations. 
Throughout development, regular security audits and penetration testing were conducted to ensure the highest security standards.`,
        testimonial: {
            quote: `This app has completely transformed how our customers interact with us. We've not only stopped losing younger customers to digital banks, 
but we're now actively winning them over from our competitors.`,
            author: "Jennifer Martinez",
            role: "Digital Banking Director",
            company: "Community Trust Bank"
        },
        isFeatured: false,
        date: '2022-10',
        duration: '5 months'
    },
    {
        id: '6',
        slug: 'inventory-management-system',
        title: 'Inventory Management System',
        client: 'Global Manufacturing Inc.',
        clientAnonymized: true,
        problem: 'Manual inventory tracking was causing stockouts, overstocking, and fulfillment delays',
        shortDescription: 'Built a custom inventory management system with real-time tracking and predictive analytics.',
        fullDescription: `A global manufacturing company was struggling with inefficient inventory management across multiple warehouses. 
Their manual, spreadsheet-based system led to frequent stockouts of critical components, overstocking of others, and delays in order fulfillment. 
This inefficiency was costing them an estimated $2M annually in lost sales, excess inventory, and expedited shipping.`,
        industry: 'Manufacturing',
        featuredImage: '/images/projects/inventory.svg',
        images: ['/images/projects/inventory.svg', '/images/projects/inventory-mobile.svg'],
        technologies: [
            { name: 'React', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'Material UI', category: 'frontend' },
            { name: 'GraphQL', category: 'backend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'Redis', category: 'database' },
            { name: 'Azure', category: 'devops' }
        ],
        outcomes: [
            { metric: 'Stockout Incidents', value: '-86%', description: 'Dramatically reduced stockout occurrences' },
            { metric: 'Inventory Carrying Costs', value: '-22%', description: 'Reduced excess inventory and carrying costs' },
            { metric: 'Order Fulfillment Time', value: '-47%', description: 'Decreased average time to fulfill orders' },
            { metric: 'Annual Savings', value: '$1.7M', description: 'Estimated annual savings from increased efficiency' }
        ],
        keyFeatures: [
            {
                title: 'Real-time Inventory Tracking',
                description: 'Barcode/RFID integration for real-time inventory visibility',
                icon: 'qr-code'
            },
            {
                title: 'Predictive Analytics',
                description: 'ML-powered demand forecasting and reorder point optimization',
                icon: 'chart-bar'
            },
            {
                title: 'Multi-warehouse Management',
                description: 'Centralized control of inventory across multiple locations',
                icon: 'building-office'
            },
            {
                title: 'Supplier Integration',
                description: 'API connections to supplier systems for automated ordering',
                icon: 'truck'
            }
        ],
        approach: `I took a data-first approach, starting with understanding the company's inventory data structure, operational workflow, and integration requirements. 
I designed a system architecture using GraphQL for flexible, efficient data queries and React with TypeScript for a robust frontend. 
The system was designed to integrate with existing ERP systems via APIs, as well as directly with hardware like barcode scanners and RFID readers. 
A significant challenge was implementing predictive analytics for demand forecasting, which required close collaboration with the client's supply chain team 
to develop algorithms that accurately predicted reorder points based on historical data, seasonality, and market trends.`,
        testimonial: {
            quote: `This system has transformed our operations. We've gone from constantly fighting fires with stockouts and delays to a smooth, predictable inventory flow. 
The ROI has been remarkable, but even more valuable is the stress reduction for our team.`,
            author: "Robert Johnson",
            role: "VP of Operations",
            company: "Global Manufacturing"
        },
        isFeatured: false,
        date: '2022-07',
        duration: '4 months'
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter(project => project.isFeatured);
}

export function getProjectsByTechnology(technology: string): Project[] {
    return projects.filter(project =>
        project.technologies.some(tech =>
            tech.name.toLowerCase() === technology.toLowerCase()
        )
    );
}

export function getProjectsByIndustry(industry: string): Project[] {
    return projects.filter(project =>
        project.industry.toLowerCase() === industry.toLowerCase()
    );
}

export function getAllProjects(): Project[] {
    return [...projects];
}

export function getProjectCategories(): { industries: string[], technologies: string[] } {
    const industries = [...new Set(projects.map(project => project.industry))];

    const technologies = [...new Set(
        projects.flatMap(project =>
            project.technologies.map(tech => tech.name)
        )
    )];

    return { industries, technologies };
}
