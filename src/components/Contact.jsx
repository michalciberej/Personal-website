import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

const Contact = () => {
  return (
    <>
      <div className='md:container md:mx-auto mx-12 bg-primary rounded-xl py-8 px-12  flex flex-col md:flex-row items-center justify-around shadow-[0px_5px_5px_1px_rgba(0,0,0,0.35)] md:-mb-16 -mb-44 z-10 gap-6 md:gap-0'>
        <h1 className='text-3xl font-semibold tracking-tight text-textD'>
          Want to create a project?
        </h1>
        <p className='max-w-sm tracking-tight leading-snug text-lg font-medium text-textD/90 text-center '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <Link
          to='/contactme'
          className='text-xl font-semibold tracking-tight border-2 border-textD py-2 px-4 rounded-full flex items-center group gap-1 text-textD shadow-lg'>
          Send a message
          <Icon
            path={mdiChevronRight}
            size={1}
            className='group-hover:translate-x-1 transition-transform'
          />
        </Link>
      </div>
    </>
  );
};

export default Contact;
