import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Senior Software Engineer",
    description: "Insights and guides on web development, performance optimization, and creating exceptional digital experiences.",
    keywords: ["Web Development", "React", "Next.js", "JavaScript", "TypeScript", "Performance Optimization", "Frontend Development", "Backend Development"],
    openGraph: {
        title: "Blog | Senior Software Engineer",
        description: "Insights and guides on web development, performance optimization, and creating exceptional digital experiences.",
        url: "/blog",
        siteName: "Webbies | Senior Software Engineer",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blog | Senior Software Engineer"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Senior Software Engineer",
        description: "Insights and guides on web development, performance optimization, and creating exceptional digital experiences.",
        images: ["/og-image.png"],
    }
};
