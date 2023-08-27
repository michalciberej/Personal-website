import Icon from '@mdi/react';
import { mdiCharity } from '@mdi/js';
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <>
      <div className='flex flex-col justify-center container m-auto items-center text-center my-44'>
        <Icon
          path={mdiCharity}
          size={4}
          className='text-primary mb-8'
        />
        <div>
          <h1 className='text-4xl mb-4 font-bold'>
            Thank you for reaching out
          </h1>
          <h3 className='text-2xl mb-16'>
            Will answer you as soon as possible
          </h3>
        </div>
        <Link
          to={'/'}
          className='button text-xl border-2 text-text dark:text-textD hover:text-textD border-text dark:border-textD dark:hover:bg-textD dark:hover:text-text hover:bg-text focus:text-textD  dark:focus:text-text focus:bg-text dark:focus:bg-textD shadow-md'>
          Go home
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
