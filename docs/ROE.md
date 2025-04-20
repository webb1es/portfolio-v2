# Client-Focused AI Agent Prompts

## Important Instructions for All Phases

Before implementing any phase, please note:

1. Reference the color palette defined in `docs/THEMES.md` for styling
2. Follow the Rules of Engagement in `docs/ROE.md` for code quality standards
3. The goal is to create a client-acquisition focused portfolio as outlined in `docs/PLAN.md`
4. Use modern, clean code practices with TypeScript and Tailwind CSS
5. Focus on conversion-oriented design that makes it easy for clients to hire me

## Phase 1: Client Conversion Foundation ✅

```
Create a Next.js portfolio website with TypeScript and Tailwind CSS specifically designed to attract potential clients and make it easy for them to hire me. For this first phase, focus on:

1. Project initialization:
   - Next.js with App Router
   - TypeScript (strict mode)
   - Tailwind CSS
   - ESLint configuration

2. Setup for a dark theme with colors from docs/THEMES.md:
   - Use the Dark Theme color palette for default styling
   - Implement the gradient combinations as specified
   - Ensure proper color contrast for accessibility

3. Create a conversion-focused layout with:
   - Header with navigation (Home, Services, Work, Blog, Contact)
   - Prominent "Available for Hire" status indicator
   - CTA button for "Schedule a Consultation" in the header
   - Mobile-friendly navigation that prioritizes contact options
   - Footer with contact information and social proof elements
   - Dark/light mode toggle that saves preference to localStorage

4. Implement a client-focused homepage structure (don't add content yet):
   - Hero section with value proposition area
   - Client testimonial section
   - Services overview section
   - Featured work section
   - Contact/booking section

Make the site fully responsive and follow accessibility standards (WCAG AA). Structure the code to be modular and maintainable with proper TypeScript typing.

The foundation should emphasize professionalism and make it easy for potential clients to understand my value and take action to hire me.

Read docs/THEMES.md carefully for the specific color palette, and follow docs/ROE.md for code quality guidelines.
```

## Phase 2: Value Proposition & Services ✅

```
Building on the portfolio website foundation, implement the homepage and services sections that clearly communicate my value to potential clients:

1. Homepage hero section:
   - Strong headline focusing on client problems I solve
   - Professional subtitle "Senior Software Engineer"
   - Brief value proposition (1-2 sentences about client benefits)
   - "Available for Projects" status with estimated availability date
   - Two CTAs: "See My Work" and "Schedule a Consultation"
   - Subtle gradient animations using the gradients defined in docs/THEMES.md

2. Services section:
   - Create 3-4 clear service offerings with:
     - Service title (e.g., "Custom Web Application Development")
     - Description focusing on client benefits
     - Key technologies used (as visually appealing tags)
     - Typical timeframe or process
   - Add "Custom Project" option for unique client needs
   - Include mini case study example for each service
   - Add testimonial relevant to each service type

3. Social proof elements:
   - Client testimonials carousel (3-4 testimonials)
   - Logos of past clients or notable companies
   - Key metrics or achievements (projects completed, years of experience)
   - Simple process explanation (discovery → proposal → development → delivery)

Implement subtle animations using Motion that enhance the professional feel. Ensure all components are responsive and maintain accessibility standards. Focus on clear user paths that guide potential clients toward contacting me.

All content should emphasize the benefits to clients rather than just listing skills. Use persuasive, confident language that positions me as a solution provider.

Continue to use the color palette in docs/THEMES.md and follow the code quality guidelines in docs/ROE.md. Refer to docs/PLAN.md for the overall client conversion strategy.
```

## Phase 3: Work Portfolio & Case Studies ✅

