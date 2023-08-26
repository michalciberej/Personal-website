import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const Main = () => {
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className='fixed w-full top-0 left-0 h-1 z-50'>
        <div
          className='h-1 bg-gradient-to-r from-primary to-yellow-300 z-100'
          style={{ width: `${scroll}%` }}></div>
      </div>
      <Navbar />
      <Outlet />
      {pathname != '/' ? (
        <Footer home={false} />
      ) : (
        <div>
          <Contact />
          <Footer home={true} />
        </div>
      )}
    </>
  );
};

export default Main;
