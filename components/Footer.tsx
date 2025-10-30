

import React from 'react';

interface Section {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface FooterProps {
  sections: Section[];
}

const Footer: React.FC<FooterProps> = ({ sections }) => {
  return (
    <footer className="bg-gray-100/80 py-8 border-t border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Olavario Carl Justine. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;