```
Enhance the portfolio website with a client-focused project showcase and detailed case studies:

1. Projects overview page:
   - Filterable grid of projects with categories relevant to client needs
   - Each project card should include:
     - Compelling project image
     - Clear project title
     - Client name (if public)
     - Key problem solved
     - Primary technologies used
     - Measurable outcome or result
   - Filter by industry, technology, or problem type
   - Sort options (latest, most impactful)

2. Case study template focusing on client results:
   - Client challenge section (the problem that needed solving)
   - Solution approach with process explanation
   - Technology decisions with justifications
   - Key features implemented with visual examples
   - Measurable outcomes and business impact
   - Client testimonial related to the project
   - Technologies used displayed as interactive tags
   - Clear "Similar Project Needed?" CTA at the bottom

3. Dynamic routing and data:
   - Set up dynamic routes for case studies (/work/[slug])
   - Create structured JSON data for 4-6 showcase projects
   - Implement schema for project data with TypeScript interfaces

Make all components responsive and accessible. Use animations thoughtfully to highlight key information. Throughout the case studies, emphasize problem-solving skills, communication process, and measurable client outcomes.

Each case study should tell a compelling story that helps potential clients envision how I could solve their problems too. Include specific metrics where possible (e.g., "Reduced load time by 40%", "Increased conversion by 25%").

Continue using the color palette in docs/THEMES.md, with the gradients used strategically to highlight important elements. Follow the code quality standards in docs/ROE.md and the client conversion approach in docs/PLAN.md.
```

## Phase 4: Blog & Authority Content ✅

```
Implement a strategic blog section designed to demonstrate expertise to potential clients:

1. Blog overview page:
   - Featured article with prominent placement
   - Article grid with clear categorization
   - Each article card should include:
     - Relevant image
     - Compelling title
     - Brief description
     - Estimated reading time
     - Publication date
     - Category tag(s)
   - Category filter focused on client-relevant topics
   - Search functionality for finding specific content

2. Article template optimized for establishing authority:
   - Clean, professional reading experience
   - Clear typography with excellent readability
   - Table of contents for longer articles
   - Code snippets with syntax highlighting (when relevant)
   - Highlighted key takeaways or insights
   - Author section with brief expertise highlight
   - Related articles section
   - "Hire Me" CTA within the content

3. Strategic content examples:
   - Create 2-3 sample articles that demonstrate expertise
   - Focus topics on common client problems and solutions
   - Include technical insights that showcase depth of knowledge
   - Add problem/solution frameworks clients can relate to

4. SEO implementation:
   - Proper metadata for all pages
   - Structured data for articles
   - Focus on client-relevant search terms
   - Optimized heading structure

Make sure all content is professionally presented with appropriate spacing and typography. The blog should position me as a thought leader while maintaining a client-acquisition focus through strategic CTAs and relevant topics.

Include an email capture form for visitors who want to be notified of new articles, creating a nurturing path for potential clients who aren't ready to hire immediately.

Continue using the color scheme defined in docs/THEMES.md, maintain the code quality standards in docs/ROE.md, and focus on the client conversion goals outlined in docs/PLAN.md.
```

## Phase 5: Contact & Booking System ✅

```
Implement a frictionless contact and booking system designed to convert interested visitors into clients:

1. Contact page with multiple options:
   - Professional contact form with fields for:
     - Name
     - Email
     - Company/Organization
     - Project type (dropdown with my service categories)
     - Budget range (optional dropdown)
     - Project timeline (optional dropdown)
     - Project description
   - Direct email alternative clearly displayed
   - Response time expectation ("I typically respond within 24 hours")

2. Consultation booking system:
   - Integration with Cal.com or similar scheduling tool
   - Available time slots for 30-minute consultations
   - Brief questionnaire before booking
   - Confirmation and reminder system
   - Option to add to Google/Outlook calendar

3. About/credentials section:
   - Professional photo
   - Detailed professional background focused on client benefits
   - Specialized skills and expertise areas
   - Certifications and education
   - Work approach and philosophy
   - Personal interests (brief and relevant)

4. FAQ section addressing client concerns:
   - Typical engagement process
   - Payment terms and methods
   - Project timeline expectations
   - Communication during projects
   - Maintenance and support options
   - Common client questions

Add subtle animations for form submission and booking confirmation. Ensure all forms have proper validation with helpful error messages. The entire contact experience should feel professional, reassuring, and efficient.

Implement a "success state" after form submission that sets expectations for next steps. Optimize the path from initial interest to scheduled consultation, minimizing friction at each step.

Continue using the color scheme from docs/THEMES.md, follow the code quality guidelines in docs/ROE.md, and maintain focus on the client acquisition goals outlined in docs/PLAN.md.
```

