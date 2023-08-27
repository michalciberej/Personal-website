import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';
import Header from '../components/Header';

const Landing = () => {
  return (
    <div className='container flex flex-col mx-auto text-center justify-center'>
      <h1 className='text-3xl font-extrabold leading-tight tracking-tight text-text md:text-4xl lg:text-6xl dark:text-white mb-8'>
        Hello, I am Michal Ciberej and I am <Header />
      </h1>
      <p className='text-2xl text-text/70 dark:text-textD/70 font-normal leading-2 mb-32'>
        My journey to becoming a self-thought frontend developer started in 2021
        when I decided to build me a ecommerce website. After a year of making
        websites with Word Press and PrestaShop. I decided that I want to be
        able to create fully customized websites.
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
  );
};

export default Landing;
