"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 pb-16 px-6 bg-white dark:bg-black min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12"
    >
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {"Hi, I'm Balaji 👋"}
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
          Data Scientist · AI/ML Engineer · Future AGI Architect
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Building intelligent systems that make life easier.
        </p>

        <div className="space-x-4">
          <a
            href="/Balaji_Resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="/Balaji_CV.pdf"
            download
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition-transform transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-43 h-43 md:w-55 md:h-55 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shadow-lg">
        <img
          src="/profile.jpg"
          alt="Balaji Koneti"
          className="w-37 h-37 md:w-49 md:h-49 rounded-full object-cover border-4 border-white dark:border-gray-800"
        />
      </div>
    </section>
  );
}
