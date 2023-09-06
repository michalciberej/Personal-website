import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

function Home() {
  const variants = {
    initial: {
      y: '4rem',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
      },
    },
  };

  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <motion.div
          variants={variants}
          initial='initial'
          animate='animate'>
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
        </motion.div>
      </main>
    </>
  );
}

export default Home;
