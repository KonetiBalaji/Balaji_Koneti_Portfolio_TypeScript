'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const workData = [
  {
    id: 'nau-ta',
    name: 'NAU - Teaching Assistant',
    logo: '/icons/nau.png',
    summary:
      'Assisted in teaching and mentoring students on LLM concepts and real-world applications. Developed and evaluated assignments related to fine-tuning LLMs and transformer architectures.',
    details: [
      'Assisted in teaching and mentoring students on LLM concepts and real-world applications.',
      'Developed and evaluated assignments related to fine-tuning LLMs and transformer architectures.',
      'Provided technical guidance on Python-based LLM frameworks and Hugging Face.',
      'Conducted office hours and troubleshooting sessions.',
    ],
    tags: ['LLMs', 'Python', 'Mentoring'],
  },
  {
    id: 'nau-isa',
    name: 'NAU - International Student Ambassador',
    logo: '/icons/nau.png',
    summary:
      'Supported new international students at NAU, ensuring a smooth transition. Assisted in orientation activities for Fall 2024.',
    details: [
      'Supported new international students at NAU, ensuring a smooth transition.',
      'Assisted in orientation activities for Fall 2024.',
      'Recognized by leadership for exceptional support.',
    ],
    tags: ['Leadership', 'Mentoring'],
  },
  {
    id: 'infosys',
    name: 'Infosys - Senior Software Engineer',
    logo: '/icons/infosys.png',
    summary:
      'Worked on Apple Inc. projects with Java, Python, Git, Oracle SQL, Spring Microservices. Integrated AWS services and implemented automation strategies.',
    details: [
      'Worked on Apple Inc. projects with Java, Python, Git, Oracle SQL, Spring Microservices.',
      'Integrated AWS services and implemented automation strategies.',
      'Received "Rise Award" and "Insta Award" for contributions.',
    ],
    tags: ['Java', 'Python', 'Microservices', 'Automation'],
  },
  {
    id: 'nerdsgeeks',
    name: 'Nerds and Geeks Pvt Ltd - Full Stack Developer',
    logo: '/icons/nerd.png',
    summary:
      'Built and maintained websites with full stack capabilities. Collaborated with frontend/backend teams to ship features.',
    details: [
      'Built and maintained websites with full stack capabilities.',
      'Collaborated with frontend/backend teams to ship features.',
    ],
    tags: ['Full Stack', 'JavaScript', 'Python'],
  },
  {
    id: 'csi-ebm',
    name: 'Computer Society of India - Executive Body Member',
    logo: '/icons/csi.png',
    summary:
      'Promoted IT innovation through technical events and workshops. Boosted participation and engagement through leadership roles.',
    details: [
      'Promoted IT innovation through technical events and workshops.',
      'Boosted participation and engagement through leadership roles.',
    ],
    tags: ['Leadership', 'Project Management', 'Events'],
  },
  {
    id: 'csi-sc',
    name: 'Computer Society of India - Student Coordinator',
    logo: '/icons/csi.png',
    summary:
      'Organized hackathons, webinars, and technical fests. Led initiatives that developed leadership and organizational skills.',
    details: [
      'Organized hackathons, webinars, and technical fests.',
      'Led initiatives that developed leadership and organizational skills.',
    ],
    tags: ['Leadership', 'Networking'],
  },
];

const WorkExperience = () => {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

  return (
    <section id="work" className="px-6 py-20 max-w-5xl mx-auto">
      <div
        className="flex items-center justify-between mb-12"
        onMouseEnter={() => setHoveredItemId('section')}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        <h2 className="text-3xl font-bold text-left text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <button
          onClick={() =>
            setExpandedItems((prev) =>
              prev.length === workData.length ? [] : workData.map((item) => item.id)
            )
          }
          className={`text-gray-500 text-sm bg-transparent px-3 py-1 rounded-full transition-opacity duration-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 ${
            hoveredItemId === 'section' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          + Expand All
        </button>
      </div>

      <div className="space-y-10">
        {workData.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className="group transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={32}
                    height={32}
                  />
                )}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.summary}</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle(item.id)}
                className={`text-gray-500 text-sm bg-transparent px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700 transition-opacity duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  hoveredItemId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {isExpanded(item.id) ? '-' : '+'}
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {isExpanded(item.id) && (
              <div className="mt-3 pl-4">
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
