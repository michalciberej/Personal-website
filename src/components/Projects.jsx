import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiArrowRightThin, mdiChevronRight } from '@mdi/js';
import Animation from './Animation';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const data = [
    {
      name: 'name',
      thumbnail:
        'https://monday.com/blog/wp-content/uploads/2022/02/Weekly-Schedule-thumbnail.jpg',
      description: 'Messages, posting images, liking',
      techs: [
        './src/assets/react.svg',
        './src/assets/nodejs.svg',
        './src/assets/express.svg',
        './src/assets/tailwind.svg',
        './src/assets/mongodb.svg',
        './src/assets/vite.svg',
      ],
      link: 'google.com',
    },
    {
      name: 'name',
      thumbnail:
        'https://cdn.dribbble.com/users/4465419/screenshots/17231558/36_4x.jpg',
      description: 'Messages, posting images, liking',
      techs: [
        './src/assets/react.svg',
        './src/assets/nodejs.svg',
        './src/assets/express.svg',
        './src/assets/tailwind.svg',
        './src/assets/mongodb.svg',
        './src/assets/vite.svg',
      ],
      link: 'google.com',
    },

    {
      name: 'name',
      thumbnail:
        'https://static.vecteezy.com/system/resources/previews/012/022/489/original/attractive-product-review-video-thumbnail-design-template-clickable-premium-vector.jpg',
      description: 'Messages, posting images, liking',
      techs: [
        './src/assets/react.svg',
        './src/assets/nodejs.svg',
        './src/assets/express.svg',
        './src/assets/tailwind.svg',
        './src/assets/mongodb.svg',
        './src/assets/vite.svg',
      ],
      link: 'google.com',
    },
  ];

  return (
    <div
      id='projects'
      className='mx-auto container min-h-screen flex flex-col'>
      <SectionHeading text='Here are some of my most recent projects'>
        RECENT WORK
      </SectionHeading>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative px-10 lg:px-0'>
        {data.map((obj, index) => (
          <Animation
            key={index}
            duration={1}>
            <Project
              thumbnail={obj.thumbnail}
              description={obj.description}
              link={obj.link}>
              {obj.name}
            </Project>
          </Animation>
        ))}
      </div>
      <div className='flex justify-end mr-10 md:mr-0'>
        <Link
          to='/archive'
          className='inline-flex group text-xl items-center mt-4 font-semibold leading-tight'>
          All projects
          <Icon
            path={mdiArrowRightThin}
            size={1}
            className='group-hover:translate-x-1 transition-transform text-primary'
          />
        </Link>
      </div>
    </div>
  );
};

const Project = ({ thumbnail, description, children, link }) => {
  return (
    <>
      <figure className='group relative rounded-xl bg-secondary overflow-hidden'>
        <img
          src={thumbnail}
          alt=''
          className='rounded-xl group-hover:scale-110 group-hover:opacity-0 overlay transform-gpu'
        />
        <figcaption className='absolute flex flex-col justify-around items-center font-semibold tracking-tight  top-0 left-0 right-0 bottom-0'>
          <h1 className='text-2xl opacity-0 group-hover:opacity-100 overlay'>
            {children}
          </h1>
          <p className='text-lg font-semibold tracking-tight opacity-0 group-hover:opacity-100 overlay'>
            {description}
          </p>
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='opacity-0 group-hover:opacity-100 hover:bg-primary  overlay text-xl px-4 py-1 rounded-full border-2 border-primary transform-gpu flex items-center group/link gap-1'>
            Live Demo
            <Icon
              path={mdiChevronRight}
              size={0.8}
              className='group-hover/link:translate-x-1 transition-transform shadow-lg'
            />
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default Projects;
