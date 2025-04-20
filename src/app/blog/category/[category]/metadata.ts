import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
    // Format category name for display
    const formatCategoryName = (name: string) => {
        return decodeURIComponent(name)
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const categoryName = formatCategoryName(params.category);

    return {
        title: `${categoryName} Articles | Senior Software Engineer Blog`,
        description: `Articles and guides about ${categoryName.toLowerCase()} from a senior software engineer perspective.`,
        keywords: [categoryName, "Web Development", "Software Engineering", "Technical Articles"],
        openGraph: {
            title: `${categoryName} Articles | Senior Software Engineer Blog`,
            description: `Articles and guides about ${categoryName.toLowerCase()} from a senior software engineer perspective.`,
            url: `/blog/category/${params.category}`,
            siteName: "Webbies | Senior Software Engineer",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: `${categoryName} Articles`
                }
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${categoryName} Articles | Senior Software Engineer Blog`,
            description: `Articles and guides about ${categoryName.toLowerCase()} from a senior software engineer perspective.`,
            images: ["/og-image.png"],
        }
    };
}
