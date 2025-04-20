import Script from 'next/script';

interface PersonSchema {
  name: string;
  description: string;
  image: string;
  sameAs: string[];
  jobTitle: string;
  worksFor?: {
    name: string;
    url: string;
  };
}

interface WebsiteSchema {
  url: string;
  name: string;
  description: string;
  author: {
    name: string;
  };
}

interface BlogPostSchema {
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
  };
}

interface ProjectSchema {
  name: string;
  description: string;
  url: string;
  image: string;
  provider: {
    name: string;
    url: string;
  };
}

export function PersonStructuredData({ person }: { person: PersonSchema }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    description: person.description,
    image: person.image,
    sameAs: person.sameAs,
    jobTitle: person.jobTitle,
    ...(person.worksFor && {
      worksFor: {
        '@type': 'Organization',
        name: person.worksFor.name,
        url: person.worksFor.url,
      },
    }),
  };

  return (
    <Script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData({ website }: { website: WebsiteSchema }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: website.url,
    name: website.name,
    description: website.description,
    author: {
      '@type': 'Person',
      name: website.author.name,
    },
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BlogPostStructuredData({ post }: { post: BlogPostSchema }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url: post.url,
    headline: post.headline,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
  };

  return (
    <Script
      id="blogpost-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ProjectStructuredData({ project }: { project: ProjectSchema }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    provider: {
      '@type': 'Person',
      name: project.provider.name,
      url: project.provider.url,
    },
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
  };

  return (
    <Script
      id="project-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}