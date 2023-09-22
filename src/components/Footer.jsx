import { Link } from 'react-router-dom';

const Footer = () => {
  const handleHomeScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='flex gap-1 justify-center items-center flex-col bg-transparent pt-4 text-text'>
        <Link
          onClick={handleHomeScroll}
          to={'#home'}
          className='outline-none focus:scale-125 hover:scale-125 transition-transform logo text-3xl'>
          Michal
        </Link>
        <p className='text-text/50 dark:text-text/70 text-md text-center pb-1'>
          Created by me @2023
        </p>
      </div>
    </>
  );
};

export default Footer;