## Phase 6: Conversion Optimization & Launch ✅

```
Finalize the portfolio website with conversion optimization features and prepare for launch:

1. Conversion path optimization:
   - Implement strategic CTAs throughout the site
   - Create a cohesive user journey from any entry point to contact
   - Add testimonials at key decision points
   - Implement subtle animations for important elements
   - Ensure mobile conversion paths are optimized

2. Performance optimization:
   - Audit and optimize images (WebP format, appropriate sizing)
   - Implement proper lazy loading for offscreen content
   - Optimize font loading with next/font
   - Analyze and reduce JavaScript bundle size
   - Add appropriate caching strategies
   - Implement code splitting for larger components
   - Target a Lighthouse performance score of 90+

3. Analytics and tracking:
   - Set up Google Analytics 4
   - Configure conversion goals for contact submissions
   - Add UTM parameter support for campaign tracking
   - Implement basic event tracking for important interactions
   - Create a simple dashboard for monitoring performance

4. Final polish and testing:
   - Ensure consistent styling across all pages
   - Verify all links and forms work properly
   - Test across browsers (Chrome, Firefox, Safari, Edge)
   - Verify mobile experience on multiple device sizes
   - Perform accessibility audit and fix issues
   - Test all interactive features and animations

5. SEO implementation:
   - Verify metadata for all pages
   - Implement sitemap.xml and robots.txt
   - Add structured data (Schema.org) for relevant content
   - Verify all images have descriptive alt text
   - Ensure proper heading hierarchy

All elements should come together to create a cohesive, professional experience that effectively showcases my expertise and makes it easy for potential clients to hire me. The final site should have a distinctive visual identity while maintaining excellent usability and performance.

Continue using the color palette from docs/THEMES.md, adhere to the code quality standards in docs/ROE.md, and ensure the final product meets the client acquisition goals in docs/PLAN.md.
```

## Tailored Content Strategy ✅

```
Develop content that strategically positions me to attract ideal clients:
- keep code concise and clean
- do not make changes out of scope
- do not make unnecessary improvements out of scope without asking for permission
- keep comments human-like and only important ones
1. Professional bio variations:
   - Long-form about page content (300-400 words)
   - Medium bio for case studies (150-200 words)
   - Short bio for blog posts (50-100 words)
   - Each should emphasize different aspects of expertise relevant to clients

2. Service descriptions:
   - Write compelling service descriptions for:
     - Custom Web Application Development
     - Frontend Architecture & Development
     - Technical Consultation & Code Reviews
     - Application Performance Optimization
   - Each should follow this structure:
     - Problem statement that resonates with clients
     - Solution approach highlighting my methodology
     - Benefits to the client
     - Technologies and tools utilized
     - Example outcomes or results

3. Client testimonials:
   - Create 5-6 sample testimonials focusing on:
     - Problem solving ability
     - Communication and reliability
     - Technical expertise
     - Project outcomes and success
     - Working relationship
   - Format for easy placement throughout the site

4. Case study content:
   - Detailed outline for 3 case studies following this structure:
     - Client industry and size (anonymized if needed)
     - Business challenge and objectives
     - Technical challenges
     - Solution approach and implementation
     - Technologies and methodologies used
     - Results with specific metrics when possible
     - Client feedback
     - Lessons learned

5. Blog article ideas:
   - List of 10 article topics that demonstrate expertise
   - 1-2 paragraph synopsis for each topic
   - Target keywords and client problems addressed
   - Focus on showcasing problem-solving abilities

All content should be professional, confident but not arrogant, and focused on client benefits rather than just technical details. Use accessible language that communicates complex concepts clearly without unnecessary jargon.

When implementing this content, use the visual styles defined in docs/THEMES.md to ensure consistency with the overall design, and follow the client-focused approach outlined in docs/PLAN.md.
```
