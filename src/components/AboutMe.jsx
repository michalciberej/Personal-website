import StyledLink from './StyledLink';
import StyledButton from './StyledButton';
import SectionHeading from './SectionHeading';
import Socials from './Socials';

const AboutMe = () => {
  const handleContactScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id='about'>
      <div className='flex flex-col items-start mx-[4vw] md:mx-[10vw] pb-0 md:pb-20 text-textD border-t-[2px] border-secondary'>
        <SectionHeading num='01'>About</SectionHeading>
        <div className='mb-20 md:pl-10 flex flex-col gap-8 w-full '>
          <h3 className='text-2xl text tracking-normal'>
            Hello there, I am Michal and I am a web dev.
          </h3>
          <span className='text-lg max-w-prose text-textD/80 tracking-wide'>
            Since very young age I was fascinated by technology.
          </span>
          <div className='flex gap-4 justify-between'>
            <StyledButton
              border={'textD'}
              func={handleContactScroll}>
              Contact
            </StyledButton>
            <Socials
              column={false}
              black={false}
            />
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-track track-two'>
        <div className='carousel-card'>
          <i className='devicon-react-original colored'></i>
          <p>React</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-nextjs-original colored'></i>
          <p>Next</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-tailwindcss-plain colored'></i>
          <p>Tailwindcss</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-sass-original colored'></i>
          <p>Sass</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-mongodb-plain colored'></i>
          <p>MongoDB</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-git-plain colored'></i>
          <p>Git</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-react-original colored'></i>
          <p>React</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-nextjs-original colored'></i>
          <p>Next</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-tailwindcss-plain colored'></i>
          <p>Tailwindcss</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-sass-original colored'></i>
          <p>Sass</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-mongodb-plain colored'></i>
          <p>MongoDB</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-git-plain colored'></i>
          <p>Git</p>
        </div>
      </div>
      <div className='carousel-track track-one'>
        <div className='carousel-card'>
          <i className='devicon-express-original'></i>
          <p>Express</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-jest-plain colored'></i>
          <p>Jest</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-javascript-plain colored'></i>
          <p>Javascript</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-typescript-plain colored'></i>
          <p>Typescript</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-nodejs-plain colored'></i>
          <p>NodeJS</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-webpack-plain colored'></i>
          <p>Webpack</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-express-original'></i>
          <p>Express</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-jest-plain colored'></i>
          <p>Jest</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-javascript-plain colored'></i>
          <p>Javascript</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-typescript-plain colored'></i>
          <p>Typescript</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-nodejs-plain colored'></i>
          <p>NodeJS</p>
        </div>
        <div className='carousel-card'>
          <i className='devicon-webpack-plain colored'></i>
          <p>Webpack</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
