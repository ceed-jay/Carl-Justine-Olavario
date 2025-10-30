// FIX: Import React to make the React namespace available for types like `React.RefObject`.
import React, { useState, useEffect } from 'react';

export const useActiveSection = (sectionRefs: React.RefObject<HTMLElement>[]) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40px 0px -50% 0px', // Adjusted for new fixed header height (h-10 = 2.5rem = 40px)
        threshold: 0,
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(ref.current);
        }
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRefs]);

  return activeSection;
};