import React, { useMemo, useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenuBar from './components/MenuBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ScrollToTopButton from './components/ScrollToTopButton';
import Skills from './components/Skills';
import { useActiveSection } from './hooks/useActiveSection';
import MyCompany from './components/MyCompany';

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const myCompanyRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sections = useMemo(
    () => [
      { id: 'home', name: 'Home', ref: homeRef },
      { id: 'about', name: 'About', ref: aboutRef },
      { id: 'skills', name: 'Skills', ref: skillsRef },
      { id: 'projects', name: 'Projects', ref: projectsRef },
      { id: 'company', name: 'My Company', ref: myCompanyRef },
      { id: 'contact', name: 'Contact', ref: contactRef },
    ],
    []
  );

  const sectionRefs = useMemo(() => sections.map((s) => s.ref), [sections]);
  const activeSection = useActiveSection(sectionRefs);
  

  return (
    <div className="text-gray-800 font-sans leading-relaxed selection:bg-blue-500/30">
      <MenuBar sections={sections} activeSection={activeSection} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Hero ref={homeRef} sections={sections} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <MyCompany ref={myCompanyRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer sections={sections} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;