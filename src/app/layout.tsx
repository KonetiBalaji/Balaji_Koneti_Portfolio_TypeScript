import "../styles/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import { Providers } from "./Providers";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://balaji-konetidev.vercel.app'),
  title: {
    default: "Balaji Koneti - Machine Learning Engineer | GenAI & RAG",
    template: "%s | Balaji Koneti"
  },
  description: "Machine Learning Engineer (GenAI/RAG) with 6+ years in software engineering. Shipping production retrieval & evaluation systems on AWS. +22% retrieval relevance, P95 640ms, -31% LLM cost.",
  keywords: [
    "machine learning engineer",
    "GenAI engineer",
    "RAG architecture",
    "LLM engineer",
    "retrieval augmented generation",
    "Python developer",
    "LangChain",
    "pgvector",
    "FastAPI",
    "AWS SageMaker",
    "ML evaluation",
    "RAGAS",
    "Balaji Koneti",
    "portfolio",
    "Northern Arizona University",
    "Infosys",
    "production ML systems"
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
    title: "Balaji Koneti - Machine Learning Engineer | GenAI & RAG",
    description: "ML Engineer shipping production RAG systems. +22% retrieval relevance, P95 640ms, -31% LLM cost. 6+ years across AWS, LangChain, pgvector.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Balaji Koneti - ML Engineer | GenAI & RAG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Koneti - ML Engineer | GenAI & RAG",
    description: "ML Engineer shipping production RAG systems on AWS. LangChain, pgvector, RAGAS evaluation.",
    images: ["/profile.jpg"],
    creator: "@BalajiKoneti",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  classification: "AI/ML Engineer Portfolio",
  other: {
    "google-site-verification": "rXk-YZcn1SVZnZqtVNI6DuAigAcwyZG64T9AzzV5SRQ",
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
      <body className="noise">
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
