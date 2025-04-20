import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Michael Chen',
    clientTitle: 'CTO',
    clientCompany: 'NexusCommerce',
    content: `Websters problem-solving abilities are exceptional. We came to him with a complex technical challenge that had stumped our internal team for weeks. Not only did he quickly identify the root cause, but he proposed a solution that was simpler and more effective than we had imagined. His approach saved us countless development hours and resulted in a more robust application. I particularly appreciated how he took the time to explain his thinking, ensuring our team understood the solution and could maintain it going forward.`,
    focus: 'problem-solving',
    projectType: 'E-commerce platform optimization',
    isAnonymized: false
  },
  {
    id: 'testimonial-2',
    clientName: 'Sarah Johnson',
    clientTitle: 'Product Manager',
    clientCompany: 'HealthTech Solutions',
    content: `Communication is often a challenge when working with technical experts, but Webster stands out for his exceptional ability to bridge the gap between technical and non-technical stakeholders. Throughout our project, he consistently translated complex concepts into clear, actionable insights that helped our entire team make informed decisions. His weekly updates were comprehensive yet concise, and he was always responsive to questions. This level of communication gave us complete confidence in the project direction and eliminated the anxiety that often comes with technical projects.`,
    focus: 'communication',
    projectType: 'Healthcare portal development',
    isAnonymized: false
  },
  {
    id: 'testimonial-3',
    clientName: 'David Rodriguez',
    clientTitle: 'Founder & CEO',
    clientCompany: '',
    content: `Websters technical expertise exceeded our expectations in every way. The architecture he designed for our application was nothing short of brilliant - scalable, maintainable, and perfectly aligned with our business needs. What impressed me most was his deep knowledge across the entire stack. From optimizing database queries to implementing complex frontend features, he delivered solutions that were always elegant and efficient. The code quality was exceptional, and his adherence to best practices has made ongoing development much easier for our team.`,
    focus: 'technical-expertise',
    projectType: 'SaaS application development',
    isAnonymized: true
  },
  {
    id: 'testimonial-4',
    clientName: 'Jennifer Taylor',
    clientTitle: 'Operations Director',
    clientCompany: 'LogisticsPro',
    content: `The results Webster delivered transformed our business operations. Our legacy system was causing significant inefficiencies and limiting our growth. The custom application he built for us automated critical workflows, integrated previously siloed data sources, and provided actionable analytics that have improved our decision-making. Within three months of deployment, we saw a 42% reduction in processing time and a 28% increase in customer satisfaction scores. These measurable improvements have directly contributed to our revenue growth and competitive advantage.`,
    focus: 'outcomes',
    projectType: 'Custom workflow automation system',
    isAnonymized: false
  },
  {
    id: 'testimonial-5',
    clientName: 'Robert Kim',
    clientTitle: 'Director of Engineering',
    clientCompany: 'TechStartup Inc.',
    content: `Working with Webster was a true partnership that went beyond typical client-consultant relationships. He took the time to understand our business goals, not just our technical requirements, which resulted in solutions that addressed our actual needs rather than just checking requirement boxes. His proactive approach to identifying potential issues before they became problems saved us significant time and resources. Even after project completion, he has been reliable for follow-up questions and additional guidance. I would not hesitate to work with him again.`,
    focus: 'relationship',
    projectType: 'Technical consultation and architecture design',
    isAnonymized: false
  },
  {
    id: 'testimonial-6',
    clientName: 'Emma Wilson',
    clientTitle: 'Marketing Director',
    clientCompany: 'Brand Elevate',
    content: `As someone without a technical background, I was concerned about managing a web application project. Webster made the process painless by explaining technical concepts in terms I could understand and guiding me through decisions with patience and clarity. The application he delivered has revolutionized how we interact with our customers, increasing engagement by 67% and significantly improving our lead conversion rates. More importantly, he delivered on time and on budget with no surprises. I could not recommend him more highly for non-technical founders or executives.`,
    focus: 'communication',
    projectType: 'Interactive marketing platform',
    isAnonymized: false
  }
];

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find(testimonial => testimonial.id === id);
}

export function getTestimonialsByFocus(focus: Testimonial['focus']): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.focus === focus);
}

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export default testimonials;