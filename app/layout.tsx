import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Navbar } from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mia Gabriella B. Gubat | Design & QA Portfolio",
  description: "Explore the graphic design, UI/UX interface layouts, and quality engineering work of Mia Gabriella B. Gubat. Delivering intentional, polished digital experiences.",
  keywords: ["Mia Gabriella Gubat", "Graphic Design", "UI UX Design", "Quality Engineering", "Portfolio", "Web Design", "Invitation Cards", "Sorsogon"],
  authors: [{ name: "Mia Gabriella Gubat" }],
  openGraph: {
    title: "Mia Gabriella B. Gubat | Design & QA Portfolio",
    description: "Refined brand systems, poster layouts, web designs, and quality assurance portfolios.",
    url: "https://portfolio-gubat.vercel.app",
    siteName: "Mia Gabriella Gubat Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mia Gabriella B. Gubat | Design & QA Portfolio",
    description: "Refined brand systems, poster layouts, web designs, and quality assurance portfolios.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col m-0 p-0 font-sans">
        <AppRouterCacheProvider>
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
