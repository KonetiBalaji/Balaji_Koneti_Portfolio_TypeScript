import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';
import NavBar from '@/components/NavBar';

const Skills = dynamic(() => import('@/components/Skills'));
const Projects = dynamic(() => import('@/components/Projects'));
const Education = dynamic(() => import('@/components/Education'));
const WorkExperience = dynamic(() => import('@/components/WorkExperience'));
const Certifications = dynamic(() => import('@/components/Certifications'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));
const BackToTop = dynamic(() => import('@/components/BackToTop'));
const Preloader = dynamic(() => import('@/components/Preloader'));
const SpotlightCursor = dynamic(() => import('@/components/SpotlightCursor'));

function SectionDivider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Preloader />
      <SpotlightCursor />
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
