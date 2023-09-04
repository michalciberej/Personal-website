import { mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';

const Socials = () => {
  return (
    <>
      <ul className='flex gap-4 justify-center container m-auto'>
        <li>
          <a
            className='socialsBtn border-2 border-black dark:border-white hover:dark:border-primary focus:dark:border-primary flex'
            href='https://github.com/michalciberej'
            target='_blank'
            rel='noreferrer'>
            <Icon
              path={mdiGithub}
              size={1}
            />
          </a>
        </li>
        <li>
          <a
            className='socialsBtn border-2 border-black dark:border-white hover:dark:border-primary focus:dark:border-primary flex'
            href='https://www.linkedin.com/in/michal-ciberej-a1b235247/'
            target='_blank'
            rel='noreferrer'>
            <Icon
              path={mdiLinkedin}
              size={1}
            />
          </a>
        </li>
        <li>
          <a
            className='socialsBtn border-2 border-black dark:border-white hover:dark:border-primary focus:dark:border-primary flex'
            href='https://twitter.com/michalciberej'
            target='_blank'
            rel='noreferrer'>
            <Icon
              path={mdiTwitter}
              size={1}
            />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
