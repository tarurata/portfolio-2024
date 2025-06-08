import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Tech Specialist",
      company: "London Drugs",
      location: "Vancouver, BC",
      period: "Sep 2024 – Present",
      description: [
        "Provided technical support and solutions for customers in Computer and Photo/Electronics departments",
        "Demonstrated strong written and verbal communication skills while assisting customers and collaborating with team members",
      ],
      technologies: ["Customer Service", "Technical Support", "Electronics"],
    },
    {
      title: "Digital Analytics Engineer",
      company: "DMM.com Group",
      location: "Tokyo, Japan",
      period: "Jun 2020 – Nov 2023",
      description: [
        "Managed over 40 Google Tag Manager (GTM) containers using GTM 360's zone function, implementing a hierarchical setup for efficient oversight",
        "Led the transition from Universal Analytics to Google Analytics 4 (GA4), ensuring dual tracking and early GA4 adoption",
        "Implemented server-side GTM on Google App Engine to enable tracking without third-party cookies",
        "Automated department code uploads to GA using Python with GTM API, integrating CircleCI for updates",
        "Developed and maintained a tracking system installed on all websites, handling 2.5 billion page views per month",
        "Utilized SQL queries in BigQuery for data verification and addressed discrepancies to ensure data reliability",
        "Optimized website performance by identifying and resolving JavaScript issues using Chrome DevTools",
      ],
      technologies: [
        "Google Analytics",
        "Google Tag Manager",
        "Python",
        "BigQuery",
        "CircleCI",
        "Google App Engine",
      ],
    },
    {
      title: "Web Developer",
      company: "Navicks Works",
      location: "Tokyo, Japan",
      period: "Aug 2021 – Oct 2021",
      description: [
        "Developed a clinic reservation service using Laravel and Vue.js",
      ],
      technologies: ["Laravel", "Vue.js", "PHP", "JavaScript"],
    },
    {
      title: "Web Developer",
      company: "Plus Inc.",
      location: "Tokyo, Japan",
      period: "Mar 2020 – Mar 2021",
      description: [
        "Specialized in WordPress theme development and website construction",
      ],
      technologies: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Web Developer",
      company: "Smart Social, Inc.",
      location: "Tokyo, Japan",
      period: "Aug 2019 – Nov 2019",
      description: [
        "Developed relocation information service with Laravel that allows you to apply for all the necessary procedures for moving",
        "Executed front-end development tasks, enhancing the site's user experience using jQuery",
      ],
      technologies: ["Laravel", "jQuery", "PHP", "JavaScript"],
    },
    {
      title: "Server Engineer",
      company: "NTT Communications",
      location: "Tokyo, Japan",
      period: "Jun 2018 – May 2019",
      description: [
        "Contracted Employee through Persol Technology Staff Co., Ltd.",
        "Maintained and operated Oracle Service Bus",
        "Developed an internal web portal using PHP and JavaScript",
        "Maintained Zabbix to monitor server status",
      ],
      technologies: [
        "Oracle Service Bus",
        "PHP",
        "JavaScript",
        "Zabbix",
        "Server Management",
      ],
    },
    {
      title: "System Administrator",
      company: "Riverfront Research Center",
      location: "Tokyo, Japan",
      period: "Oct 2015 – Mar 2016",
      description: [
        "Managed in-house server (Windows Server 2008)",
        "Operated the internal help desk, including PC setup, management, and macro creation using VBA",
      ],
      technologies: [
        "Windows Server",
        "VBA",
        "System Administration",
        "Help Desk",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-blue-600 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-slate-700 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
