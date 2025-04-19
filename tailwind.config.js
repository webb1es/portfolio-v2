/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme
        dark: {
          background: {
            DEFAULT: "#0f172a", // Background (Dark)
            secondary: "#1e293b", // Background (Secondary)
          },
          text: {
            DEFAULT: "#f8fafc", // Text (Primary)
            secondary: "#cbd5e1", // Text (Secondary)
          },
          accent: {
            primary: "#8b5cf6", // Primary Accent (Purple)
            secondary: "#3b82f6", // Secondary Accent (Blue)
            tertiary: "#06b6d4", // Tertiary Accent (Cyan)
          },
          ui: {
            surface: "#1e293b", // Cards/Surfaces
            border: "#334155", // Borders
            divider: "#475569", // Dividers
          },
        },
        // Light Theme
        light: {
          background: {
            DEFAULT: "#f8fafc", // Background (Light)
            secondary: "#f1f5f9", // Background (Secondary)
          },
          text: {
            DEFAULT: "#0f172a", // Text (Primary)
            secondary: "#334155", // Text (Secondary)
          },
          accent: {
            primary: "#7c3aed", // Primary Accent (Purple - darker for contrast)
            secondary: "#2563eb", // Secondary Accent (Blue - darker for contrast)
            tertiary: "#0891b2", // Tertiary Accent (Cyan - darker for contrast)
          },
          ui: {
            surface: "#ffffff", // Cards/Surfaces
            border: "#e2e8f0", // Borders
            divider: "#cbd5e1", // Dividers
          },
        },
        // Status Colors
        status: {
          success: "#22c55e", // Success
          error: "#ef4444", // Error
          warning: "#f59e0b", // Warning
          info: "#3b82f6", // Info
        },
      },
      boxShadow: {
        'dark': 'rgba(0, 0, 0, 0.5)',
        'light': 'rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'secondary-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'highlight-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'primary-start': '#8b5cf6',
        'primary-end': '#3b82f6',
        'secondary-start': '#3b82f6',
        'secondary-end': '#06b6d4',
        'highlight-start': '#8b5cf6',
        'highlight-end': '#06b6d4',
        'primary-start-light': '#7c3aed',
        'primary-end-light': '#2563eb',
        'secondary-start-light': '#2563eb',
        'secondary-end-light': '#0891b2',
        'highlight-start-light': '#7c3aed',
        'highlight-end-light': '#0891b2',
      },
    },
  },
  plugins: [],
};
