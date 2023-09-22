import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const sections = useRef([]);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    document.onreadystatechange = () => {
      setIsLoaded(document.readyState === 'complete');
    };
    return () =>
      (document.onreadystatechange = () => {
        setIsLoaded(document.readyState === 'complete');
      });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  useEffect(() => {
    const animations = gsap.context(() => {
      gsap.set('#contact', { opacity: 0 });
      gsap.to('#contact', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'center+=200 bottom',
          end: '+=200',
          scrub: true,
        },
        opacity: 1,
      });
      gsap.to('.home', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'center+=150 bottom',
          end: '+=300',
          scrub: true,
        },
        scaleX: window.innerWidth > 768 ? 0.9 : 0.95,
        scaleY: window.innerWidth > 768 ? 0.93 : 0.97,
        boxShadow: '1px 3px 15px #242424',
      });
      gsap.utils.toArray('.project-info').forEach((info) => {
        gsap.set(info, {
          y: isDesktop ? '30%' : '-30%',
        });

        gsap.to(info, {
          scrollTrigger: {
            trigger: info,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.2,
          },
          y: isDesktop ? '-15%' : '-10%',
        });
      });
      gsap.utils.toArray('.project-border').forEach((border) => {
        gsap.set(border, {
          y: isDesktop ? '-5%' : '-5%',
        });

        gsap.to(border, {
          scrollTrigger: {
            trigger: border,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.2,
          },
          y: isDesktop ? '5%' : '5%',
        });
      });
    });
    return () => animations.revert();
  }, []);

  useEffect(() => {
    const loadingAnimation = gsap.context(() => {
      if (isLoaded) {
        gsap.to('.loading-overlay', {
          opacity: '0',
          duration: '1',
          ease: 'power1.ease',
          onComplete: () => setIsOverlayVisible(false),
        });

        gsap.set('body', { backgroundColor: '#F6D15A' });

        gsap.to('.hero-title', {
          y: '0',
          opacity: '1',
          stagger: '0.25',
          ease: 'power3.ease',
          delay: '1.2',
        });

        gsap.to('.hero-image', {
          opacity: '1',
          ease: 'power1.ease',
          duration: '0.7',
          delay: '1.8',
        });

        gsap.set('.navbar-element', { opacity: 0 });
        gsap.to('.navbar-element', {
          opacity: '1',
          duration: '1',
          delay: '2.5',
        });
      }
    });

    return () => loadingAnimation.revert();
  }, [isLoaded, isDesktop]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
      if (
        window.scrollY ===
        Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) -
          window.innerHeight
      ) {
        newActiveSection = 'contact';
      }
    });
    setCurrentSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('section');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isOverlayVisible && (
        <div className='loading-overlay fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-backgroundD flex items-center justify-center text-8xl z-[100] text-textD'>
          <span className='transition-all logo'>M</span>
        </div>
      )}
      <header>
        <Navbar
          currentSection={currentSection}
          isDesktop={isDesktop}></Navbar>
      </header>
      <main>
        <div className='home bg-backgroundD'>
          <Hero />
          <AboutMe />
          <Projects />
        </div>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
