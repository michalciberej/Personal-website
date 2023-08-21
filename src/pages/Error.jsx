import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Icon from '@mdi/react';
import { mdiWebOff } from '@mdi/js';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center container m-auto items-center text-center my-44'>
        <Icon
          path={mdiWebOff}
          size={4}
          className='text-primary mb-8'
        />
        <div>
          <h1 className='text-4xl mb-4 font-bold'>Looks like you're lost</h1>
          <h3 className='text-2xl mb-16'>Maybe try different page?</h3>
        </div>
        <Link
          to={'/'}
          className='button text-xl hover:text-textD'>
          Go home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
