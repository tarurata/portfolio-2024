import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  BarChart3,
  Settings,
  Monitor,
  Cloud,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Python",
        "PHP",
        "JavaScript",
        "HTML/CSS",
        "SQL",
        "Shell Script",
      ],
      color: "text-green-600",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Laravel", "Django", "React", "Vue.js", "WordPress"],
      color: "text-blue-600",
    },
    {
      title: "Analytics & Tracking",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        "Google Analytics",
        "Google Tag Manager",
        "Google BigQuery",
        "Data Analysis",
        "Conversion Tracking",
      ],
      color: "text-purple-600",
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        "Docker",
        "CircleCI",
        "Terraform",
        "GitHub Actions",
        "Vercel",
        "Git",
      ],
      color: "text-orange-600",
    },
    {
      title: "Development Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["VS Code", "PyCharm", "IntelliJ", "Chrome DevTools", "Zabbix"],
      color: "text-red-600",
    },
    {
      title: "Database & Infrastructure",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "BigQuery",
        "Oracle Service Bus",
        "Windows Server",
        "Google App Engine",
        "Server Management",
      ],
      color: "text-indigo-600",
    },
  ];

  const highlights = [
    "5+ years of Full Stack Development experience",
    "Managed 40+ Google Tag Manager containers",
    "Handled 2.5 billion page views per month",
    "Expert in Google Analytics 4 migration",
    "Cybersecurity certification in progress",
    "Bilingual: English & Japanese",
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle
                    className={`flex items-center gap-2 ${category.color}`}
                  >
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Highlights */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-slate-600">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-blue-700 dark:text-blue-300">
                Key Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Expertise Summary */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Specialized in building scalable web applications with a
                  strong focus on analytics and data-driven solutions. Extensive
                  experience in managing large-scale tracking implementations,
                  server-side analytics, and performance optimization. Currently
                  expanding expertise in cybersecurity to build more secure and
                  robust applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
