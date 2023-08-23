import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='flex gap-4 justify-center flex-col pt-6'>
        <div className='flex gap-4 justify-center container m-auto'>
          <a
            className='socialsBtn border-2 border-black dark:border-white hover:dark:border-primary focus:dark:border-primary'
            href='https://github.com/michalciberej'
            target='_blank'
            rel='noreferrer'>
            <Icon
              path={mdiGithub}
              size={1}
            />
          </a>
          <a
            className='socialsBtn border-2 border-black dark:border-white hover:dark:border-primary focus:dark:border-primary'
            href='https://www.linkedin.com/in/michal-ciberej-a1b235247/'
            target='_blank'
            rel='noreferrer'>
            <Icon
              path={mdiLinkedin}
              size={1}
            />
          </a>

          <a
            className='socialsBtn border-2 border-black dark:border-white hover:dark:border-primary focus:dark:border-primary'
            href='https://twitter.com/michalciberej'
            target='_blank'
            rel='noreferrer'>
            <Icon
              path={mdiTwitter}
              size={1}
            />
          </a>
        </div>
        <div className='text-center'>
          <h6 className='text-neutral-400 text-md'>Created by me @2023</h6>
        </div>
        <Link
          to='/'
          className='h-12 w-12 self-center'>
          <img
            src='./src/assets/logo.svg'
            alt='Logo'
          />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
