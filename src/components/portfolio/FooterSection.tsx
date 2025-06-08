"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUp,
} from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "778-928-2224",
      href: "tel:778-928-2224",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "saycheese5963@gmail.com",
      href: "mailto:saycheese5963@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Vancouver, BC",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/wataru-murata",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/tarurata",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                I'm currently open to new opportunities and would love to hear
                about your projects. Feel free to reach out if you'd like to
                collaborate or just want to connect.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    Whether you have a project in mind, want to discuss
                    opportunities, or simply want to network, I'd love to hear
                    from you. I'm particularly interested in roles involving
                    analytics, full-stack development, and cybersecurity.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${contact.href !== "#"
                          ? "hover:bg-slate-800 cursor-pointer"
                          : "cursor-default"
                        }`}
                    >
                      <div className="p-2 bg-blue-600 rounded-lg">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-slate-300">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action Card */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Work Together?
                  </h3>
                  <p className="text-slate-300 mb-8">
                    Download my resume or send me a message to get started on
                    your next project.
                  </p>
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-700">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">5+</p>
                      <p className="text-sm text-slate-400">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">40+</p>
                      <p className="text-sm text-slate-400">
                        Projects Completed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-400">
                © 2024 Wataru Murata. All rights reserved.
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Full Stack Developer • Analytics Expert • Cybersecurity Student
              </p>
            </div>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-400 hover:bg-slate-800"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
