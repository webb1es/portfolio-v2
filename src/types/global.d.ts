interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
}

// Declare environment variables types
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    NEXT_PUBLIC_CONTACT_CONVERSION_ID?: string;
    NEXT_PUBLIC_BOOKING_CONVERSION_ID?: string;
  }
}