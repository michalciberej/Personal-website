import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  const updateMedia = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateMedia);
    return () => window.addEventListener('scroll', updateMedia);
  });

  return (
    <div className='py-40'>
      <div className='container flex flex-col mx-auto text-center justify-center items-center pt-12'>
        <h1 className='text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-text md:text-6xl lg:text-7xl dark:text-white mb-8'>
          Hey, I am Michal Ciberej
        </h1>
        <p className='text-xl lg:text-2xl text-text/70 dark:text-textD/70 font-normal leading-2 mb-48 max-w-prose'>
          Web developer focusing on frontends of websites or applications that
          make projects succesful.
        </p>
        <motion.div className={`mouse ${scrolled && 'opacity-0'}`} />
      </div>
    </div>
  );
};

export default Landing;
