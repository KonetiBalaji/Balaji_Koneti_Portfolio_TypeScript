'use client';

import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Netflix EDA Analysis',
    description:
      'Explore Netflix data with Python and visualize insights using Pandas & Seaborn.',
    tags: ['Python', 'Pandas', 'Seaborn', 'EDA'],
    github: 'https://github.com/yourusername/netflix-eda',
    image: '/projects/netflix-eda.jpg',
  },
  {
    title: 'Summarization Evaluation Pipeline',
    description:
      'Evaluate text summaries with BART, METEOR, ROUGE, and LLM-as-a-Judge techniques.',
    tags: ['BART', 'LLM', 'Eval Metrics', 'Transformers'],
    github: 'https://github.com/yourusername/summarization-eval',
    image: '/projects/summarization.jpg',
  },
  {
    title: 'Recommender System (WIP)',
    description:
      'Matrix factorization-based recommender system built with scikit-learn.',
    tags: ['Scikit-learn', 'Recommender', 'Matrix Factorization'],
    github: 'https://github.com/yourusername/recommender-system',
    image: '/projects/recommender.jpg',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="px-6 py-12 max-w-5xl mx-auto bg-white dark:bg-black transition-colors duration-300"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-left"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-gray-100 dark:border-gray-800 overflow-hidden"
            style={{ textDecoration: "none" }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden rounded-xl mb-6">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === i ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
            </div>

            {/* Content */}
            <div>
              <motion.h3 
                className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4 text-left flex items-center gap-2"
                animate={{
                  y: hoveredIndex === i ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
                <FaGithub size={20} className="inline-block" />
              </motion.h3>
              
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4 min-h-[56px]">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-3">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              initial={false}
              animate={{
                opacity: hoveredIndex === i ? 1 : 0,
              }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
