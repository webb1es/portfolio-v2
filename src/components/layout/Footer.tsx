import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-10 w-10 rounded-full p-[2px] bg-instagram-gradient overflow-hidden group">
                <div className="absolute inset-0 rounded-full bg-instagram-gradient opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-transparent">
                  <Image
                    src="https://drive.google.com/uc?export=view&id=1Di9jDPJyHhh9OPr_d5F1-OmSV5XN3prx"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover rounded-full transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@webbies.dev" 
                  className="text-foreground-secondary hover:text-accent-primary transition-colors"
                >
                  hello@webbies.dev
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="text-foreground-secondary hover:text-accent-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-foreground-secondary">
                Based in New York, NY
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services" 
                  className="text-foreground-secondary hover:text-accent-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/work" 
                  className="text-foreground-secondary hover:text-accent-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-foreground-secondary hover:text-accent-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-foreground-secondary hover:text-accent-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Proof */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/webbies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-accent-primary transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/webbies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-accent-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://twitter.com/wigiwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-accent-primary transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <p className="text-sm text-foreground-secondary">
              "Webbies's technical expertise is matched only by their ability to communicate complex concepts clearly." — Client, E-commerce Platform
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-foreground-secondary">
          <p>© {new Date().getFullYear()} Webbies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
