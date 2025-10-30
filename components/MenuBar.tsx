import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface Section {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface MenuBarProps {
  sections: Section[];
  activeSection: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ sections, activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);


  const handleLinkClick = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-10 bg-white/30 dark:bg-black/30 backdrop-blur-xl border-b border-white/20 dark:border-black/20 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1.333a1 1 0 00-.866.5L14.5 12.83a1.5 1.5 0 01-2.598 0L9.667 10.5H9a1 1 0 01-1-1V6a1 1 0 011-1h1V3.5z" />
                <path d="M4 6a2 2 0 012-2h1.5a1.5 1.5 0 013 0V6a1 1 0 001 1h1.5a2 2 0 012 2v1.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1H9.5a2 2 0 01-2-2V6z" />
            </svg>
            <span className="font-bold">Carl Justine B. Olavario</span>
            <nav className="hidden md:flex items-center space-x-1">
              {sections.map(section => (
                <button 
                    key={section.id} 
                    onClick={() => handleLinkClick(section.ref)} 
                    className={`px-3 py-1 rounded-md transition-colors text-gray-800 dark:text-gray-200 ${activeSection === section.id ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/10 dark:hover:bg-white/10'}`}>
                  {section.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <span className="hidden sm:block">{currentTime}</span>
            <div className="md:hidden">
                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1" aria-label="Open menu">
                    {isMenuOpen ? (
                         <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div onClick={() => setIsMenuOpen(false)} className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
        <nav className="absolute top-10 right-0 bottom-0 left-0 p-8">
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {sections.map(section => (
              <li key={section.id}>
                <button onClick={() => handleLinkClick(section.ref)} className={`text-2xl font-bold transition-colors ${activeSection === section.id ? 'text-blue-500' : 'text-gray-800 dark:text-gray-200'}`}>
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default MenuBar;