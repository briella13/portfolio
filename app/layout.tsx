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
    url: "https://gubatmia.com", // update if needed, standard url
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
      <body
        className="min-h-full flex flex-col m-0 p-0 font-sans"
        style={{
          background:
            "linear-gradient(to right, #F8FAFC 0%, #EFF6FF 50%, #FAF5FF 100%)",
        }}
      >
        <AppRouterCacheProvider>
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
