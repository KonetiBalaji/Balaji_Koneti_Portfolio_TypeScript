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
        I am <strong>Balaji Koneti</strong>, a passionate Data Scientist and AI
        Engineer with <strong>3+ years</strong> of software experience. I am
        currently pursuing <strong>Masters in Computer Science</strong> and
        working as a <strong>Teaching Assistant</strong> for the LLM (Large
        Language Models) course. I specialize in building intelligent systems
        using <strong>ML</strong>, <strong>GenAI</strong>, and{" "}
        <strong>RAG</strong> architectures.
      </p>

      <div className="flex flex-wrap gap-4">
        {[
          "AI/ML/RAG/GenAI Developer",
          "Masters in CS",
          "Teaching Assistant – LLMs",
          "3+ Years Experience",
          "Ex Infoscion",
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
