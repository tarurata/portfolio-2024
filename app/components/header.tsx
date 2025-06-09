import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Briefcase, Code2, Mail } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-slate-900">WM</span>
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        About
                    </Link>
                    <Link href="#experience" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Experience
                    </Link>
                    <Link href="#projects" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Projects
                    </Link>
                    <Button variant="outline" size="sm" asChild>
                        <Link href="#contact">Contact</Link>
                    </Button>
                </nav>
                {/* Mobile Navigation */}
                <nav className="flex md:hidden items-center space-x-4">
                    <Link href="#about" className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <User className="w-5 h-5" />
                    </Link>
                    <Link href="#experience" className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <Briefcase className="w-5 h-5" />
                    </Link>
                    <Link href="#projects" className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <Code2 className="w-5 h-5" />
                    </Link>
                    <Link href="#contact" className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                        <Mail className="w-5 h-5" />
                    </Link>
                </nav>
            </div>
        </header>
    );
} 