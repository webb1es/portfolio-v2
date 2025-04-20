import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { WebsiteStructuredData } from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Webbies | Senior Software Engineer",
  description: "Portfolio of a Senior Software Engineer specializing in web application development",
  metadataBase: new URL('https://yourwebsite.com'),
  openGraph: {
    title: "Webbies | Senior Software Engineer",
    description: "Portfolio of a Senior Software Engineer specializing in web application development",
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbies | Senior Software Engineer",
    description: "Portfolio of a Senior Software Engineer specializing in web application development",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Analytics />
          {/* @ts-expect-error Server Component */}
          <FloatingCTA />
          <WebsiteStructuredData 
            website={{
              url: 'https://yourwebsite.com',
              name: 'Webbies | Senior Software Engineer',
              description: 'Portfolio of a Senior Software Engineer specializing in web application development',
              author: {
                name: 'Webster Muchefa'
              }
            }} 
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
