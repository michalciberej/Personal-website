import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

const Contact = () => {
  return (
    <div className='container mx-auto bg-primary rounded-xl py-8 px-12 flex items-center justify-around shadow-[0px_5px_5px_1px_rgba(0,0,0,0.35)] translate-y-16 z-10'>
      <h1 className='text-3xl font-semibold tracking-tight text-textD'>
        Want to create a project?
      </h1>
      <p className='max-w-sm tracking-tight leading-snug text-lg font-medium text-textD/90 text-center '>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <Link
        to='/contactme'
        className='text-xl font-semibold tracking-tight border-2 border-white py-2 px-4 rounded-full flex items-center group gap-1 text-textD'>
        Send a message
        <Icon
          path={mdiChevronRight}
          size={1}
          className='group-hover:translate-x-1 transition-transform'
        />
      </Link>
    </div>
  );
};

export default Contact;
