

import React from 'react';

interface Section {
  id: string;
  // FIX: Added name to section type to match props from App.tsx
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface FooterProps {
  sections: Section[];
}

const Footer: React.FC<FooterProps> = ({ sections }) => {
  return (
    <footer className="bg-white/20 dark:bg-black/20 backdrop-blur-lg py-8 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Carl Justine B. Olavario. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;