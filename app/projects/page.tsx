// app/projects/page.tsx
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Projects: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 text-gray-800">
            <ProjectCard 
                href="https://web.archive.org/web/20201101022932/https://mutsusaiketsu.jp/"
                imageUrl="/mutsusaiketsu.png"
                title="mutsusaiketsu.jp"
                description="Website for painless blood collection clinic"
            />
            <ProjectCard 
                href="https://web.archive.org/web/20201101022932/https://mutsusaiketsu.jp/"
                imageUrl="/mutsusaiketsu.png"
                title="mutsusaiketsu.jp"
                description="Website for painless blood collection clinic"
            />
            <ProjectCard 
                href="https://web.archive.org/web/20201101022932/https://mutsusaiketsu.jp/"
                imageUrl="/mutsusaiketsu.png"
                title="mutsusaiketsu.jp"
                description="Website for painless blood collection clinic"
            />
        </div>
    );
};

export default Projects;
