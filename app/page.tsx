import Image from "next/image";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-between">
            {/* Hero Section */}
            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
                    <p className="text-xl mb-8">Hi, I&#39;m Wataru Murata, a passionate web developer with 5 years of experience.</p>
                    <Image src="/profile.png" alt="Profile Picture" width={200} height={200} className="rounded-full mb-6 border-4 border-amber-400" />
                    <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">View Projects</a>
                </div>
            </section>
            {/* Projects Section */}
            <section id="projects" className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/projects-bg.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center h-screen justify-center text-white text-center px-4">
                    <div className="w-full max-w-5xl text-center">
                        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white bg-opacity-75">
                                <h3 className="text-xl font-bold mb-4">Project 1</h3>
                                <p className="text-sm">Description of my project. Highlight key features and technologies used.</p>
                            </div>
                            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white bg-opacity-75">
                                <h3 className="text-xl font-bold mb-4">Project 2</h3>
                                <p className="text-sm">Description of my project. Highlight key features and technologies used.</p>
                            </div>
                            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white bg-opacity-75">
                                <h3 className="text-xl font-bold mb-4">Project 3</h3>
                                <p className="text-sm">Description of my project. Highlight key features and technologies used.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/skills-bg.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                    <h2 className="text-3xl font-semibold mb-8">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-gray-200 px-4 py-2 rounded-full">JavaScript</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">TypeScript</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">React</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">Next.js</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">CSS</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">HTML</span>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/contact-bg.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                    <h2 className="text-3xl font-semibold mb-8">Contact</h2>
                    <p className="text-lg mb-8">Feel free to reach out to me via email at <a href="mailto:saycheese5963@gmail.com" className="text-blue-500 underline">saycheese5963@gmail.com</a></p>
                    <a href="https://linkedin.com/in/wataru-murata" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;
