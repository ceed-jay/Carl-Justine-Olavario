
import React, { forwardRef } from 'react';
import ScrollReveal from './ScrollReveal';
import MacWindow from './MacWindow';

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about">
      <MacWindow title="About Me - Finder">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <ScrollReveal className="lg:w-1/3 flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/50">
                <img 
                    src="https://i.imgur.com/lPI1sun.png" 
                    alt="Developer Portrait" 
                    className="w-full h-full object-cover"
                />
            </div>
          </ScrollReveal>
          
          <div className="lg:w-2/3 text-center lg:text-left">
             <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Olavario Carl Justine</h1>
                <p className="text-xl md:text-2xl font-semibold mb-6 text-blue-500">Junior Game & Web Full stack Developer</p>
            </ScrollReveal>
            <ScrollReveal>
                <p className="text-base mb-4 text-gray-700 text-justify">
                    As a Computer Engineering student of Computer Arts and Technological College, Inc., I am developing a strong foundation in both hardware and software, learning to design, build, and optimize computer systems. I balance coursework in digital logic, computer architecture, algorithms, embedded systems, and operating systems with hands-on projects involving tools like Arduino and Raspberry Pi.
                </p>
                <p className="text-base text-gray-700 text-justify">
                    Problem-solving is a key focus, where I break down complex challenges and find efficient solutions. I collaborate with peers on group projects, honing my teamwork and communication skills. I'm passionate about staying current with industry trends, from artificial intelligence to quantum computing, and I'm focused on preparing for a career in areas like software development, embedded systems, or robotics.
                </p>
            </ScrollReveal>
          </div>
        </div>
      </MacWindow>
    </section>
  );
});

export default About;