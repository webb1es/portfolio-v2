import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {BlogPost} from '@/data/blog';
import {AnimatedElement} from '@/components/ui/AnimatedElement';
import type {Components} from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

interface ArticleContentProps {
    article: BlogPost;
}

export function ArticleContent({article}: ArticleContentProps) {
    const [headings, setHeadings] = useState<Array<{ id: string, text: string, level: number }>>([]);
    const [activeHeading, setActiveHeading] = useState<string>('');
    const contentRef = useRef<HTMLDivElement>(null);

    // Extract headings for table of contents
    useEffect(() => {
        const headingRegex = /^(#{1,3})\s+(.+)$/gm;
        const matches = [...article.content.matchAll(headingRegex)];
        const extractedHeadings = matches.map(match => {
            const level = match[1].length;
            const text = match[2];
            const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
            return {id, text, level};
        });

        setHeadings(extractedHeadings);
    }, [article.content]);

    // Track active heading for table of contents
    useEffect(() => {
        if (!contentRef.current || headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -80% 0px',
                threshold: 0
            }
        );

        // We need to wait for the markdown content to be rendered
        setTimeout(() => {
            headings.forEach(heading => {
                const element = document.getElementById(heading.id);
                if (element) observer.observe(element);
            });
        }, 500);

        return () => observer.disconnect();
    }, [headings]);

    function TableOfContents() {
        return (
            <div className="hidden lg:block sticky top-24 w-64 shrink-0 border-l-2 border-border pl-4">
                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                    {headings.map((heading, index) => (
                        <li
                            key={index}
                            className={`text-sm cursor-pointer transition-all ${
                                activeHeading === heading.id
                                    ? 'text-accent-primary font-medium border-l-2 border-accent-primary -ml-[calc(0.5rem+1px)] pl-[calc(0.5rem-1px)]'
                                    : 'text-foreground-secondary hover:text-accent-primary'
                            }`}
                            style={{paddingLeft: `${(heading.level - 1) * 0.75}rem`}}
                            onClick={() => {
                                const element = document.getElementById(heading.id);
                                if (element) {
                                    const yOffset = -100;
                                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                    window.scrollTo({top: y, behavior: 'smooth'});
                                }
                            }}
                        >
                            {heading.text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // Define the components for ReactMarkdown with proper TypeScript types
    const customComponents: Components = {
        code({className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
                <SyntaxHighlighter
                    // @ts-ignore - the type for style is incorrectly defined
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
        h1: ({children, ...props}) => <h1
            id={children?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')} {...props} />,
        h2: ({children, ...props}) => <h2
            id={children?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')} {...props} />,
        h3: ({children, ...props}) => <h3
            id={children?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')} {...props} />
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            {headings.length > 0 && <TableOfContents/>}

            {/* Article Content */}
            <AnimatedElement delay={0.2} className="flex-grow">
                <div ref={contentRef} className="prose prose-lg max-w-none dark:prose-invert">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={customComponents}
                    >
                        {article.content}
                    </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-6 border-t border-border">
                    <h3 className="text-lg font-medium mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                            <Link
                                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                                key={tag}
                                className="px-3 py-1 bg-background-secondary rounded-full text-foreground-secondary hover:bg-accent-primary/10 hover:text-accent-primary transition-colors"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 pt-6 border-t border-border">
                    <div
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-surface rounded-lg border border-border">
                        <div className="relative w-16 h-16 rounded-full p-[2px] bg-instagram-gradient overflow-hidden group flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-instagram-gradient opacity-75 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-transparent">
                            <Image
                              src="https://drive.google.com/uc?export=view&id=1Di9jDPJyHhh9OPr_d5F1-OmSV5XN3prx"
                              alt="Webbies"
                              width={64}
                              height={64}
                              className="h-full w-full object-cover rounded-full transition-transform group-hover:scale-110 duration-300"
                            />
                          </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Webbies</h3>
                            <p className="text-sm text-foreground-secondary mb-4">Senior Software Engineer</p>
                            <p className="text-foreground-secondary">{article.author.bio}</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 pt-6 border-t border-border">
                    <div className="p-6 bg-primary-gradient rounded-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Need help with a similar project?</h3>
                        <p className="mb-6">I specialize in building high-performance web applications that deliver
                            exceptional user experiences.</p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-accent-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-opacity"
                        >
                            Let's Work Together
                        </Link>
                    </div>
                </div>
            </AnimatedElement>
        </div>
    );
}
