import React from 'react';

interface ProjectCardProps {
    href: string;
    imageUrl: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ href, imageUrl, title, description }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="relative border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white bg-opacity-75 min-h-[150px]"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'black'
                }}
            >
                <div className="absolute inset-0 opacity-0 hover:opacity-85 backdrop-blur backdrop-contrast-100 flex items-center justify-center p-4">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">{title}</h3>
                        <p className="text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
