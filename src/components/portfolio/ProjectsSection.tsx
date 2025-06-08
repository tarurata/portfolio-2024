import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  BarChart3,
  Globe,
  Server,
  Shield,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Analytics Platform",
      description:
        "Managed 40+ GTM containers and implemented server-side tracking for 2.5 billion monthly page views. Led GA4 migration across multiple domains with automated deployment pipelines.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: [
        "Google Analytics",
        "GTM",
        "Python",
        "BigQuery",
        "CircleCI",
      ],
      highlights: [
        "2.5B monthly page views",
        "40+ GTM containers",
        "Automated deployments",
      ],
      category: "Analytics & Tracking",
    },
    {
      title: "Medical Clinic Reservation System",
      description:
        "Full-stack web application for clinic appointment booking with real-time availability, patient management, and automated notification system.",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "JavaScript"],
      highlights: [
        "Real-time booking",
        "Patient management",
        "Automated notifications",
      ],
      category: "Web Development",
    },
    {
      title: "Relocation Service Platform",
      description:
        "Comprehensive platform for managing relocation procedures with integrated form submissions, document handling, and multi-step workflow automation.",
      icon: <Server className="w-8 h-8" />,
      technologies: ["Laravel", "jQuery", "PHP", "HTML/CSS"],
      highlights: [
        "Multi-step workflows",
        "Document processing",
        "Automated procedures",
      ],
      category: "Web Development",
    },
    {
      title: "Server Infrastructure Management",
      description:
        "Enterprise server monitoring and management system with automated alerting, performance tracking, and internal portal for system administration.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Oracle Service Bus", "Zabbix", "PHP", "Windows Server"],
      highlights: [
        "24/7 monitoring",
        "Automated alerts",
        "Performance tracking",
      ],
      category: "Infrastructure",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Analytics & Tracking":
        return "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300";
      case "Web Development":
        return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300";
      case "Infrastructure":
        return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A showcase of my professional work in analytics, web development,
              and infrastructure management
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg ${getCategoryColor(project.category)}`}
                    >
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs px-20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 border-blue-200 dark:border-slate-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  I&apos;m always open to discussing new opportunities and
                  interesting projects. Let&apos;s connect and see how we can
                  collaborate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Portfolio
                  </Button>
                  <Button variant="outline" size="lg">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
