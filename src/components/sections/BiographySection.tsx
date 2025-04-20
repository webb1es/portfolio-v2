'use client';

import { useEffect, useState } from 'react';
import { Bio } from '@/content/types';
import { getBioByType } from '@/content';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface BiographySectionProps {
  variant?: 'about' | 'case-study' | 'blog';
  focusArea?: string;
}

export function BiographySection({ variant = 'about', focusArea }: BiographySectionProps) {
  const [bio, setBio] = useState<Bio | null>(null);
  
  useEffect(() => {
    // Map variant to bio type
    const typeMap: Record<string, Bio['type']> = {
      'about': 'long',
      'case-study': 'medium',
      'blog': 'short'
    };
    
    const bioType = typeMap[variant] || 'medium';
    
    // If focus area specified, try to get a bio with that focus area and type
    if (focusArea) {
      const { biosList } = require('@/content');
      const matchingBio = biosList.find(
        (b: Bio) => b.type === bioType && b.focusArea === focusArea
      );
      if (matchingBio) {
        setBio(matchingBio);
        return;
      }
    }
    
    // Otherwise use the first bio of the right type
    const defaultBio = getBioByType(bioType);
    setBio(defaultBio || null);
  }, [variant, focusArea]);
  
  if (!bio) return null;
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        </AnimatedElement>
        
        <div className="max-w-3xl mx-auto bg-surface p-8 rounded-lg border border-border">
          <AnimatedElement delay={0.1}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {bio.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}