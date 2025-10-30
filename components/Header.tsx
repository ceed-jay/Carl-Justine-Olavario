import React from 'react';
import Dock from './Dock';
import MenuBar from './MenuBar';

interface Section {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface HeaderProps {
  sections: Section[];
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection }) => {
  // FIX: The MenuBar component requires the full sections object (including the 'name' property) and the activeSection prop.
  // The previous implementation was incorrectly removing 'name' and omitting `activeSection`.
  return (
    <>
      <MenuBar sections={sections} activeSection={activeSection} />
      <Dock sections={sections} activeSection={activeSection} />
    </>
  );
};

export default Header;
