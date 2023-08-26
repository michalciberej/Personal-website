import { Link } from 'react-router-dom';
import Project from './Project';
import Icon from '@mdi/react';
import { mdiArrowRightThin } from '@mdi/js';

const Projects = () => {
  return (
    <div className=' mx-auto container my-20'>
      <h3 className='text-3xl font-extrabold mb-8 text-center tracking-tight'>
        Recent projects
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <Project
          thumbnail={'./src/assets/placeholder.png'}
          description={'Messages, posting images, liking'}
          techs={[
            './src/assets/react.svg',
            './src/assets/nodejs.svg',
            './src/assets/express.svg',
            './src/assets/tailwind.svg',
            './src/assets/mongodb.svg',
            './src/assets/vite.svg',
          ]}
          right={false}
          link={'google.com'}>
          Facebook clone
        </Project>
        <Project
          thumbnail={'./src/assets/placeholder.png'}
          description={'lorem ipsum blablablablablabla'}
          techs={[
            './src/assets/react.svg',
            './src/assets/nodejs.svg',
            './src/assets/express.svg',
            './src/assets/sass.svg',
            './src/assets/mongodb.svg',
            './src/assets/vite.svg',
          ]}
          right={true}>
          Messaging app
        </Project>
        <Project
          thumbnail={'./src/assets/placeholder.png'}
          description={'lorem ipsum blablablablablabla'}
          techs={[
            './src/assets/react.svg',
            './src/assets/nodejs.svg',
            './src/assets/express.svg',
            './src/assets/sass.svg',
            './src/assets/mongodb.svg',
            './src/assets/vite.svg',
          ]}
          right={true}>
          Messaging app
        </Project>
        <Project
          thumbnail={'./src/assets/placeholder.png'}
          description={'lorem ipsum blablablablablabla'}
          techs={[
            './src/assets/react.svg',
            './src/assets/nodejs.svg',
            './src/assets/express.svg',
            './src/assets/sass.svg',
            './src/assets/mongodb.svg',
            './src/assets/vite.svg',
          ]}
          right={true}>
          Messaging app
        </Project>
        <Project
          thumbnail={'./src/assets/placeholder.png'}
          description={'lorem ipsum blablablablablabla'}
          techs={[
            './src/assets/react.svg',
            './src/assets/nodejs.svg',
            './src/assets/express.svg',
            './src/assets/sass.svg',
            './src/assets/mongodb.svg',
            './src/assets/vite.svg',
          ]}
          right={true}>
          Messaging app
        </Project>
        <Project
          thumbnail={'./src/assets/placeholder.png'}
          description={'lorem ipsum blablablablablabla'}
          techs={[
            './src/assets/react.svg',
            './src/assets/nodejs.svg',
            './src/assets/express.svg',
            './src/assets/sass.svg',
            './src/assets/mongodb.svg',
            './src/assets/vite.svg',
          ]}
          right={true}>
          Messaging app
        </Project>
      </div>
      <div className='flex justify-end'>
        <Link
          to='/archive'
          className='inline-flex group text-lg items-center text-primary  mt-4 font-semibold leading-tight'>
          All projects
          <Icon
            path={mdiArrowRightThin}
            size={1}
            className='group-hover:translate-x-1 transition-transform'
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
