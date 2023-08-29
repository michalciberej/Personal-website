import Project from './Project';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiArrowRightThin } from '@mdi/js';
import Animation from './Animation';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const data = [
    {
      name: 'name',
      thumbnail: './src/assets/placeholder.png',
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
      thumbnail: './src/assets/placeholder.png',
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
      thumbnail: './src/assets/placeholder.png',
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
        My Recent Work
      </SectionHeading>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 relative'>
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
      <div className='flex justify-end'>
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

export default Projects;
