"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Balaji Koneti",
    "jobTitle": "AI/ML Engineer & Data Scientist",
    "description": "AI/ML Engineer with 3+ years experience. Masters in CS, Teaching Assistant for LLMs. Specializing in Python, Machine Learning, GenAI, and RAG architectures.",
    "url": "https://balaji-konetidev.vercel.app/",
    "image": "https://balaji.dev/profile.jpg",
    "sameAs": [
      "https://linkedin.com/in/BalajiKoneti",
      "https://github.com/KonetiBalaji",
      "https://www.credly.com/users/balaji-koneti/"
    ],
    "knowsAbout": [
      "Machine Learning",
      "Python",
      "Large Language Models",
      "GenAI",
      "Data Science",
      "RAG Architecture",
      "BART",
      "Transformers",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "SQL",
      "NoSQL",
      "Git",
      "Java",
      "Spring Microservices",
      "AWS"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Northern Arizona University",
        "location": "Arizona, USA",
        "degree": "Master's in Computer Science",
        "startDate": "2024",
        "endDate": "2025"
      },
      {
        "@type": "CollegeOrUniversity", 
        "name": "JNTU Anantapur",
        "location": "India",
        "degree": "Bachelor of Technology - Computer Science",
        "startDate": "2016",
        "endDate": "2020"
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Northern Arizona University",
        "jobTitle": "Teaching Assistant - LLMs",
        "description": "Assisted in teaching and mentoring students on LLM concepts and real-world applications"
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "AI/ML Engineer",
      "description": "Building intelligent systems using Machine Learning, GenAI, and RAG architectures",
      "skills": [
        "Python",
        "Machine Learning",
        "Large Language Models",
        "GenAI",
        "RAG",
        "Data Science",
        "Deep Learning"
      ]
    },
    "award": [
      "Rise Award - Infosys",
      "Insta Award - Infosys"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Computer Society of India",
        "role": "Executive Body Member & Student Coordinator"
      }
    ],
    "nationality": "Indian",
    "birthPlace": "India",
    "email": "koneti.balaji08@gmail.com",
    "telephone": "+1-XXX-XXX-XXXX"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
