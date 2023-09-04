import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
  mdiMenu,
  mdiClose,
} from '@mdi/js';
import { AnimatePresence, motion } from 'framer-motion';
import Socials from './Socials';

const Navbar = ({ home }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
  const [isOpened, setIsOpened] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767);
  };

  const handleMenuOpen = () => {
    if (isOpened) {
      setIsOpened(false);
      document.body.style.overflow = 'scroll';
    } else {
      setIsOpened(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <>
      <header>
        <nav
          className={
            home
              ? 'flex justify-between md:container mx-auto items-center pt-6 mb-64 px-10 md:px-0'
              : 'flex justify-between container mx-auto items-center pt-6  mb-12'
          }>
          <Link
            to={'/'}
            className=''>
            <span className='logo text-3xl'>Michal</span>
            <span className='logo text-accent text-4xl'>.</span>
          </Link>
          {isDesktop ? (
            <DesktopMenu />
          ) : (
            <button
              type='button'
              onClick={handleMenuOpen}>
              <Icon
                path={mdiMenu}
                size={1.5}
              />
            </button>
          )}
          {!isDesktop && (
            <MobileMenu
              isOpened={isOpened}
              setIsOpened={setIsOpened}
              home={home}
              isDesktop={isDesktop}
              handleMenuOpen={handleMenuOpen}
            />
          )}
        </nav>
      </header>
    </>
  );
};

const DesktopMenu = () => {
  const [theme, setTheme] = useState(localStorage.theme);

  const handleAboutmeScroll = () => {
    const element = document.querySelector('#aboutme');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsScroll = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTestimonialsScroll = () => {
    const element = document.querySelector('#testimonials');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleThemeSwitch = () => {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      setTheme('dark');
      document.querySelector('html').classList.remove('light');
      document.querySelector('html').classList.add('dark');
    } else {
      localStorage.theme = 'light';
      setTheme('light');
      document.querySelector('html').classList.remove('dark');
      document.querySelector('html').classList.add('light');
    }
  };
  return (
    <ul className='text-lg flex gap-8'>
      <li>
        <button
          className='link text-xl font-semibold tracking-tight'
          onClick={handleAboutmeScroll}>
          About me
        </button>
      </li>
      <li>
        <button
          className='link text-xl font-semibold tracking-tight'
          onClick={handleProjectsScroll}>
          Projects
        </button>
      </li>
      <li>
        <button
          className='link text-xl font-semibold tracking-tight'
          onClick={handleTestimonialsScroll}>
          Testimonials
        </button>
      </li>
      <li>
        <Link
          className='link text-xl font-semibold tracking-tight'
          href='#projects'>
          Resume
        </Link>
      </li>
      <button
        onClick={handleThemeSwitch}
        type='button'
        className={
          theme === 'light'
            ? 'outline-none hover:text-yellow-400 focus:text-yellow-400'
            : 'outline-none hover:text-blue-400 focus:text-blue-400'
        }>
        {theme === 'dark' ? (
          <Icon
            path={mdiWeatherNight}
            size={1.1}
          />
        ) : (
          <Icon
            path={mdiWhiteBalanceSunny}
            size={1.1}
            className=''
          />
        )}
      </button>
    </ul>
  );
};

const MobileMenu = ({ isOpened, setIsOpened, handleMenuOpen }) => {
  const variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };
  const linkVariants = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.3,
        staggerDirection: -1,
      },
    },
  };
  const otherVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleAboutmeScroll = () => {
    setIsOpened(false);
    document.body.style.overflow = 'scroll';
    const element = document.querySelector('#aboutme');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  const handleProjectsScroll = () => {
    setIsOpened(false);
    document.body.style.overflow = 'scroll';
    const element = document.querySelector('#projects');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  const handleTestimonialsScroll = () => {
    setIsOpened(false);
    document.body.style.overflow = 'scroll';
    const element = document.querySelector('#testimonials');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className='origin-top absolute left-0 top-0 w-full h-screen bg-primary px-10 pt-6 z-50'
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'>
            <motion.div
              variants={otherVariants}
              initial={{ opacity: 0 }}
              animate='open'
              exit='exit'>
              <div className='flex justify-between mx-auto w-full'>
                <Link
                  to={'/'}
                  className=''>
                  <span className='logo text-3xl'>Michal</span>
                  <span className='logo text-accent text-4xl'>.</span>
                </Link>
                <button
                  type='button'
                  onClick={handleMenuOpen}>
                  <Icon
                    path={mdiClose}
                    size={1.5}
                  />
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial='initial'
              animate='open'
              exit='initial'
              className='flex flex-col h-full justify-center items-center gap-8 -mt-16 '>
              <div className='overflow-hidden'>
                <motion.button
                  className='link text-4xl font-semibold tracking-tight'
                  variants={linkVariants}
                  onClick={handleAboutmeScroll}>
                  About me
                </motion.button>
              </div>
              <div className='overflow-hidden'>
                <motion.button
                  className='link text-4xl font-semibold tracking-tight'
                  variants={linkVariants}
                  onClick={handleProjectsScroll}>
                  Projects
                </motion.button>
              </div>
              <div className='overflow-hidden'>
                <motion.button
                  className='link text-4xl font-semibold tracking-tight'
                  variants={linkVariants}
                  onClick={handleTestimonialsScroll}>
                  Testemonials
                </motion.button>
              </div>
              <div className='overflow-hidden'>
                <motion.button
                  className='link text-4xl font-semibold tracking-tight'
                  variants={linkVariants}>
                  Resume
                </motion.button>
              </div>
              <div className='overflow-hidden'>
                <motion.div
                  className='link text-4xl font-semibold tracking-tight hover:text-textD/40'
                  variants={linkVariants}>
                  <Link to='/contactme'>Contact me</Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={otherVariants}
              initial={{ opacity: 0 }}
              animate='open'
              exit='exit'
              className='-mt-10'>
              <Socials />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
