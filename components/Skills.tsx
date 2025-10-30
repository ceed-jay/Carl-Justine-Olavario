

import React, { forwardRef, useState, useRef, useEffect } from 'react';
import MacWindow from './MacWindow';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
    const [width, setWidth] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setWidth(percentage);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            if (barRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(barRef.current);
            }
        };
    }, [percentage]);

    return (
        <div className="mb-6" ref={barRef}>
            <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800">{skill}</span>
                <span className="text-sm font-medium text-blue-600">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};

const skillsData = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS & Tailwind', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'React', percentage: 90 },
    { name: 'Java', percentage: 80 },
    { name: 'Lua', percentage: 95 },
    { name: 'Graphics Editing', percentage: 95 },
];

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="skills">
       <MacWindow title="My Skills - Terminal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {skillsData.map((skill) => (
                <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
        </div>
       </MacWindow>
    </section>
  );
});

export default Skills;