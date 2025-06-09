'use client';

import { Calendar, Award } from "lucide-react";

interface CertificationCardProps {
    name: string;
    issuer: string;
    date: string;
    logo: string;
    credentialUrl: string;
}

export function CertificationCard({ name, issuer, date, logo, credentialUrl }: CertificationCardProps) {
    const handleClick = () => {
        if (credentialUrl) {
            window.open(credentialUrl, '_blank');
        }
    };

    return (
        <div
            className="certification-item p-4 bg-slate-50 rounded-lg border border-slate-200 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-blue-200 hover:scale-[1.02] group cursor-pointer"
            onClick={handleClick}
        >
            <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center border border-slate-200 group-hover:border-blue-200 transition-colors duration-300">
                    {logo ? (
                        <img
                            src={logo}
                            alt={`${issuer} logo`}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <Award className="w-6 h-6 text-blue-500" />
                    )}
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {name}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium">{issuer}</p>
                    <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
} 