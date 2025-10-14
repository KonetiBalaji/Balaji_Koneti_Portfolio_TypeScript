export default function About() {
  return (
    <div
      id="about"
      className="px-6 py-12 mt-16 max-w-5xl mx-auto bg-white dark:bg-black"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-left">
        About Me
      </h2>
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
        I&apos;m <strong>Balaji Koneti</strong>, an AI/ML Engineer with{" "}
        <strong>5+ years</strong> of experience delivering scalable machine
        learning and generative AI solutions across financial, healthcare, and
        academic domains. I hold a <strong>Master&apos;s in Computer Science</strong>{" "}
        from Northern Arizona University and served as a{" "}
        <strong>Teaching Assistant</strong> for the Large Language Models (LLM)
        course. My expertise includes end-to-end ML pipelines,{" "}
        <strong>RAG architectures</strong>, <strong>LLM systems</strong>, and{" "}
        <strong>MLOps</strong> using Python, Hugging Face, LangChain, and cloud
        platforms (AWS, GCP, Kubernetes).
      </p>

      <div className="flex flex-wrap gap-4">
        {[
          "AI/ML Engineer",
          "5+ Years Experience",
          "Masters in CS - NAU",
          "Teaching Assistant - LLMs",
          "MLOps & Cloud Platforms",
        ].map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-5 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
