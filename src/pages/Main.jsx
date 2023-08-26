import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const Main = () => {
  const { pathname } = useLocation();

  return (
    <>
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
