/*'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const primaryBlue = 'sky-500'; // Define a consistent blue color

const educationData = [
  {
    id: 'nau-ms',
    type: 'education',
    name: "Master's in Computer Science",
    institution: 'Northern Arizona University, AZ',
    year: '2024 – 2025',
    tags: ['AI Focused', 'Teaching Assistant', 'LLMs'],
    details: ['AI Focused Curriculum', 'Worked as a Teaching Assistant', 'Focused on Large Language Models'],
  },
  {
    id: 'jntu-btech',
    type: 'education',
    name: 'Bachelor of Technology – Computer Science',
    institution: 'JNTU Anantapur, India',
    year: '2016 – 2020',
    tags: ['Foundation', 'Project Management', 'Hackathons'],
    details: ['Built a strong foundation in Computer Science', 'Participated in Project Management activities', 'Involved in Hackathons'],
  },
];

const workData = [
  {
    id: 'nau-ta',
    type: 'work',
    name: 'NAU - Teaching Assistant',
    logo: '/icons/nau.png',
    summary: 'Assisted in teaching and mentoring students on LLM concepts and real-world applications. Developed and evaluated assignments related to fine-tuning LLMs and transformer architectures.',
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
    type: 'work',
    name: 'NAU - International Student Ambassador',
    logo: '/icons/nau.png', // You might want a different logo
    summary: 'Supported new international students at NAU, ensuring a smooth transition. Assisted in orientation activities for Fall 2024.',
    details: [
      'Supported new international students at NAU, ensuring a smooth transition.',
      'Assisted in orientation activities for Fall 2024.',
      'Recognized by leadership for exceptional support.',
    ],
    tags: ['Leadership', 'Mentoring'],
  },
  {
    id: 'infosys',
    type: 'work',
    name: 'Infosys - Senior Software Engineer',
    logo: '/icons/infosys.png',
    summary: 'Worked on Apple Inc. projects with Java, Python, Git, Oracle SQL, Spring Microservices. Integrated AWS services and implemented automation strategies.',
    details: [
      'Worked on Apple Inc. projects with Java, Python, Git, Oracle SQL, Spring Microservices.',
      'Integrated AWS services and implemented automation strategies.',
      'Received "Rise Award" and "Insta Award" for contributions.',
    ],
    tags: ['Java', 'Python', 'Microservices', 'Automation'],
  },
  {
    id: 'nerdsgeeks',
    type: 'work',
    name: 'Nerds and Geeks Pvt Ltd - Full Stack Developer',
    logo: '/icons/default.png', // Placeholder for a logo
    summary: 'Built and maintained websites with full stack capabilities. Collaborated with frontend/backend teams to ship features.',
    details: [
      'Built and maintained websites with full stack capabilities.',
      'Collaborated with frontend/backend teams to ship features.',
    ],
    tags: ['Full Stack', 'JavaScript', 'Python'],
  },
  {
    id: 'csi-ebm',
    type: 'work',
    name: 'Computer Society of India - Executive Body Member',
    logo: '/icons/csi.png', // Placeholder for a logo
    summary: 'Promoted IT innovation through technical events and workshops. Boosted participation and engagement through leadership roles.',
    details: [
      'Promoted IT innovation through technical events and workshops.',
      'Boosted participation and engagement through leadership roles.',
    ],
    tags: ['Leadership', 'Project Management', 'Events'],
  },
  {
    id: 'csi-sc',
    type: 'work',
    name: 'Computer Society of India - Student Coordinator',
    logo: '/icons/csi.png', // Placeholder for a logo
    summary: 'Organized hackathons, webinars, and technical fests. Led initiatives that developed leadership and organizational skills.',
    details: [
      'Organized hackathons, webinars, and technical fests.',
      'Led initiatives that developed leadership and organizational skills.',
    ],
    tags: ['Leadership', 'Networking'],
  },
];

const Timeline: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<'education' | 'work' | null>(null);
  const [expandedEducationAll, setExpandedEducationAll] = useState(false);
  const [expandedWorkAll, setExpandedWorkAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const handleExpandToggle = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((itemId) => itemId !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const toggleExpandAll = (type: 'education' | 'work') => {
    if (type === 'education') {
      setExpandedEducationAll(!expandedEducationAll);
      if (!expandedEducationAll) {
        setExpandedItems((prev) => [...prev, ...educationData.map(item => item.id)]);
      } else {
        setExpandedItems((prev) => prev.filter(id => !educationData.some(item => item.id === id)));
      }
    } else if (type === 'work') {
      setExpandedWorkAll(!expandedWorkAll);
      if (!expandedWorkAll) {
        setExpandedItems((prev) => [...prev, ...workData.map(item => item.id)]);
      } else {
        setExpandedItems((prev) => prev.filter(id => !workData.some(item => item.id === id)));
      }
    }
  };

  const isItemExpanded = (id: string, type: 'education' | 'work') => {
    if (type === 'education' && expandedEducationAll) return true;
    if (type === 'work' && expandedWorkAll) return true;
    return expandedItems.includes(id);
  };

  const getExpandAllButtonText = (type: 'education' | 'work') => {
    if (type === 'education') {
      return expandedEducationAll ? '-' : '+';
    } else if (type === 'work') {
      return expandedWorkAll ? '-' : '+';
    }
    return '+';
  };

  return (
    <section id="timeline" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Timeline
      </h2>

      <div
        className="relative flex items-center mb-8"
        onMouseEnter={() => setHoveredSection('education')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mr-4">
          <Image src="/icons/education.png" alt="Education Logo" width={32} height={32} className="inline-block mr-2" />
          Education
        </h3>
        <button
          onClick={() => toggleExpandAll('education')}
          className={`ml-auto text-lg font-semibold text-${primaryBlue}-500 dark:text-${primaryBlue}-400 rounded-full focus:outline-none ${
            hoveredSection === 'education' ? 'block' : 'hidden'
          }`}
        >
          {getExpandAllButtonText('education')} Expand All
        </button>
      </div>
      <div className="space-y-8">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="pl-6 relative"
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                  {item.name}
                  <button
                    onClick={() => handleExpandToggle(item.id)}
                    className={`ml-2 text-lg font-semibold text-${primaryBlue}-500 dark:text-${primaryBlue}-400 rounded-full focus:outline-none ${
                      hoveredItemId === item.id ? 'inline-block' : 'hidden'
                    }`}
                  >
                    {isItemExpanded(item.id, 'education') ? '-' : '+'}
                  </button>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.year}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            {isItemExpanded(item.id, 'education') && (
              <div className="mt-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-md">
                <ul className="list-disc pl-5 space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="relative flex items-center mt-12 mb-8"
        onMouseEnter={() => setHoveredSection('work')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mr-4">
          <Image src="/icons/work.png" alt="Work Experience Logo" width={32} height={32} className="inline-block mr-2" />
          Work Experience
        </h3>
        <button
          onClick={() => toggleExpandAll('work')}
          className={`ml-auto text-lg font-semibold text-${primaryBlue}-500 dark:text-${primaryBlue}-400 rounded-full focus:outline-none ${
            hoveredSection === 'work' ? 'block' : 'hidden'
          }`}
        >
          {getExpandAllButtonText('work')} Expand All
        </button>
      </div>
      <div className="space-y-8">
        {workData.map((item) => (
          <div
            key={item.id}
            className="pl-6 relative"
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <div className="flex items-center gap-4">
              {item.logo && <Image src={item.logo} alt={`${item.name} logo`} width={32} height={32} />}
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center justify-between w-full">
                <span>{item.name}</span>
                <button
                  onClick={() => handleExpandToggle(item.id)}
                  className={`ml-2 text-lg font-semibold text-${primaryBlue}-500 dark:text-${primaryBlue}-400 rounded-full focus:outline-none ${
                    hoveredItemId === item.id ? 'inline-block' : 'hidden'
                  }`}
                >
                  {isItemExpanded(item.id, 'work') ? '-' : '+'}
                </button>
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.name.split('-').slice(1).join('-').trim()}</p>
            {item.year && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.year}</p>}
            {item.duration && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.duration}</p>}

            {hoveredItemId === item.id && !isItemExpanded(item.id, 'work') && item.summary && (
              <div className={`mt-2 bg-neutral-100 dark:bg-neutral-800 border-l-4 border-${primaryBlue}-400 p-3 rounded-md text-gray-700 dark:text-gray-300`}>
                {item.summary}
              </div>
            )}

            {isItemExpanded(item.id, 'work') && item.details && (
              <div className="mt-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-4 rounded-md text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-5 space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`bg-${primaryBlue}-100 dark:bg-${primaryBlue}-700 text-${primaryBlue}-700 dark:text-${primaryBlue}-100 text-sm px-3 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline; */
