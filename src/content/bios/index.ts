import { Bio } from '../types';

export const bios: Bio[] = [
  {
    type: 'long',
    focusArea: 'overall expertise',
    content: `As a Senior Software Engineer with over 8 years of experience, I specialize in transforming complex business requirements into elegant, high-performance web applications. My expertise lies in the intersection of technical excellence and business value, where I help clients solve their most challenging problems through thoughtful architecture and clean, maintainable code.

Throughout my career, I've worked with businesses ranging from early-stage startups to established enterprises, consistently delivering solutions that not only meet technical specifications but drive measurable business outcomes. I take pride in my ability to communicate complex technical concepts in accessible language, ensuring that clients always understand the "why" behind my recommendations.

My technical toolkit includes deep expertise in React, Next.js, TypeScript, and Node.js, complemented by a strong foundation in performance optimization, security best practices, and scalable architecture. I approach each project as a true partnership, leveraging these skills to build solutions that align perfectly with your business objectives.

What sets me apart is my focus on the long-term success of your project. I don't just build features—I create sustainable, adaptable solutions designed to grow with your business. My collaborative approach emphasizes transparency, regular communication, and knowledge sharing, ensuring that you're empowered to maintain and extend your application long after our engagement ends.`
  },
  {
    type: 'medium',
    focusArea: 'technical problem-solving',
    content: `I'm a Senior Software Engineer specializing in building high-performance web applications that solve real business challenges. With expertise in React, Next.js, TypeScript, and Node.js, I create scalable, maintainable solutions that align with your strategic objectives.

My approach combines technical excellence with a deep understanding of business value. I focus on translating complex requirements into elegant architectures that not only work flawlessly but adapt to your evolving needs. Clients appreciate my clear communication, reliable delivery, and commitment to building solutions that drive measurable outcomes.

Whether you're facing performance bottlenecks, scaling challenges, or need to bring an innovative product to market, I provide the technical expertise and strategic guidance to help you succeed.`
  },
  {
    type: 'short',
    focusArea: 'client outcomes',
    content: `Senior Software Engineer specializing in building high-performance web applications that solve real business problems. I combine technical expertise in React, Next.js, and TypeScript with a focus on measurable outcomes, helping clients transform their ideas into successful digital products.`
  },
  {
    type: 'medium',
    focusArea: 'consulting and collaboration',
    content: `As a technical consultant and Senior Software Engineer, I help businesses navigate complex development challenges and implement solutions that drive growth. My collaborative approach combines deep technical expertise with clear communication, ensuring that all stakeholders understand the path forward.

I specialize in React, Next.js, TypeScript, and Node.js, with particular focus on performance optimization, maintainable architecture, and secure development practices. Having worked with companies across various industries, I bring both technical skills and business acumen to every engagement.

My goal is to not only deliver exceptional code but to serve as a trusted advisor who helps you make informed technical decisions aligned with your business objectives. Whether you need a complete application built from scratch or assistance with an existing project, I provide the expertise and guidance to ensure success.`
  },
  {
    type: 'short',
    focusArea: 'technology expertise',
    content: `Senior Software Engineer with expertise in React, Next.js, TypeScript, and Node.js. I specialize in building scalable web applications with clean architecture, optimal performance, and maintainable code that delivers real business value.`
  }
];

export function getBioByType(type: Bio['type']): Bio | undefined {
  return bios.find(bio => bio.type === type);
}

export function getBioByFocus(focus: string): Bio | undefined {
  return bios.find(bio => bio.focusArea === focus);
}

export default bios;