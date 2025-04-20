import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
    // Format tag name for display
    const formatTagName = (name: string) => {
        return decodeURIComponent(name)
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const tagName = formatTagName(params.tag);

    return {
        title: `#${tagName} | Senior Software Engineer Blog`,
        description: `Articles and guides tagged with #${tagName.toLowerCase()} from a senior software engineer perspective.`,
        keywords: [tagName, "Web Development", "Software Engineering", "Technical Articles"],
        openGraph: {
            title: `#${tagName} | Senior Software Engineer Blog`,
            description: `Articles and guides tagged with #${tagName.toLowerCase()} from a senior software engineer perspective.`,
            url: `/blog/tag/${params.tag}`,
            siteName: "Webbies | Senior Software Engineer",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: `Articles tagged with #${tagName}`
                }
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `#${tagName} | Senior Software Engineer Blog`,
            description: `Articles and guides tagged with #${tagName.toLowerCase()} from a senior software engineer perspective.`,
            images: ["/og-image.png"],
        }
    };
}
