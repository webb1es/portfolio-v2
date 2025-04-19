import { useState, useEffect, useRef, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: InViewOptions = {}
): [RefObject<T>, boolean] {
  const { 
    threshold = 0.1, 
    triggerOnce = false,
    rootMargin = '0px'
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element comes into view
        if (entry.isIntersecting) {
          setIsInView(true);

          // If triggerOnce is true, disconnect the observer after triggering
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          // If triggerOnce is false, update state when element goes out of view
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isInView];
}
