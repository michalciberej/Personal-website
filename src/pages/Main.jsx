import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <Outlet />
      {pathname === '/' ? <Footer home={true} /> : <Footer home={false} />}
    </>
  );
};

export default Main;
