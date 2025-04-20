interface Heading {
    level: number;
    text: string;
    id: string;
}

interface TableOfContentsProps {
    headings: Heading[];
    currentSection: string;
}

export function TableOfContents({ headings, currentSection }: TableOfContentsProps) {
    // Handle click on a TOC item
    const handleTOCClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Add offset for the fixed header
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="border-l-2 border-border pl-4">
            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-2">
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        className={`text-sm cursor-pointer transition-all ${
                            currentSection === heading.id
                                ? 'text-accent-primary font-medium border-l-2 border-accent-primary -ml-[calc(0.5rem+1px)] pl-[calc(0.5rem-1px)]'
                                : 'text-foreground-secondary hover:text-accent-primary'
                        }`}
                        style={{
                            paddingLeft: `${(heading.level - 1) * 0.75}rem`,
                        }}
                        onClick={() => handleTOCClick(heading.id)}
                    >
                        {heading.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
