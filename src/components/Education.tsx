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

const Education = () => {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

  return (
    <section
      id="education"
      className="px-6 py-20 max-w-5xl mx-auto"
      onMouseEnter={() => setHoveredItemId("education-section")}
      onMouseLeave={() => setHoveredItemId(null)}
    >
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-left text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="relative">
          <button
            className={`text-gray-500 text-sm bg-transparent px-2 py-1 rounded-full transition-opacity duration-200 border border-gray-300 dark:border-gray-700 ${
              hoveredItemId === "education-section"
                ? "opacity-100"
                : "opacity-0"
            }`}
            onMouseEnter={() => setHoveredItemId("expand-all-icon")}
            onMouseLeave={() => setHoveredItemId("education-section")}
            onClick={() =>
              setExpandedItems((prev) =>
                prev.length === educationData.length
                  ? []
                  : educationData.map((item) => item.id)
              )
            }
          >
            +
          </button>
          {hoveredItemId === "expand-all-icon" && (
            <div className="absolute right-0 top-full mt-1 bg-transparent text-gray-500 text-xs px-2 py-1 rounded-md transition-opacity duration-200">
              Expand All
            </div>
          )}
        </div>
      </div>

      <div className="space-y-10">
        {educationData.map((item) => (
          <div key={item.id} className="group transition-all">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                {item.logo && (
                  <div className="mr-3 w-6 h-6 relative">
                    <Image
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-left">
                  {item.name}
                </h3>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleToggle(item.id)}
                  className={`text-gray-500 text-sm bg-transparent px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700 transition-opacity duration-200 ${
                    hoveredItemId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                  onMouseEnter={() =>
                    setHoveredItemId(`${item.id}-expand-icon`)
                  }
                  onMouseLeave={() => setHoveredItemId(item.id)}
                >
                  {isExpanded(item.id) ? "-" : "+"}
                </button>
                {hoveredItemId === `${item.id}-expand-icon` && (
                  <div className="absolute right-0 top-full mt-1 bg-transparent text-gray-500 text-xs px-2 py-1 rounded-md transition-opacity duration-200">
                    Expand
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 ml-9">
              {item.institution}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 ml-9">
              {item.year}
            </p>

            <div className="flex flex-wrap gap-2 mt-2 ml-9">
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
              <div className="mt-3 pl-13">
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

export default Education;
