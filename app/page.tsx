import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Award,
} from "lucide-react";
import { Metadata } from "next";
import { Header } from "./components/header";
import { CertificationCard } from "./components/CertificationCard";

export const metadata: Metadata = {
  title: "Wataru Murata - Full Stack Developer Portfolio",
  description:
    "Portfolio of Wataru Murata, Full Stack Developer with 5 years of experience in Google Analytics, web development, and cybersecurity.",
};

const experiences = [
  {
    title: "Tech Specialist",
    company: "London Drugs",
    location: "Vancouver, BC",
    period: "Sep 2024 – Present",
    responsibilities: [
      "Provided technical support and solutions for customers in Computer and Photo/Electronics departments",
      "Demonstrated strong written and verbal communication skills while assisting customers and collaborating with team members",
    ],
  },
  {
    title: "Digital Analytics Engineer",
    company: "DMM.com Group",
    location: "Tokyo, Japan",
    period: "Jun 2020 – Nov 2023",
    responsibilities: [
      "Managed over 40 Google Tag Manager (GTM) containers using GTM 360's zone function, implementing a hierarchical setup for efficient oversight",
      "Led the transition from Universal Analytics to Google Analytics 4 (GA4), ensuring dual tracking and early GA4 adoption",
      "Implemented server-side GTM on Google App Engine to enable tracking without third-party cookies",
      "Automated department code uploads to GA using Python with GTM API, integrating CircleCI for updates",
      "Developed and maintained a tracking system installed on all websites, handling 2.5 billion page views per month",
      "Utilized SQL queries in BigQuery for data verification and addressed discrepancies to ensure data reliability",
      "Optimized website performance by identifying and resolving JavaScript issues using Chrome DevTools, significantly improving site efficiency",
    ],
  },
  {
    title: "Web Developer",
    company: "Navicks Works",
    location: "Tokyo, Japan",
    period: "Aug 2021 – Oct 2021",
    responsibilities: [
      "Developed a clinic reservation service using Laravel and Vue.js",
    ],
  },
  {
    title: "Web Developer",
    company: "Plus Inc.",
    location: "Tokyo, Japan",
    period: "Mar 2020 – Mar 2021",
    responsibilities: [
      "Specialized in WordPress theme development and website construction",
    ],
  },
  {
    title: "Web Developer",
    company: "Smart Social, Inc.",
    location: "Tokyo, Japan",
    period: "Aug 2019 – Nov 2019",
    responsibilities: [
      "Developed relocation information service with Laravel that allows you to apply for all the necessary procedures for moving",
      "Executed front-end development tasks, enhancing the site's user experience using jQuery",
    ],
  },
  {
    title: "Server Engineer",
    company: "NTT Communications",
    location: "Tokyo, Japan",
    period: "Jun 2018 – May 2019",
    responsibilities: [
      "Contracted Employee through Persol Technology Staff Co., Ltd.",
      "Maintained and operated Oracle Service Bus",
      "Developed an internal web portal using PHP and JavaScript",
      "Maintained Zabbix to monitor server status",
    ],
  },
  {
    title: "System Administrator",
    company: "Riverfront Research Center",
    location: "Tokyo, Japan",
    period: "Oct 2015 – Mar 2016",
    responsibilities: [
      "Managed in-house server (Windows Server 2008)",
      "Operated the internal help desk, including PC setup, management, and macro creation using VBA",
    ],
  },
];

