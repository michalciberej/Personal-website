import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';

const Footer = ({ home }) => {
  return (
    <>
      <footer
        className={
          home === true
            ? 'flex gap-4 justify-center items-center flex-col pt-24 pb-4 bg-primary/30'
            : 'flex gap-4 justify-center items-center flex-col pt-20'
        }>
        <Link
          to={'/'}
          className=''>
          <span className='logo text-3xl'>Michal</span>
          <span className='logo text-accent text-4xl'>.</span>
        </Link>
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
        <h6 className='text-text/50 dark:text-slate-300/50 text-md text-center'>
          Created by me @2023
        </h6>
      </footer>
    </>
  );
};

export default Footer;
