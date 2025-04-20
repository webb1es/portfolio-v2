import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Senior Software Engineer",
    description: "Expert software engineering services including custom web applications, frontend architecture, technical consulting, and performance optimization.",
    keywords: ["Custom Web Applications", "Frontend Architecture", "Technical Consultation", "Performance Optimization", "React", "Next.js", "Web Development"],
    openGraph: {
        title: "Services | Senior Software Engineer",
        description: "Expert software engineering services including custom web applications, frontend architecture, technical consulting, and performance optimization.",
        url: "/services",
        siteName: "Webbies | Senior Software Engineer",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Services | Senior Software Engineer"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Senior Software Engineer",
        description: "Expert software engineering services including custom web applications, frontend architecture, technical consulting, and performance optimization.",
        images: ["/og-image.png"],
    }
};