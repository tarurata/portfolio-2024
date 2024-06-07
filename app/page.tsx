import Image from "next/image";

const Home: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-5xl flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">
                    Hi, I'm Wataru Murata, a passionate web developer with 5 years of experience.
                </p>
                <Image
                    src="/profile.jpg"
                    alt="Profile Picture"
                    className="rounded-full"
                    width={150}
                    height={150}
                    priority
                />
            </div>
            <div className="w-full max-w-5xl text-center mt-16">
                <h2 className="text-3xl font-semibold mb-8">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="border p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Project 1</h3>
                        <p className="text-sm">Description of my project. Highlight key features and technologies used.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Project 2</h3>
                        <p className="text-sm">Description of my project. Highlight key features and technologies used.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Project 3</h3>
                        <p className="text-sm">Description of my project. Highlight key features and technologies used.</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-5xl text-center mt-16">
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
            <div className="w-full max-w-5xl text-center mt-16 mb-32">
                <h2 className="text-3xl font-semibold mb-8">Contact</h2>
                <p className="text-lg mb-8">Feel free to reach out to me via email at saycheese5963@gmail.com</p>
                <a
                    href="https://linkedin.com/in/wataru-murata"
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn Profile
                </a>
            </div>
        </main>
    );
};

export default Home;
