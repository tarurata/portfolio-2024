import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@/components/query-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wataru Murata - Full Stack Developer",
  description:
    "Portfolio website of Wataru Murata, a Full Stack Developer with 5 years of experience and expertise in Google Analytics and Google Tag Manager.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Google Analytics",
    "React",
    "PHP",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Wataru Murata" }],
  creator: "Wataru Murata",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wataru-murata.vercel.app",
    title: "Wataru Murata - Full Stack Developer",
    description:
      "Portfolio website showcasing my experience as a Full Stack Developer with expertise in analytics and web development.",
    siteName: "Wataru Murata Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wataru Murata - Full Stack Developer",
    description:
      "Portfolio website showcasing my experience as a Full Stack Developer with expertise in analytics and web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
