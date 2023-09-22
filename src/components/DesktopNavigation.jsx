import StyledLink from './StyledLink';

const DesktopNavigation = ({ currentSection }) => {
  const handleHomeScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#home');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className='navbar-element opacity-0 fixed top-0 right-0 mr-[7vw] flex items-start text-3xl z-50 mix-blend-difference pt-8 ml-auto brightness-110'>
      <li onClick={handleHomeScroll}>
        <StyledLink
          element={'a'}
          link='#home'
          currentSection={currentSection}
          id='home'
          icon={false}>
          Home
        </StyledLink>
      </li>
      <li onClick={handleAboutScroll}>
        <StyledLink
          element={'a'}
          link='#about'
          currentSection={currentSection}
          id='about'
          icon={false}>
          About
        </StyledLink>
      </li>
      <li onClick={handleProjectsScroll}>
        <StyledLink
          element={'a'}
          link='#projects'
          currentSection={currentSection}
          id='projects'
          icon={false}>
          Projects
        </StyledLink>
      </li>
      <li onClick={handleContactScroll}>
        <StyledLink
          element={'a'}
          link='#contact'
          currentSection={currentSection}
          id='contact'
          icon={false}>
          Contact
        </StyledLink>
      </li>
    </ul>
  );
};

export default DesktopNavigation;
