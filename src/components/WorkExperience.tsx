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

const isMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

interface WorkItem {
  id: string;
  name: string;
  logo?: string;
  summary: string;
  details: string[];
  tags: string[];
}

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    if (isMobile()) {
      setExpanded(expanded === id ? null : id);
    }
  };

  return (
    <section id="work" className="px-6 py-12 max-w-5xl mx-auto bg-white dark:bg-black">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-left">
        Work Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {workData.map((item: WorkItem) => (
          <div
            key={item.id}
            className="group relative rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col gap-4 overflow-hidden cursor-pointer"
            onClick={() => handleExpand(item.id)}
            onMouseEnter={() => {
              if (!isMobile()) setExpanded(item.id);
            }}
            onMouseLeave={() => {
              if (!isMobile()) setExpanded(null);
            }}
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <div className="flex items-center gap-4 mb-2 relative z-10">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={40}
                  height={40}
                  className="rounded"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-1 text-left">
                  {item.name}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-0 text-left">
                  {item.summary}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-2 relative z-10">
              {item.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className={`relative z-10 transition-all duration-500 overflow-hidden ${expanded === item.id ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
            >
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {item.details.map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            {/* Show More/Less only on mobile */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleExpand(item.id);
              }}
              className="text-blue-600 dark:text-blue-400 text-sm mt-2 self-start hover:underline focus:outline-none md:hidden"
            >
              {expanded === item.id ? 'Show Less' : 'Show More'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
