import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
  mdiMenu,
  mdiClose,
} from '@mdi/js';

const Navbar = ({ home }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <>
      <nav
        className={
          home === true
            ? 'flex justify-between container mx-auto items-center pt-6 mb-64'
            : 'flex justify-between container mx-auto items-center pt-6 mb-12'
        }>
        <Link
          to={'/'}
          className=''>
          <span className='logo text-3xl'>Michal</span>
          <span className='logo text-accent text-4xl'>.</span>
        </Link>
        {isDesktop === true && <Temp />}
        {isDesktop != true && (
          <Icon
            path={mdiMenu}
            size={1.5}
          />
        )}
      </nav>
    </>
  );
};

const Temp = () => {
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

  const handleSkillsScroll = () => {
    const element = document.querySelector('#skills');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
    <div className='text-lg flex gap-8'>
      <button
        className='link text-xl font-semibold tracking-tight'
        onClick={handleAboutmeScroll}>
        About me
      </button>
      <button
        className='link text-xl font-semibold tracking-tight'
        onClick={handleProjectsScroll}>
        Projects
      </button>
      <button
        className='link text-xl font-semibold tracking-tight'
        onClick={handleSkillsScroll}>
        Skills
      </button>
      <button
        className='link text-xl font-semibold tracking-tight'
        onClick={handleTestimonialsScroll}>
        Testimonials
      </button>
      <Link
        className='link text-xl font-semibold tracking-tight'
        href='#projects'>
        Resume
      </Link>
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
    </div>
  );
};

export default Navbar;
