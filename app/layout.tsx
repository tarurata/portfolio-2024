import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@/components/query-client-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wataru Murata - Full Stack Developer",
  description:
    "Portfolio website of Wataru Murata, a Full Stack Developer with 5 years of experience and expertise in Google Analytics and Google Tag Manager.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M2FG6XGN');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2FG6XGN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
