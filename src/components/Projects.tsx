'use client';

import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Netflix EDA Analysis',
    description:
      'Explore Netflix data with Python and visualize insights using Pandas & Seaborn.',
    tags: ['Python', 'Pandas', 'Seaborn', 'EDA'],
    github: 'https://github.com/yourusername/netflix-eda',
  },
  {
    title: 'Summarization Evaluation Pipeline',
    description:
      'Evaluate text summaries with BART, METEOR, ROUGE, and LLM-as-a-Judge techniques.',
    tags: ['BART', 'LLM', 'Eval Metrics', 'Transformers'],
    github: 'https://github.com/yourusername/summarization-eval',
  },
  {
    title: 'Recommender System (WIP)',
    description:
      'Matrix factorization-based recommender system built with scikit-learn.',
    tags: ['Scikit-learn', 'Recommender', 'Matrix Factorization'],
    github: 'https://github.com/yourusername/recommender-system',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 max-w-5xl mx-auto text-center md:text-left bg-white dark:bg-black transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow hover:shadow-md transition duration-300 flex flex-col justify-between border border-gray-200 dark:border-gray-700"
          >
            <div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[56px]">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 shrink-0">
                  <b>Skills</b>:
                </span>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black dark:text-white hover:underline mt-4"
            >
              <FaGithub size={20} />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
