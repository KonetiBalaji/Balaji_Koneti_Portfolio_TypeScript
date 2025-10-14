import "../styles/globals.css";

import { Providers } from "./Providers";
import StructuredData from "@/components/StructuredData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://balaji-konetidev.vercel.app'),
  title: {
    default: "Balaji Koneti - AI/ML Engineer & Data Scientist",
    template: "%s | Balaji Koneti"
  },
  description: "AI/ML Engineer with 3+ years experience. Masters in CS, Teaching Assistant for LLMs. Specializing in Python, Machine Learning, GenAI, and RAG architectures.",
  keywords: [
    "AI engineer",
    "machine learning engineer",
    "gen ai engineer", 
    "data scientist",
    "Python developer",
    "LLM specialist",
    "GenAI expert",
    "RAG architecture",
    "Balaji Koneti",
    "portfolio",
    "Northern Arizona University",
    "Teaching Assistant",
    "Infosys",
    "software engineer"
  ],
  authors: [{ name: "Balaji Koneti", url: "https://balaji-konetidev.vercel.app" }],
  creator: "Balaji Koneti",
  publisher: "Balaji Koneti",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Balaji Koneti Portfolio",
    title: "Balaji Koneti - AI/ML Engineer & Data Scientist",
    description: "AI/ML Engineer with expertise in Python, Machine Learning, and Large Language Models. View my projects, experience, and technical skills.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Balaji Koneti - AI/ML Engineer Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Koneti - AI/ML Engineer",
    description: "AI/ML Engineer specializing in Python, Machine Learning, and Large Language Models",
    images: ["/profile.jpg"],
    creator: "@BalajiKoneti",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  classification: "AI/ML Engineer Portfolio",
  other: {
    "google-site-verification": "google598c3b6c70f1eab6.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}