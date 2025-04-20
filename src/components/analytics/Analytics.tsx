'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, pageview } from '@/lib/analytics';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  useEffect(() => {
    // Track page views when path changes
    if (pathname) {
      // Include search parameters if they exist
      const url = searchParams?.size ? 
        `${pathname}?${searchParams.toString()}` : 
        pathname;
        
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}