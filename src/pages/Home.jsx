import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import AboutMe from '../components/AboutMe';

function Home() {
  return (
    <>
      <div>
        <AboutMe />
        <Projects />
        <Skills />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
