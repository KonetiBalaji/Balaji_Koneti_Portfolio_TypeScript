"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Balaji Koneti",
    "jobTitle": "Machine Learning Engineer (GenAI/RAG)",
    "description": "Machine Learning Engineer with 6+ years in software engineering, shipping production retrieval and evaluation systems on AWS. Delivered measurable gains in retrieval relevance (+22% P@5), latency (P95 640ms), and LLM cost (-31%).",
    "url": "https://balaji-konetidev.vercel.app/",
    "image": "https://balaji-konetidev.vercel.app/profile.jpg",
    "sameAs": [
      "https://linkedin.com/in/BalajiKoneti",
      "https://github.com/KonetiBalaji",
      "https://www.credly.com/users/balaji-koneti/"
    ],
    "knowsAbout": [
      "Machine Learning",
      "GenAI",
      "RAG Architecture",
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "Vector Search",
      "LLMs",
      "OpenAI GPT-4",
      "Anthropic Claude",
      "Python",
      "FastAPI",
      "NLP",
      "RAGAS",
      "SHAP",
      "LIME",
      "MLflow",
      "XGBoost",
      "scikit-learn",
      "PyTorch",
      "BERT",
      "Transformers",
      "AWS",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "SQL",
      "ETL"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Northern Arizona University",
        "location": "Flagstaff, AZ, USA",
        "degree": "Master of Science in Computer Science",
        "startDate": "2024-01",
        "endDate": "2025-05"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Jawaharlal Nehru Technological University",
        "location": "Tirupati, AP, India",
        "degree": "Bachelor of Technology in Computer Science",
        "startDate": "2016-06",
        "endDate": "2020-11"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Progress Solutions",
      "jobTitle": "Machine Learning Engineer",
      "location": "Plano, TX"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Machine Learning Engineer",
      "description": "Shipping production RAG retrieval and evaluation systems on AWS with measurable impact in relevance, latency, and cost.",
      "skills": [
        "Python",
        "LangChain",
        "pgvector",
        "FastAPI",
        "AWS",
        "RAGAS",
        "LLM Evaluation",
        "GenAI",
        "RAG"
      ]
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "AWS Certified Machine Learning - Specialty",
        "dateCreated": "2025-05"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "IBM Machine Learning Specialist - Advanced",
        "dateCreated": "2025-04"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Deep Learning using TensorFlow",
        "dateCreated": "2025-04"
      }
    ],
    "nationality": "Indian",
    "email": "balaji.koneti08@gmail.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
