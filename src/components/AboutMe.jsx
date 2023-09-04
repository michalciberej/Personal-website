import SectionHeading from './SectionHeading';
import Skills from './Skills';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';

const AboutMe = () => {
  return (
    <div
      id='aboutme'
      className='container mx-auto min-h-screen'>
      <SectionHeading text='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'>
        ABOUT ME
      </SectionHeading>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 justify-center px-10 md:px-0'>
        <div className='group max-w-prose flex flex-col items-center'>
          <h2 className="text-3xl text-center tracking-wider font-extrabold mb-12 before:block before:w-[calc(100%_+_1rem)] before:opacity-50 group-hover:before:opacity-100 before:h-1 before:content-[''] before:bg-accent before:absolute relative z-20 before:translate-y-8 before:-z-10 group-hover:before:h-4 group-hover:before:translate-y-6 before:-translate-x-[0.5rem] before:transition-all before:rounded-sm">
            Get to know me!
          </h2>
          <p className='text-xl leading-2 font-normal mb-4 text-textD/90 '>
            My journey to becoming self-thought frontend developer started in
            2021 when I wanted to create myself an ecommerce website. After a
            year of creating websites with WordPress and Prestashop.
          </p>
          <p className='text-xl leading-2 font-normal mb-12 '>
            I decided to start learning how to code websites from scratch. Since
            then I coded numerous sites.
          </p>
          <div className='flex justify-center gap-8'>
            <Link
              to='/contactme'
              className='button inline-flex items-center gap-2 text-lg shadow-lg border-2 border-black dark:border-white hover:bg-black hover:dark:bg-white hover:text-white dark:hover:text-text focus:bg-black focus:focus:text-textD dark:focus:bg-white dark:focus:text-text'>
              Contact me
            </Link>
            <Link
              to='/resume'
              className='button inline-flex items-center gap-2 text-lg shadow-lg border-2 border-black dark:border-white hover:bg-black hover:dark:bg-white hover:text-white dark:hover:text-text focus:bg-black focus:focus:text-textD dark:focus:bg-white dark:focus:text-text'>
              View & Download CV
              <Icon
                path={mdiDownload}
                size={0.8}
              />
            </Link>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
