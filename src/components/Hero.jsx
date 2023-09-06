import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  const containerVariants = {
    initial: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.11,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      className='container flex flex-col mx-auto text-center justify-center items-center pt-56 pb-40'
      variants={containerVariants}
      initial='initial'
      animate='animate'>
      <div className='overflow-hidden'>
        <motion.div
          variants={textVariants}
          className='font-light tracking-wide text-text dark:text-textD text-[8.5rem] leading-[7rem] mb-2 mr-80 pr-40'>
          MICHAL
        </motion.div>
      </div>
      <div className='overflow-hidden'>
        <motion.div
          variants={textVariants}
          className='font-light tracking-wide text-text dark:text-textD text-[8.5rem] leading-[7rem] mr-40 mb-4'>
          CIBEREJ
        </motion.div>
      </div>
      <div className='overflow-hidden'>
        <motion.div
          variants={textVariants}
          className='font-semibold tracking-wide text-text dark:text-primary text-[9rem] leading-[7rem] mb-2 '>
          WEB
        </motion.div>
      </div>
      <div className='overflow-hidden'>
        <motion.div
          variants={textVariants}
          className='font-semibold tracking-wide text-text dark:text-primary text-[9rem] leading-[7rem] mb-2s ml-60'>
          DEVELOPER
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
