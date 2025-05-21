'use client';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java'],
  },
  {
    category: 'Databases',
    items: ['SQL', 'NoSQL'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['Git', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    category: 'AI / ML / GenAI',
    items: ['OpenCV', 'BART', 'RAG', 'LLMs'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-12 max-w-5xl mx-auto bg-white dark:bg-black transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-left">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4 text-left relative z-10">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
