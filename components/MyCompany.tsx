
import React, { forwardRef } from 'react';
import ScrollReveal from './ScrollReveal';
import MacWindow from './MacWindow';

const MyCompany = forwardRef<HTMLElement>((props, ref) => {
  const logoUrl = 'https://i.imgur.com/3kWcwCk.png';

  return (
    <section ref={ref} id="company">
      <MacWindow title="My Company - HQ">
        <div className="flex flex-col items-center text-center">
            <ScrollReveal>
                <img 
                    src={logoUrl} 
                    alt="PIXODE Development Logo" 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl mb-4 object-cover shadow-lg mx-auto border-4 border-white"
                />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">PIXODE Development</h2>
                <p className="text-md sm:text-lg text-blue-500 dark:text-blue-400 font-semibold">Your Vision, Our Code, One Digital World</p>
            </ScrollReveal>
            <ScrollReveal>
                <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300 text-justify">
                    PIXODE Development is a forward-thinking technology company dedicated to creating cutting-edge solutions that solve real-world problems. Our team is composed of talented developers, designers, and strategists working together to push the boundaries of what's possible.
                </p>
            </ScrollReveal>
            <ScrollReveal>
                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Our Services</h3>
                <ul className="space-y-2 text-left mx-auto max-w-md text-gray-700 dark:text-gray-300">
                    <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Custom Web and Game Development</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> UI/UX Design & Prototyping</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> FiveM Server Full Development</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Mobile App Development (android)</li>
                </ul>
            </ScrollReveal>
        </div>
      </MacWindow>
    </section>
  );
});

export default MyCompany;
