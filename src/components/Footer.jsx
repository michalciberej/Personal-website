import { Link } from 'react-router-dom';
import Socials from './Socials';

const Footer = ({ home }) => {
  return (
    <>
      <footer
        className={
          home === true
            ? 'flex gap-4 justify-center items-center flex-col md:pt-24 pt-52 pb-4 bg-primary/30'
            : 'flex gap-4 justify-center items-center flex-col pt-20'
        }>
        <Link
          to={'/'}
          className=''>
          <span className='logo text-3xl'>Michal</span>
          <span className='logo text-accent text-4xl'>.</span>
        </Link>
        <Socials />
        <h6 className='text-text/50 dark:text-slate-300/50 text-md text-center'>
          Created by me @2023
        </h6>
      </footer>
    </>
  );
};

export default Footer;
