'use client';

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
    return (
        <Card className="project-card relative overflow-hidden transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm hover:shadow-xl hover:scale-[1.02] hover:border-blue-200 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/50 transition-all duration-300" />
            <CardHeader className="relative">
                <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </CardTitle>
                <CardDescription className="text-slate-600">{description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 relative">
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {technologies.map((tech, techIndex) => (
                        <Badge
                            key={techIndex}
                            variant="outline"
                            className="technology-badge bg-gradient-to-r from-blue-50 to-slate-50 hover:from-blue-100 hover:to-slate-100 text-slate-700 hover:text-blue-700 border-blue-200/50 hover:border-blue-300 hover:shadow-sm transition-all duration-300 cursor-default px-3 py-1"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-white/50 hover:bg-white/80 transition-colors duration-300 relative z-10"
                >
                    <ExternalLink className="w-3 h-3" />
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
} 