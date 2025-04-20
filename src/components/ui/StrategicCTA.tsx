'use client';

import Link from 'next/link';
import {trackCTAClick} from '@/lib/analytics';
import {cn} from '@/lib/utils';

interface StrategicCTAProps {
    type: 'primary' | 'secondary' | 'inline' | 'floating';
    text: string;
    href: string;
    className?: string;
    withIcon?: boolean;
    location: string;
}

export function StrategicCTA({
                                 type,
                                 text,
                                 href,
                                 className,
                                 withIcon = false,
                                 location,
                             }: StrategicCTAProps) {
    // const pathname = usePathname();

    const handleClick = () => {
        trackCTAClick(text, location);
    };

    // Dynamically determine style based on type
    const styleMap = {
        primary: 'bg-primary-gradient from-primary-start to-primary-end dark:from-primary-start-light dark:to-primary-end-light text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300',
        secondary: 'bg-white dark:bg-dark-background-secondary text-dark-text-secondary dark:text-light-text-secondary border border-light-ui-border dark:border-dark-ui-border px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300',
        inline: 'font-medium text-dark-accent-primary dark:text-light-accent-primary underline underline-offset-4 hover:text-dark-accent-secondary dark:hover:text-light-accent-secondary transition-colors duration-300',
        floating: 'fixed bottom-8 right-8 z-50 bg-primary-gradient from-primary-start to-primary-end dark:from-primary-start-light dark:to-primary-end-light text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300',
    };

    return (
        <Link
            href={href}
            className={cn(
                styleMap[type],
                className
            )}
            onClick={handleClick}
        >
            {text}
            {withIcon && type === 'primary' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            )}
            {withIcon && type === 'floating' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                </svg>
            )}
        </Link>
    );
}
