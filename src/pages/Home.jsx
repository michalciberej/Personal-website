import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
      <div className=''>
        <div className='min-h-screen py-48'>
          <div className='container flex flex-col mx-auto text-center justify-center'>
            <h1 className='text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white mb-8'>
              Hello, I am Michal Ciberej and I am <Header />
            </h1>
            <p className='text-2xl text-slate-300/70 font-normal leading-2 mb-32'>
              My journey to becoming a self-thought frontend developer started
              in 2021 when I decided to build me a ecommerce website. After a
              year of making websites with Word Press and PrestaShop. I decided
              that I want to be able to create fully customized websites.
            </p>
            <div className='flex justify-center gap-8'>
              <Link
                to='/resume'
                className='button inline-flex items-center gap-2 font-semibold text-lg'>
                Contact me
                <Icon
                  path={mdiDownload}
                  size={0.8}
                />
              </Link>
              <Link
                to='/resume'
                className='button inline-flex items-center gap-2 font-semibold text-lg'>
                View & Download CV
                <Icon
                  path={mdiDownload}
                  size={0.8}
                />
              </Link>
            </div>
          </div>
        </div>
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default Home;
