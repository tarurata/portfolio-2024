import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import FooterSection from "./FooterSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Portfolio;
