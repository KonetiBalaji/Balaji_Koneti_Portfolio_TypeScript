"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const fullText = "Hi, I'm Balaji 👋";
  const [subtitle, setSubtitle] = useState("");
  const [showCursor2, setShowCursor2] = useState(true);
  const fullSubtitle = "Data Scientist · AI/ML Engineer · Future AGI Architect";
  const [description, setDescription] = useState("");
  const [showCursor3, setShowCursor3] = useState(true);
  const fullDescription = "Building intelligent systems that make life easier.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowCursor1(false);
        // Start subtitle typing after main text
        let subtitleIndex = 0;
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex <= fullSubtitle.length) {
            setSubtitle(fullSubtitle.slice(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
            setShowCursor2(false);
            // Start description typing after subtitle
            let descIndex = 0;
            const descInterval = setInterval(() => {
              if (descIndex <= fullDescription.length) {
                setDescription(fullDescription.slice(0, descIndex));
                descIndex++;
              } else {
                clearInterval(descInterval);
                setShowCursor3(false);
              }
            }, 30);
          }
        }, 30);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen px-6 bg-white dark:bg-black flex flex-col-reverse md:flex-row items-center justify-center gap-12 relative overflow-hidden font-sans"
    >
      {/* Background Gradient Removed for pure white/black */}

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl relative z-10"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight min-h-[3rem]"
        >
          {text}
          {showCursor1 && <span className="animate-blink">|</span>}
        </motion.h1>
        <motion.h2 
          className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4 min-h-[2rem]"
        >
          {subtitle}
          {showCursor2 && <span className="animate-blink">|</span>}
        </motion.h2>
        <motion.p 
          className="text-gray-700 dark:text-gray-300 mb-6 text-lg min-h-[1.5rem]"
        >
          {description}
          {showCursor3 && <span className="animate-blink">|</span>}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-x-4"
        >
          <a
            href="/Balaji_Resume.pdf"
            download
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform active:scale-95 hover:scale-105 inline-block"
          >
            Download Resume
          </a>
          <a
            href="/Balaji_CV.pdf"
            download
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform active:scale-95 hover:scale-105 inline-block"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-43 h-43 md:w-55 md:h-55 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center shadow-xl relative z-10"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          src="/profile.jpg"
          alt="Balaji Koneti"
          className="w-37 h-37 md:w-49 md:h-49 rounded-full object-cover border-4 border-white dark:border-gray-800"
        />
      </motion.div>
    </section>
  );
}
