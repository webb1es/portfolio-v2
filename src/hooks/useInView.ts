import { useState, useEffect, useRef, RefObject } from 'react';

interface InViewOptions {
  threshold?: number | number[];
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
    options: InViewOptions = {}
): [RefObject<T | null>, boolean] {
  const {
    threshold = 0.1,
    triggerOnce = false,
    rootMargin = '0px'
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              // Disconnect observer after first intersection if triggerOnce is true
              obs.unobserve(element);
              obs.disconnect();
            }
          } else if (!triggerOnce) {
            // Reset if not triggerOnce and element leaves view
            setIsInView(false);
          }
        },
        { threshold, rootMargin }
    );

    observer.observe(element);

    // Cleanup observer on unmount or dependency change
    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, rootMargin, ref]); // ref included for exhaustive-deps

  return [ref, isInView];
}
