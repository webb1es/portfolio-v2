// Type definitions for analytics events
export type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args) {
      window.dataLayer.push(args);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value, nonInteraction = false }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
    });
  }
};

// Track conversion events
export const trackConversion = (conversionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/${conversionId}`,
    });
  }
};

// Track contact form submissions
export const trackContactSubmission = () => {
  event({
    action: 'submit',
    category: 'Contact',
    label: 'Contact Form',
  });
  
  if (process.env.NEXT_PUBLIC_CONTACT_CONVERSION_ID) {
    trackConversion(process.env.NEXT_PUBLIC_CONTACT_CONVERSION_ID);
  }
};

// Track consultation bookings
export const trackConsultationBooking = () => {
  event({
    action: 'book',
    category: 'Consultation',
    label: 'Calendar Booking',
  });
  
  if (process.env.NEXT_PUBLIC_BOOKING_CONVERSION_ID) {
    trackConversion(process.env.NEXT_PUBLIC_BOOKING_CONVERSION_ID);
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaLabel: string, location: string) => {
  event({
    action: 'click',
    category: 'CTA',
    label: `${ctaLabel} | ${location}`,
  });
};

// Add UTM parameter tracking to URL
export const addUtmParams = (url: string, source: string, medium: string, campaign: string) => {
  const urlObj = new URL(url);
  urlObj.searchParams.append('utm_source', source);
  urlObj.searchParams.append('utm_medium', medium);
  urlObj.searchParams.append('utm_campaign', campaign);
  return urlObj.toString();
};