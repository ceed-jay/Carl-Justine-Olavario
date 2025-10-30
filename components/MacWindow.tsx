
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface MacWindowProps {
  title: string;
  children: React.ReactNode;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children }) => {
  return (
    <ScrollReveal>
      <div className="bg-white/95 backdrop-blur-2xl rounded-xl shadow-lg border border-gray-200/80 my-8 md:my-16">
        {/* Title Bar */}
        <div className="h-10 flex items-center px-4 border-b border-gray-200/90">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[#FF5F57] rounded-full"></div>
            <div className="w-3 h-3 bg-[#FEBC2E] rounded-full"></div>
            <div className="w-3 h-3 bg-[#007AFF] rounded-full"></div>
          </div>
          <p className="flex-grow text-center font-medium text-sm text-gray-800">{title}</p>
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