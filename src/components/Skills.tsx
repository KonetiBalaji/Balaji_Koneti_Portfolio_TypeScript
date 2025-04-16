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
      className="px-6 py-20 max-w-5xl mx-auto text-center md:text-left bg-white dark:bg-black transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow hover:shadow-md transition duration-300 flex flex-col justify-between border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
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
