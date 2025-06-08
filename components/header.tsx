import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-slate-900">WM</span>
                </Link>
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
            </div>
        </header>
    );
} 