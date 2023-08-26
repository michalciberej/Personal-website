import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

const Project = ({ thumbnail, description, techs, children, link }) => {
  return (
    <>
      <figure className='group rounded-xl bg-primary/30 overflow-hidden relative'>
        <img
          src='./src/assets/placeholder.png'
          alt=''
          className='rounded-xl group-hover:scale-150 group-hover:opacity-0 overlay transform-gpu'
        />
        <figcaption className='flex flex-col justify-around items-center font-semibold tracking-tight absolute top-0 left-0 right-0 bottom-0'>
          <h1 className='text-2xl opacity-0 group-hover:opacity-100 overlay'>
            {children}
          </h1>
          <p className='text-lg font-semibold tracking-tight   opacity-0 group-hover:opacity-100 overlay'>
            {description}
          </p>
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='opacity-0 group-hover:opacity-100 hover:bg-primary  overlay text-xl px-4 py-1 rounded-full border-x-4 border-y-2 border-primary transform-gpu flex items-center group/link gap-1'>
            Live Demo
            <Icon
              path={mdiChevronRight}
              size={0.8}
              className='group-hover/link:translate-x-1 transition-transform'
            />
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default Project;
