'use client';

import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import BackToTop from '@/components/BackToTop';

function SectionDivider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Preloader />
      <NavBar />
      <main className="relative">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <WorkExperience />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
