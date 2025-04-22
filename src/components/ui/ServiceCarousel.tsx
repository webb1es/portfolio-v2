'use client';

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { serviceDescriptions } from '@/content/services';
import { useRouter } from 'next/navigation';

type ServiceCarouselProps = {
  options?: EmblaOptionsType;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ 
  options = { 
    loop: false, 
    align: 'center',
    dragFree: false 
  } 
}) => {
  const router = useRouter();
  const autoplay = React.useRef(
    Autoplay({ 
      delay: 5000, 
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
      playOnInit: true
    })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      ...options,
      watchDrag: false, // Better support for Safari
      speed: 30, // Slower transitions to reduce jittering
      startIndex: 1 // Start with the second slide for non-loop carousels
    }, 
    [autoplay.current]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    emblaApi && emblaApi.scrollPrev({ jump: true });
    autoplay.current.reset();
  }, [emblaApi]);
  
  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    emblaApi && emblaApi.scrollNext({ jump: true });
    autoplay.current.reset();
  }, [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Setup and reSelect to make sure button states are correct
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navigate to service page for centered slide or navigate directly to the clicked slide
  const handleSlideClick = useCallback((index: number, serviceId: string) => {
    if (index === selectedIndex) {
      // Navigate to service page if it's the current slide
      router.push(`/services#${serviceId}`);
    } else {
      // Skip animation and immediately jump to the clicked slide
      emblaApi?.scrollTo(index, false);
      // Force update the selected index immediately
      setSelectedIndex(index);
      // Update button states
      if (emblaApi) {
        const canScrollPrev = index > 0;
        const canScrollNext = index < (scrollSnaps.length - 1);
        setPrevBtnDisabled(!canScrollPrev);
        setNextBtnDisabled(!canScrollNext);
      }
      autoplay.current.reset();
    }
  }, [emblaApi, router, selectedIndex, scrollSnaps.length]);

  return (
    <div className="embla">
      <div className="embla__wrapper">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {serviceDescriptions.map((service, index) => (
              <div 
                key={service.id} 
                className={`embla__slide cursor-pointer ${selectedIndex === index ? 'embla__slide--current' : ''}`}
                onClick={() => handleSlideClick(index, service.id)}
              >
                <div className={`bg-surface rounded-lg border border-border hover:border-accent-primary transition-all hover:shadow-lg h-full flex flex-col overflow-hidden ${selectedIndex === index ? 'embla__slide__card--current' : ''}`}>
                  <div className="p-6 flex-grow">
                    <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-foreground-secondary mb-4 line-clamp-3">
                      {service.approach.split(' ').slice(0, 24).join(' ')}...
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border p-4 mt-auto bg-background/50 flex justify-between items-center">
                    <div className="text-sm text-foreground-secondary">
                      {service.outcomes.length} success stories
                    </div>
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/services#${service.id}`);
                      }}
                      className="inline-flex items-center text-accent-primary hover:text-accent-primary/80 font-medium text-sm"
                    >
                      <span className="inline-flex items-center">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <button 
            className={`embla__button embla__button--prev ${prevBtnDisabled ? 'embla__button--disabled' : ''}`}
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>
          <button 
            className={`embla__button embla__button--next ${nextBtnDisabled ? 'embla__button--disabled' : ''}`}
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0a5994246.277 5994246.277 0 0 0 229.332 229.454 35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </button>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                emblaApi?.scrollTo(index, false);
                setSelectedIndex(index);
                autoplay.current.reset();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ServiceCarousel }; 