const education = [
  {
    degree: "Postgraduate Certificate in Cybersecurity",
    school: "Canadian College of Technology and Business (CCTB)",
    location: "Vancouver, BC",
    period: "Jan 2024 – Jan 2026",
  },
  {
    degree: "Bachelor of Liberal Arts Informatics",
    school: "The Open University",
    location: "Tokyo, Japan",
    period: "Apr 2019 – Mar 2024",
  },
  {
    degree: "Bachelor of Laws",
    school: "Hiroshima University",
    location: "Hiroshima, Japan",
    period: "Apr 2007 – Mar 2012",
  },
];

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "May 2025",
    logo: "https://www.comptia.org/favicon.ico",
    credentialUrl: "https://www.credly.com/badges/bf62dfba-98e1-4fe7-8372-62d313e94370/public_url"
  },
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "Aug 2024",
    logo: "https://www.isc2.org/favicon.ico",
    credentialUrl: "https://www.credly.com/badges/924bd995-cd00-4e17-8b27-b7867ce4f52b/linked_in_profile"
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    date: "Mar 2025",
    logo: "https://www.google.com/favicon.ico",
    credentialUrl: "https://skillshop.credential.net/8148410e-df77-4ce5-9f73-9094814b1280"
  },
  {
    name: "Google BigQuery and SQL with Google Analytics 4",
    issuer: "Udemy",
    date: "Mar 2024",
    logo: "",
    credentialUrl: ""
  },
];

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "PHP", "JavaScript", "HTML/CSS", "SQL", "Shell Script"],
  },
  {
    category: "Frameworks",
    skills: ["Laravel", "Django", "React", "Vue.js", "WordPress"],
  },
  {
    category: "Analytics Tools",
    skills: ["Google Analytics", "Google Tag Manager", "Google BigQuery"],
  },
  {
    category: "CI/CD",
    skills: ["Docker", "CircleCI", "Terraform", "GitHub Actions", "Vercel"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "VS Code", "PyCharm", "IntelliJ"],
  },
];

const projects = [
  {
    title: "Analytics Migration System",
    description:
      "Led transition from Universal Analytics to GA4 for 40+ websites with 2.5B monthly page views",
    technologies: ["Google Analytics", "Python", "BigQuery"],
  },
  {
    title: "Server-side GTM Implementation",
    description:
      "Implemented server-side tracking solution on Google App Engine for cookie-less tracking",
    technologies: ["Google Tag Manager", "Python", "Google Cloud"],
  },
  {
    title: "Clinic Reservation Service",
    description:
      "Full-stack web application for medical appointment booking and management",
    technologies: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "Relocation Service Platform",
    description:
      "Comprehensive platform for managing moving procedures and paperwork digitally",
    technologies: ["Laravel", "jQuery", "PHP"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-transparent">
      <div className="fixed inset-0 -z-10 bg-dreamy" />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-4 prose-headings:leading-loose">
                  Hello, I am
                  <br />
                  <span className="text-blue-600">Wataru Murata</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 mb-6">
                  Full Stack Developer
                </p>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  5 years of experience with deep expertise in Google Analytics
                  and Google Tag Manager. Currently advancing cybersecurity
                  knowledge at CCTB.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <a
                    href="mailto:saycheese5963@gmail.com"
                    className="contact-link"
                  >
                    <Mail className="w-4 h-4" />
                    saycheese5963@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/wataru-murata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/tarurata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
                <Button size="lg" className="gap-2" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
              <div className="flex-shrink-0">
                <Avatar className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-white shadow-2xl">
                  <AvatarImage src="/profile_2.png" alt="Wataru Murata" />
                  <AvatarFallback className="text-4xl font-bold bg-blue-100 text-blue-600">
                    WM
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-12 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">About</h2>
            <Card className="mb-8">
              <CardHeader className="border-b border-slate-200">
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <p className="text-slate-600 leading-relaxed">
                  I am a Full Stack Developer with 5 years of experience, deep
                  expertise in Google Analytics (GA) and Google Tag Manager (GTM).
                  Currently advancing my cybersecurity knowledge at the Canadian
                  College of Technology and Business (CCTB).
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 py-12 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Experience</h2>
            {/* Work Experience */}
            <Card className="mb-6 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b border-slate-200">
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-500 text-sm flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </p>
                        <p className="text-slate-500 text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-slate-600 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="mb-6 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b border-slate-200">
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 font-medium">{edu.school}</p>
                        <p className="text-slate-500 text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </p>
                      </div>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="mb-6 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b border-slate-200">
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <CertificationCard
                      key={index}
                      name={cert.name}
                      issuer={cert.issuer}
                      date={cert.date}
                      logo={cert.logo}
                      credentialUrl={cert.credentialUrl}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="shadow-lg rounded-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b border-slate-200">
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="skill-badge"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="project-card hover:shadow-lg transition-shadow duration-300 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="technology-badge"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-3 h-3" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full px-4 py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
          <p className="text-slate-300 mb-8">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:saycheese5963@gmail.com" className="footer-link">
              <Mail className="w-5 h-5" />
              saycheese5963@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/wataru-murata"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/tarurata"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Wataru Murata. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
