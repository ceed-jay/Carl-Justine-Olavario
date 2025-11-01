import React, { forwardRef } from 'react';
import ScrollReveal from './ScrollReveal';

interface Section {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface HeroProps {
  sections: Section[];
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ sections }, ref) => {
  const handleShortcutClick = (id: string) => {
    const section = sections.find(s => s.id === id);
    section?.ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const shortcutIcons: { [key: string]: React.ReactElement } = {
      projects: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
      ),
      skills: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ),
      contact: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
  };

  return (
    <section ref={ref} id="home" className="h-screen flex items-center justify-center p-4 -mt-10">
        <ScrollReveal className="w-full max-w-xl">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/80 p-6 sm:p-8 text-center">
                <img 
                    src="https://i.imgur.com/FXpF9jk.jpeg" 
                    alt="Developer Portrait" 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-blue-500/50 object-cover"
                />
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    CARL JUSTINE B. OLAVARIO
                </h1>
                <p className="mt-2 text-lg text-gray-700">
                    Junior Full Stack Developer Web and Application
                </p>

                <div className="my-8 grid grid-cols-3 gap-4">
                    {['projects', 'skills', 'contact'].map(id => {
                        const section = sections.find(s => s.id === id);
                        if (!section) return null;
                        return (
                            <button
                                key={id}
                                onClick={() => handleShortcutClick(id)}
                                aria-label={section.name}
                                className="flex flex-col items-center justify-center p-4 bg-gray-100/80 rounded-lg hover:bg-gray-200/80 transition-colors duration-200 border border-gray-200"
                            >
                                {shortcutIcons[id]}
                            </button>
                        );
                    })}
                </div>

                <div className="flex justify-center">
                    <button 
                        onClick={() => handleShortcutClick('about')}
                        className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105 shadow-lg">
                        Explore My Work
                    </button>
                </div>
            </div>
        </ScrollReveal>
    </section>
  );
});

export default Hero;
