# AI Agent Prompts by Development Phase

## Phase 1: Project Setup & Core Structure

### Prompt for Phase 1

```
Create a Next.js portfolio website with TypeScript and Tailwind CSS. For this first phase, focus only on:

1. Project initialization with the following:
   - Next.js with App Router
   - TypeScript (strict mode)
   - Tailwind CSS
   - ESLint configuration

2. Setup for a dark theme with these specific colors:
   - Background: #0f172a
   - Text: #f8fafc
   - Primary Accent: #8b5cf6
   - Create a simple gradient utility: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)

3. Create a basic layout with:
   - Header with navigation (Home, About, Projects, Blog, Contact)
   - Mobile-friendly navigation menu
   - Footer with simple content
   - Dark/light mode toggle that saves preference to localStorage

4. Implement basic responsive behavior that works on mobile, tablet, and desktop.

Keep the code clean and well-organized. Use semantic HTML elements, and ensure the site is accessible (WCAG AA standards). Don't implement any page content yet - just the structure.

The files should include:
- src/app/layout.tsx (main layout)
- src/app/page.tsx (empty homepage)
- src/components/layout/header.tsx
- src/components/layout/footer.tsx
- src/components/ui/theme-toggle.tsx
- tailwind.config.js (with theme configuration)

Keep comments minimal and human-like, focusing only on complex logic.
```

## Phase 2: Homepage & About Section

### Prompt for Phase 2

```
Building on the existing portfolio project, implement the homepage and about section with the following features:

1. Homepage hero section:
   - Large heading with your name "John Webbies"
   - Professional title "Senior Software Engineer"
   - Short introduction (1-2 sentences)
   - Animated gradient text effect for the heading
   - Simple fade-in animation using Motion
   - CTA button linking to the projects section

2. About section:
   - Professional summary (2-3 paragraphs)
   - Skills visualization with 3 categories:
     - Frontend: React, Next.js, TypeScript, etc.
     - Backend: Node.js, Express, etc.
     - Tools: Git, Docker, etc.
   - Interactive skill bars or tags with hover effects
   - Profile image with gradient border
   - Resume download button (linking to: https://drive.google.com/file/d/1tLnhpqkx5velSVuislj3g21d0ejsgjSw/view)

3. Implement scroll-triggered animations:
   - Elements should fade in as user scrolls
   - Subtle animations that enhance but don't distract

All components should be responsive and maintain the dark theme established in Phase 1. Ensure all text is readable with sufficient contrast, and all interactive elements are accessible.

Focus on building reusable components. Implement proper TypeScript interfaces for all props. Use the Context API for any state that needs to be shared between components.
```

## Phase 3: Projects & Case Studies

### Prompt for Phase 3

```
Continue building the portfolio website by implementing the projects section and case studies functionality:

1. Projects grid:
   - Create a filterable grid of projects
   - Each project card should include:
     - Project image/thumbnail
     - Title
     - Short description
     - Technologies used (as tags)
     - "View Details" button
   - Add filter buttons for different categories (Web, Mobile, Design, etc.)
   - Implement smooth transitions when filtering
   - Include at least 4 sample projects

2. Case study template:
   - Create a detailed case study template for projects
   - Include sections for:
     - Project overview
     - Problem statement
     - Solution approach
     - Technologies used
     - Key features
     - Outcomes/results
     - Visual showcase (multiple images)
   - Implement next/previous project navigation
   - Add a "View Live" button where applicable

3. Dynamic routing:
   - Set up dynamic routes for case studies (/projects/[slug])
   - Create sample JSON data for projects
   - Implement proper data fetching

Make sure all components are responsive and follow the established design system. Use consistent animations for transitions. Ensure all content is accessible and adheres to WCAG AA standards.

Keep the code modular and reusable. Use TypeScript for type safety and document any complex logic with minimal, human-like comments.
```

## Phase 4: Blog Section

### Prompt for Phase 4

```
Implement the blog section for the portfolio website with the following features:

1. Blog listing page:
   - Grid of blog post cards
   - Each card should display:
     - Featured image
     - Title
     - Publication date
     - Reading time estimate
     - Category tags
   - Implement category filtering
   - Add a search functionality for articles
   - Sort options (newest, oldest, most popular)

2. Article template:
   - Clean, readable article layout
   - Typography optimized for reading
   - Table of contents for longer articles
   - Code snippets with syntax highlighting
   - Image support with captions
   - Author information section
   - Share buttons for social media

3. Related posts:
   - Show 2-3 related posts at the end of each article
   - Base relations on shared categories/tags

4. Data structure:
   - Create sample blog post data in JSON format
   - Set up dynamic routing (/blog/[slug])
   - Implement proper metadata for SEO

All components should maintain the established dark theme with gradient accents and support light mode. Ensure the reading experience is comfortable with appropriate font sizes, line heights, and contrast.

Focus on performance by implementing:
- Lazy loading for images
- Pagination or infinite scroll for the blog listing
- Proper caching strategies

Maintain accessibility standards and ensure the blog is fully responsive across all device sizes.
```

## Phase 5: Contact & Final Features

### Prompt for Phase 5

