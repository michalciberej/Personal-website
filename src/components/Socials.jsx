import { mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';

const Socials = () => {
  return (
    <>
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
    </>
  );
};

export default Socials;
