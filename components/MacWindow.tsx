
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface MacWindowProps {
  title: string;
  children: React.ReactNode;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children }) => {
  return (
    <ScrollReveal>
      <div className="bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 my-8 md:my-16">
        {/* Title Bar */}
        <div className="h-10 flex items-center px-4 border-b border-black/10 dark:border-white/10">
          <div className="flex space-x-2">
            <div className="w-3.5 h-3.5 bg-[#FF5F57] rounded-full border border-red-700/50"></div>
            <div className="w-3.5 h-3.5 bg-[#FEBC2E] rounded-full border border-yellow-700/50"></div>
            <div className="w-3.5 h-3.5 bg-[#28C840] rounded-full border border-green-700/50"></div>
          </div>
          <p className="flex-grow text-center font-medium text-sm text-gray-800 dark:text-gray-200">{title}</p>
        </div>
        {/* Content */}
        <div className="p-6 md:p-8">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default MacWindow;