```
Complete the portfolio website by implementing the contact section and final features:

1. Contact form:
   - Clean, accessible form with fields for:
     - Name
     - Email
     - Subject
     - Message
   - Form validation with helpful error messages
   - Submit button with loading state
   - Success/error feedback after submission
   - Mock API endpoint for form submission

2. Interactive resume section:
   - Timeline visualization of work experience
   - Education history
   - Certifications and achievements
   - Downloadable PDF resume option
   - Subtle animations for timeline elements

3. Additional features:
   - Social media links with hover effects
   - "Back to top" button that appears when scrolling
   - Page transition animations between routes
   - Implement prefetching for internal links
   - Save theme preference to localStorage

4. Polish existing sections:
   - Ensure consistent styling across all pages
   - Add subtle hover states for interactive elements
   - Implement any missing responsive behaviors
   - Optimize loading of all assets

Focus on creating a cohesive experience across the entire site. Ensure all animations are purposeful and enhance the user experience without being distracting.

Implement proper error handling throughout, especially for the contact form. Make sure all features work properly in both dark and light modes.
```

## Phase 6: Optimization & Deployment

### Prompt for Phase 6

```
Optimize the portfolio website for performance, accessibility, and SEO to prepare it for deployment:

1. Performance optimization:
   - Audit and optimize all images (format, size, compression)
   - Implement proper lazy loading for offscreen content
   - Optimize font loading with next/font
   - Analyze and reduce JavaScript bundle size
   - Add appropriate caching strategies
   - Implement code splitting for larger components
   - Target a Lighthouse performance score of 90+

2. Accessibility improvements:
   - Run a comprehensive accessibility audit
   - Fix any WCAG AA compliance issues
   - Test keyboard navigation throughout the site
   - Verify screen reader compatibility
   - Ensure sufficient color contrast in all states
   - Add skip-to-content link

3. SEO implementation:
   - Add metadata for all pages
   - Create a sitemap.xml and robots.txt
   - Implement Open Graph and Twitter card metadata
   - Add structured data (Schema.org) for relevant content
   - Ensure proper heading hierarchy
   - Optimize for Core Web Vitals

4. Final testing:
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Device testing (mobile, tablet, desktop)
   - Test all interactive features
   - Verify form submissions
   - Confirm all links work properly

5. Deployment preparation:
   - Set up environment variables
   - Create build scripts
   - Prepare for deployment to a hosting platform

The goal is to ensure the website is fully optimized, accessible, and ready for production. Focus on addressing any remaining issues and polishing the user experience.
```

## SEO Strategy Implementation

### SEO Implementation Details

```
Implement these specific SEO optimizations for the portfolio website:

1. Metadata setup:
   - Create a custom metadata component to use across pages
   - Implement dynamic title and description for each page
   - Add canonical URLs for all pages
   - Include appropriate robots directives

2. Structured data:
   - Person schema for the About page
   - Article schema for blog posts
   - WebSite schema for the homepage
   - Use JSON-LD format for all schemas

3. Technical SEO:
   - Configure next-sitemap to generate sitemap.xml
   - Create a robots.txt file with appropriate directives
   - Implement proper 404 page
   - Add rel="noopener" to external links

4. Content optimization:
   - Ensure descriptive alt text for all images
   - Create SEO-friendly URLs for all pages
   - Implement proper heading hierarchy (H1 → H6)
   - Add breadcrumb navigation where appropriate

5. Social sharing:
   - Implement Open Graph tags for Facebook sharing
   - Add Twitter Card markup
   - Create appropriate social sharing images

6. Performance factors:
   - Optimize Largest Contentful Paint (LCP)
   - Minimize Cumulative Layout Shift (CLS)
   - Reduce First Input Delay (FID) and Total Blocking Time (TBT)
   - Ensure fast Time to First Byte (TTFB)

7. Tools integration:
   - Add Google Tag Manager container
   - Prepare for analytics integration
   - Set up basic event tracking for important interactions

Use the Next SEO library to simplify implementation where appropriate. Document the SEO strategy for future reference. Test all implemented features using tools like Lighthouse and structured data testing tools.
```

## State Management Implementation

### State Management Details

```
Implement a comprehensive state management approach for the portfolio website using React Context API:

1. Theme context:
   - Create a ThemeProvider component
   - Store dark/light mode preference
   - Persist preference to localStorage
   - Add utility functions for theme manipulation
   - Implement smooth theme transitions

2. Navigation context:
   - Track current active route
   - Store mobile menu open/closed state
   - Manage scroll position for "back to top" button
   - Handle route change animations

3. Projects filter context:
   - Store active category filters
   - Keep track of filtered projects
   - Manage sort order preferences
   - Handle filter animations

4. Blog context:
   - Store search query state
   - Manage category filter state
   - Track reading progress in articles
   - Handle blog pagination state

5. Contact form context:
   - Manage form validation state
   - Track submission status
   - Handle success/error messages
   - Store form data for review step

For each context:
1. Create a dedicated file in src/context directory
2. Implement a provider component with appropriate state
3. Create a custom hook for accessing the context
4. Add TypeScript interfaces for all state and actions
5. Document usage with brief comments

Use localStorage where appropriate to persist user preferences. Keep the state normalized to avoid duplication. Implement proper error handling for any asynchronous actions.

The goal is to create a modular, maintainable state management system that follows React best practices.
```