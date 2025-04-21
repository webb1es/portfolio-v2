'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBioByType } from '@/content';
import { Bio } from '@/content/types';

interface AuthorBioProps {
  variant?: 'short' | 'medium';
  context?: string;
}

export function AuthorBio({ variant = 'short', context }: AuthorBioProps) {
  const [bio, setBio] = useState<Bio | null>(null);
  
  useEffect(() => {
    let focusArea: string | undefined;
    
    // Determine the appropriate focus area based on context
    if (context) {
      if (context.includes('performance') || context.includes('optimization')) {
        focusArea = 'technical problem-solving';
      } else if (context.includes('communication') || context.includes('client')) {
        focusArea = 'consulting and collaboration';
      } else {
        focusArea = 'client outcomes';
      }
    }
    
    // Import bios
    const { biosList } = require('@/content');
    
    // First try to find a bio with matching focus area
    let matchingBio: Bio | undefined;
    if (focusArea) {
      matchingBio = biosList.find(
        (b: Bio) => b.type === variant && b.focusArea === focusArea
      );
    }
    
    // Fall back to the first bio of the right type
    if (!matchingBio) {
      matchingBio = getBioByType(variant);
    }
    
    setBio(matchingBio || null);
  }, [variant, context]);
  
  if (!bio) return null;
  
  return (
    <div className="bg-surface rounded-lg border border-border p-6 mt-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="relative w-20 h-20 rounded-full p-[2px] bg-instagram-gradient overflow-hidden group">
          <div className="absolute inset-0 rounded-full bg-instagram-gradient opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-transparent">
            <Image
              src="https://drive.google.com/uc?export=view&id=1Di9jDPJyHhh9OPr_d5F1-OmSV5XN3prx"
              alt="Webbies"
              width={80}
              height={80}
              className="h-full w-full object-cover rounded-full transition-transform group-hover:scale-110 duration-300"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2">Webbies</h3>
          <h4 className="text-foreground-secondary mb-3">Senior Software Engineer</h4>
          
          <div className="prose prose-sm dark:prose-invert max-w-none mb-4">
            <p>{bio.content}</p>
          </div>
          
          <div className="flex space-x-4">
            <Link 
              href="/contact" 
              className="text-accent-primary hover:underline font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Me
            </Link>
            <Link 
              href="/work" 
              className="text-accent-primary hover:underline font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}