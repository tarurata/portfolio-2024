"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 border-4 border-white dark:border-slate-800 shadow-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-600 dark:text-slate-300">
                WM
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Hello, I am
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Wataru Murata
          </h2>

          {/* Title */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-medium">
            Full Stack Developer
          </p>

          {/* Brief Description */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            5 years of experience in full-stack development with expertise in
            Google Analytics, Google Tag Manager, and modern web technologies.
            Currently advancing in cybersecurity.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-slate-600 dark:text-slate-400">
            <a
              href="tel:778-928-2224"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              778-928-2224
            </a>
            <a
              href="mailto:saycheese5963@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              saycheese5963@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/wataru-murata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/tarurata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection("about")}
              variant="default"
              size="lg"
            >
              About Me
            </Button>
            <Button
              onClick={() => scrollToSection("experience")}
              variant="outline"
              size="lg"
            >
              Experience
            </Button>
            <Button
              onClick={() => scrollToSection("skills")}
              variant="outline"
              size="lg"
            >
              Skills
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
            >
              Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
