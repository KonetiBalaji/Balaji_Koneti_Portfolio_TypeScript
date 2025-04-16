import Hero from '@/components/Hero';
import About from '@/components/About'
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Education/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
      <NavBar />
    </main>
  );
}
