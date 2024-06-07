interface Project {
    title: string;
    description: string;
}

const projects: Project[] = [
    { title: "Project 1", description: "Description of my project 1." },
    { title: "Project 2", description: "Description of my project 2." },
    { title: "Project 3", description: "Description of my project 3." },
];

const Projects: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-sm">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Projects;
