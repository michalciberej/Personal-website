import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <section id='aboutme'>
          <AboutMe />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='testimonials'>
          <Testimonials />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default Home;
