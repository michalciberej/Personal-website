import { Link } from 'react-router-dom';
import Project from './Project';

const Projects = () => {
  return (
    <div
      id='projects'
      className=' mx-auto container my-20'>
      <h3 className='text-3xl font-extrabold mb-8 text-center'>
        Recent projects
      </h3>
      <div className='grid lg:grid-cols-3 gap-8'>
        <Project
          thumbnail={'./src/assets/javascript.svg'}
          description={'lorem ipsum blablablablablabla'}
          techs={[
            './src/assets/react.svg',
            './src/assets/nodejs.svg',
            './src/assets/express.svg',
            './src/assets/tailwind.svg',
            './src/assets/mongodb.svg',
            './src/assets/vite.svg',
          ]}
          right={false}>
          Facebook clone
        </Project>
        <Project
          thumbnail={'./src/assets/typescript.svg'}
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
          thumbnail={'./src/assets/typescript.svg'}
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
      <div>
        <Link to='/archive'>All projects</Link>
      </div>
    </div>
  );
};

export default Projects;
