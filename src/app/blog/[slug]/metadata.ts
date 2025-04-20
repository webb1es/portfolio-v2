import type { Metadata } from "next";
import { getPostBySlug } from "@/data/blog";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const article = getPostBySlug(params.slug);

    // If article not found, return basic metadata
    if (!article) {
        return {
            title: "Article Not Found | Senior Software Engineer Blog",
            description: "The article you're looking for doesn't exist or may have been moved.",
        };
    }

    return {
        title: `${article.title} | Senior Software Engineer Blog`,
        description: article.description,
        keywords: [...article.tags, ...article.categories, "Web Development", "Software Engineering"],
        authors: [{ name: article.author.name }],
        openGraph: {
            title: article.title,
            description: article.description,
            url: `/blog/${params.slug}`,
            siteName: "Webbies | Senior Software Engineer",
            images: [
                {
                    url: article.coverImage || "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: article.title
                }
            ],
            locale: "en_US",
            type: "article",
            publishedTime: article.publishedDate,
            modifiedTime: article.updatedDate || article.publishedDate,
            authors: [article.author.name],
            tags: article.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.description,
            images: [article.coverImage || "/og-image.png"],
        }
    };
}
