export default function StructuredData() {
  const baseUrl = "https://balajikoneti.dev";

  const personData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Balaji Koneti - Machine Learning Engineer",
        "description": "Portfolio of Balaji Koneti, Machine Learning Engineer specializing in GenAI, RAG Architecture, and production ML systems.",
        "publisher": { "@id": `${baseUrl}/#person` },
        "inLanguage": "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/#profilepage`,
        "url": baseUrl,
        "name": "Balaji Koneti - ML Engineer Portfolio",
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": { "@id": `${baseUrl}/#person` },
        "mainEntity": { "@id": `${baseUrl}/#person` },
        "inLanguage": "en-US",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": "Balaji Koneti",
        "givenName": "Balaji",
        "familyName": "Koneti",
        "jobTitle": "Machine Learning Engineer",
        "description":
          "Machine Learning Engineer (GenAI/RAG) with 6+ years in software engineering. Shipping production retrieval and evaluation systems on AWS. Delivered +22% retrieval relevance (P@5), P95 latency 640ms, and -31% LLM cost per request.",
        "url": baseUrl,
        "image": `${baseUrl}/profile.png`,
        "email": "balaji.koneti08@gmail.com",
        "nationality": "Indian",
        "sameAs": [
          "https://linkedin.com/in/BalajiKoneti",
          "https://github.com/KonetiBalaji",
          "https://www.credly.com/users/balaji-koneti/",
        ],
        "knowsAbout": [
          "Machine Learning",
          "Generative AI",
          "RAG Architecture",
          "Retrieval Augmented Generation",
          "LangChain",
          "LlamaIndex",
          "pgvector",
          "Vector Search",
          "Semantic Search",
          "Large Language Models",
          "OpenAI GPT-4",
          "Anthropic Claude",
          "Prompt Engineering",
          "Python",
          "FastAPI",
          "Natural Language Processing",
          "RAGAS Evaluation",
          "LLM-as-Judge",
          "SHAP",
          "LIME",
          "MLflow",
          "XGBoost",
          "scikit-learn",
          "PyTorch",
          "BERT",
          "Transformers",
          "AWS SageMaker",
          "Docker",
          "Terraform",
          "PostgreSQL",
          "Redis",
          "ETL Pipelines",
          "CI/CD",
        ],
        "knowsLanguage": ["English", "Telugu", "Hindi"],
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Northern Arizona University",
            "url": "https://nau.edu",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Flagstaff",
              "addressRegion": "AZ",
              "addressCountry": "US",
            },
          },
          {
            "@type": "CollegeOrUniversity",
            "name": "Jawaharlal Nehru Technological University",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tirupati",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "IN",
            },
          },
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Master of Science in Computer Science",
            "credentialCategory": "degree",
            "recognizedBy": {
              "@type": "CollegeOrUniversity",
              "name": "Northern Arizona University",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Bachelor of Technology in Computer Science",
            "credentialCategory": "degree",
            "recognizedBy": {
              "@type": "CollegeOrUniversity",
              "name": "Jawaharlal Nehru Technological University",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "AWS Certified Machine Learning - Specialty",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Amazon Web Services",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "IBM Machine Learning Specialist - Advanced",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "IBM",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Deep Learning using TensorFlow",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "IBM",
            },
          },
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Progress Solutions",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Plano",
            "addressRegion": "TX",
            "addressCountry": "US",
          },
        },
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Machine Learning Engineer",
            "occupationLocation": {
              "@type": "City",
              "name": "Plano, TX",
            },
            "description":
              "Shipping production RAG retrieval and evaluation systems on AWS. Led design and rollout cutting P95 latency from 1.3s to 640ms, improving retrieval relevance by 22%, and reducing LLM spend by 31%.",
            "skills":
              "Python, LangChain, pgvector, FastAPI, AWS, RAGAS, LLM Evaluation, GenAI, RAG, Docker, Terraform, Redis",
          },
          {
            "@type": "Occupation",
            "name": "Software Engineer - Machine Learning Systems",
            "occupationLocation": {
              "@type": "City",
              "name": "Bangalore, India",
            },
            "description":
              "Built fraud-detection pipelines over 1M+ transactional records at Infosys. Improved ETL performance by 43% and integrated ML outputs into backend services.",
            "skills":
              "Python, SQL, XGBoost, REST APIs, ETL, PostgreSQL, AWS S3",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}
