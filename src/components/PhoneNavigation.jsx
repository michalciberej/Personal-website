import { AnimatePresence, motion } from 'framer-motion';
import Socials from './Socials';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { Link } from 'react-router-dom';

const PhoneNavigation = ({ isOpened, setIsOpened, handleMenuOpen }) => {
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

  const handleHomeScroll = (e) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#home');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  const handleAboutmeScroll = (e) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#aboutme');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  const handleProjectsScroll = (e) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#projects');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  const handleContactScroll = (e) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#contact');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className='origin-top fixed left-0 top-0 w-full h-[100dvh] bg-primary px-10 pt-6 z-50'
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'>
            <motion.div
              variants={otherVariants}
              initial={{ opacity: 0 }}
              animate='open'
              exit='exit'
              className='text-text'>
              <div className='flex justify-between'>
                <Link
                  to={'/'}
                  className='logo text-3xl'>
                  M
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
            <motion.ul
              variants={containerVariants}
              initial='initial'
              animate='open'
              exit='initial'
              className='flex flex-col h-full justify-center items-center gap-8 -mt-16 text-text '>
              <li className='overflow-hidden'>
                <motion.a
                  className='link text-4xl font-semibold'
                  variants={linkVariants}
                  onClick={handleHomeScroll}
                  href='#home'>
                  Home
                </motion.a>
              </li>
              <li className='overflow-hidden'>
                <motion.a
                  className='link text-4xl font-semibold'
                  variants={linkVariants}
                  onClick={handleAboutmeScroll}
                  href='#aboutme'>
                  About
                </motion.a>
              </li>
              <li className='overflow-hidden'>
                <motion.a
                  className='link text-4xl font-semibold'
                  variants={linkVariants}
                  onClick={handleProjectsScroll}
                  href='#projects'>
                  Projects
                </motion.a>
              </li>
              <li className='overflow-hidden'>
                <motion.a
                  className='link text-4xl font-semibold'
                  variants={linkVariants}
                  onClick={handleContactScroll}
                  href='#contact'>
                  Contact
                </motion.a>
              </li>
            </motion.ul>
            <motion.div
              variants={otherVariants}
              initial={{ opacity: 0 }}
              animate='open'
              exit='exit'
              className='-mt-10 flex justify-center'>
              <Socials
                column={false}
                black={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhoneNavigation;
