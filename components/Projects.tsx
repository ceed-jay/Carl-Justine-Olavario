import React, { forwardRef } from 'react';
import ScrollReveal from './ScrollReveal';
import MacWindow from './MacWindow';

const projectsData = [
  {
    title: 'Coffee Shop Web Online',
    description: 'A Coffee Shop Web Online that you can view the menu and order thru website',
    image: 'https://i.imgur.com/Be4fMdz.png',
    demoUrl: 'https://coffee-shop-web-ceeds-demo.vercel.app/',
    sourceUrl: '#',
  },
  {
    title: 'FiveM Server Web Overview',
    description: 'FiveM Server Web Overview to showcase your city to the public',
    image: 'https://i.imgur.com/Z32ZAqV.png',
    demoUrl: 'https://i.imgur.com/LkNze5I.png',
    sourceUrl: '#',
  },
  {
    title: 'Online Digital Shop',
    description: 'A customized online digital shop with live customer support',
    image: 'https://i.imgur.com/MRoeIe5.png',
    demoUrl: 'https://ceeds-creations.vercel.app/',
    sourceUrl: '#',
  },
   {
    title: 'FiveM Server Full Development',
    description: 'Full Development of FiveM Server using ESX and QBcore framework',
    image: 'https://i.imgur.com/ddPeBUp.png',
    demoUrl: 'https://discord.gg/bhtqe7JHsg',
    sourceUrl: '#',
  },
];

const ProjectCard: React.FC<typeof projectsData[0]> = ({ title, description, image, demoUrl, sourceUrl }) => {
    return (
        <div className="group rounded-lg shadow-lg overflow-hidden bg-white/50 dark:bg-black/20 hover:brightness-110 transition-all duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{description}</p>
                <div className="flex justify-center">
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">View Demo</a>
                </div>
            </div>
        </div>
    );
};


const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="projects">
      <MacWindow title="My Projects - Applications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
                <ScrollReveal key={index}>
                    <ProjectCard {...project} />
                </ScrollReveal>
            ))}
        </div>
      </MacWindow>
    </section>
  );
});

export default Projects;