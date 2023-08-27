import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

import { motion } from 'framer-motion';

const Project = ({ thumbnail, description, children, link }) => {
  const variants = {
    visibleOne: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 1 },
    },
    visibleSec: { opacity: 1, translateY: 0, transition: { duration: 1.25 } },
    visibleThr: { opacity: 1, translateY: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, translateY: 50 },
  };
  return (
    <>
      <motion.figure
        variants={variants}
        initial='hidden'
        whileInView='visibleOne'
        // viewport={{ once: true }}
        className='group relative rounded-xl bg-secondary overflow-hidden'>
        <img
          src={thumbnail}
          alt=''
          className='rounded-xl group-hover:scale-150 group-hover:opacity-0 overlay transform-gpu'
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
      </motion.figure>
    </>
  );
};

export default Project;
