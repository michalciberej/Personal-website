import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mdiMenu } from '@mdi/js';
import DesktopNavigation from './DesktopNavigation';
import PhoneNavigation from './PhoneNavigation';
import { motion } from 'framer-motion';

const Navbar = ({ home, currentSection, isDesktop }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleHomeScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuOpen = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };

  return (
    <>
      <motion.nav className='bg-backgroundD flex'>
        {home ? (
          <Link
            to={'/'}
            className='navbar-element fixed top-0 left-0 pt-6 ml-[7vw] opacity-0 mix-blend-difference z-50 text-3xl outline-none focus:scale-125 hover:scale-125 transition-transform logo text-textD brightness-125'>
            M
          </Link>
        ) : (
          <a
            href='#home'
            className='navbar-element fixed top-0 left-0 pt-6 ml-[7vw] opacity-0 mix-blend-difference z-50 text-3xl outline-none focus:scale-125 hover:scale-125 transition-transform logo text-textD brightness-125'
            onClick={handleHomeScroll}>
            M
          </a>
        )}
        {isDesktop ? (
          <DesktopNavigation currentSection={currentSection} />
        ) : (
          <button
            type='button'
            onClick={handleMenuOpen}
            className='navbar-element fixed top-0 right-0 pt-6 mr-[7vw] mix-blend-difference z-50 text-textD'>
            <Icon
              path={mdiMenu}
              size={1.6}
            />
          </button>
        )}
        {!isDesktop && (
          <PhoneNavigation
            isOpened={isOpened}
            setIsOpened={setIsOpened}
            home={home}
            isDesktop={isDesktop}
            handleMenuOpen={handleMenuOpen}
          />
        )}
      </motion.nav>
    </>
  );
};
export default Navbar;
