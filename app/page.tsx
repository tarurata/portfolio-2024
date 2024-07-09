import React, { FormEvent } from 'react';
import ContactForm from '../components/ContactForm';
import Projects from './projects/page';
import Image from 'next/image';

const Home: React.FC = () => {
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <main className="flex flex-col items-center justify-between">
            {/* Hero Section */}
            <section className="relative w-full h-screen bg-cover bg-center -mt-14" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
                    <p className="text-xl mb-8">Hi, Im Wataru Murata, a passionate web developer with 5 years of experience.</p>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/wataru-murata"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <Image src="/profile.png" alt="Profile Picture" width={200} height={200} className="rounded-full mb-6 border-4 border-blue-950 border-opacity-85"/>
                        </a>
                        <div className="w-50 h-50 mb-6 flex items-center justify-center">
                            <Image src="https://tryhackme-badges.s3.amazonaws.com/tarataratara.png" alt="TryHackMe Badge" width={200} height={200} className="object-contain"/>
                        </div>
                    </div>
                    <a href="#projects" className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">View Projects</a>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/projects-bg.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center h-screen justify-center text-white text-center px-4">
                    <div className="w-full max-w-5xl text-center">
                        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
                        <Projects />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/skills-bg.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                    <h2 className="text-3xl font-semibold mb-8">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-900">
                        <span className="bg-gray-200 px-4 py-2 rounded-full">GA/GTM</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">Python</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">PHP</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">Terraform</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">CircleCI</span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full">JavaScript</span>
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
                    <ContactForm />
                </div>
            </section>
        </main>
    );
};

export default Home;
