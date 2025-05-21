"use client";

import React, { useState } from "react";

import Image from "next/image"; // Import the Image component for optimized image rendering
import jntuLogo from "../../public/icons/jntu.png"; // Same relative path
import nauLogo from "../../public/icons/nau.png"; // Go up from 'components' to 'src', then to 'public'

export const educationData = [
  {
    id: "nau-ms",
    name: "Master's in Computer Science",
    institution: "Northern Arizona University, AZ",
    year: "2024 – 2025",
    tags: ["AI Focused", "Teaching Assistant", "LLMs"],
    details: [
      "AI Focused Curriculum",
      "Worked as a Teaching Assistant",
      "Focused on Large Language Models",
    ],
    logo: nauLogo,
  },
  {
    id: "jntu-btech",
    name: "Bachelor of Technology – Computer Science",
    institution: "JNTU Anantapur, India",
    year: "2016 – 2020",
    tags: ["Foundation", "Project Management", "Hackathons"],
    details: [
      "Built a strong foundation in Computer Science",
      "Participated in Project Management activities",
      "Involved in Hackathons",
    ],
    logo: jntuLogo,
  },
];

const isMobile = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches;

const Education = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    if (isMobile()) {
      setExpanded(expanded === id ? null : id);
    }
  };

  return (
    <section
      id="education"
      className="px-6 py-12 max-w-5xl mx-auto bg-white dark:bg-black"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-left">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {educationData.map((item) => (
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
                <div className="w-10 h-10 relative flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={`${item.name} Logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-1 text-left">
                  {item.name}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-0 text-left">
                  {item.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-0 text-left">
                  {item.year}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-2 relative z-10">
              {item.tags.map((tag, i) => (
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
                {item.details.map((detail, idx) => (
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

export default Education;
