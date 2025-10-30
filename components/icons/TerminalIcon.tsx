import React from 'react';

export const TerminalIcon: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-black rounded-xl text-blue-400 font-mono">
        <div className="flex items-center">
            <span className="text-2xl">&gt;</span>
            <span className="text-2xl animate-pulse">_</span>
        </div>
    </div>
);