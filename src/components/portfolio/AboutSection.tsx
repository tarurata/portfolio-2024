import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      institution: "Canadian College of Technology and Business (CCTB)",
      degree: "Postgraduate Certificate in Cybersecurity",
      period: "Jan 2024 – Jan 2026",
      location: "Vancouver, BC",
    },
    {
      institution: "The Open University",
      degree: "Bachelor of Liberal Arts Informatics",
      period: "Apr 2019 – Mar 2024",
      location: "Tokyo, Japan",
    },
    {
      institution: "Hiroshima University",
      degree: "Bachelor of Laws",
      period: "Apr 2007 – Mar 2012",
      location: "Hiroshima, Japan",
    },
  ];

  const certifications = [
    { name: "CompTIA Security+", issuer: "CompTIA", date: "May 2025" },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      date: "Aug 2024",
    },
    {
      name: "Google Analytics Certification",
      issuer: "Google",
      date: "Mar 2025",
    },
    {
      name: "Google BigQuery and SQL with Google Analytics 4",
      issuer: "Udemy",
      date: "Mar 2024",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Summary */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                  I am a Full Stack Developer with 5 years of experience, deep
                  expertise in Google Analytics (GA) and Google Tag Manager
                  (GTM). Currently advancing my cybersecurity knowledge at the
                  Canadian College of Technology and Business (CCTB). I have a
                  proven track record of managing large-scale analytics
                  implementations, optimizing web performance, and developing
                  comprehensive tracking systems that handle billions of page
                  views.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-600 pl-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {edu.degree}
                    </p>
                    <div className="flex flex-col text-sm text-slate-600 dark:text-slate-400">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  >
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{cert.issuer}</Badge>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
