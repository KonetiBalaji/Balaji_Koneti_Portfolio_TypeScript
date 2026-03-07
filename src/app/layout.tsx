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
  metadataBase: new URL('https://balajikoneti.dev'),
  title: {
    default: "Balaji Koneti - Machine Learning Engineer | GenAI & RAG Specialist",
    template: "%s | Balaji Koneti"
  },
  description: "Balaji Koneti is a Machine Learning Engineer (GenAI/RAG) with 6+ years shipping production retrieval & evaluation systems on AWS. +22% retrieval relevance, P95 640ms, -31% LLM cost. Expert in LangChain, pgvector, RAGAS, FastAPI.",
  keywords: [
    "Balaji Koneti",
    "Balaji Koneti ML engineer",
    "Balaji Koneti machine learning",
    "Balaji Koneti portfolio",
    "machine learning engineer",
    "GenAI engineer",
    "RAG architecture",
    "RAG engineer",
    "LLM engineer",
    "retrieval augmented generation",
    "LangChain developer",
    "pgvector",
    "FastAPI",
    "AWS SageMaker",
    "ML evaluation",
    "RAGAS evaluation",
    "production ML systems",
    "AI engineer portfolio",
    "Python ML engineer",
    "vector search engineer",
    "NLP engineer",
    "Northern Arizona University CS",
    "Infosys ML engineer",
  ],
  authors: [{ name: "Balaji Koneti", url: "https://balajikoneti.dev" }],
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
    url: "https://balajikoneti.dev",
    siteName: "Balaji Koneti - ML Engineer Portfolio",
    title: "Balaji Koneti - Machine Learning Engineer | GenAI & RAG Specialist",
    description: "ML Engineer shipping production RAG systems. +22% retrieval relevance, P95 640ms, -31% LLM cost. 6+ years across AWS, LangChain, pgvector, RAGAS.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Balaji Koneti - Machine Learning Engineer specializing in GenAI and RAG Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Koneti - ML Engineer | GenAI & RAG",
    description: "ML Engineer shipping production RAG systems on AWS. +22% relevance, P95 640ms, -31% LLM cost. LangChain, pgvector, RAGAS.",
    images: ["/opengraph-image"],
    creator: "@BalajiKoneti",
  },
  alternates: {
    canonical: "https://balajikoneti.dev",
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
