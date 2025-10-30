import React from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { UserIcon } from './icons/UserIcon';
import { TerminalIcon } from './icons/TerminalIcon';
import { AppsIcon } from './icons/AppsIcon';
import { MailIcon } from './icons/MailIcon';

interface Section {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface DockProps {
  sections: Section[];
  activeSection: string;
}

const CompanyIcon: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    </div>
);

const iconMap: { [key: string]: React.FC } = {
    home: HomeIcon,
    about: UserIcon,
    skills: TerminalIcon,
    projects: AppsIcon,
    company: CompanyIcon,
    contact: MailIcon,
};

const Dock: React.FC<DockProps> = ({ sections, activeSection }) => {

  const handleLinkClick = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end h-20 p-2 space-x-2 bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-black/30 shadow-2xl">
        {sections.map(section => {
          const Icon = iconMap[section.id];
          return (
            <div key={section.id} className="relative flex flex-col items-center group">
              <div className="absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {section.name}
              </div>
              <button
                onClick={() => handleLinkClick(section.ref)}
                className="w-14 h-14 bg-cover bg-center rounded-xl transition-all duration-200 transform group-hover:scale-125 group-hover:-translate-y-2"
                aria-label={`Go to ${section.name} section`}
              >
                {Icon && <Icon />}
              </button>
              <div className={`mt-1.5 w-1.5 h-1.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-opacity duration-300 ${activeSection === section.id ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;