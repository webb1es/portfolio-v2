'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, pageview } from '@/lib/analytics';

// Component that uses useSearchParams
function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  return null;
}

export function Analytics() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}