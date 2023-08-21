import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Contactme = () => {
  return (
    <>
      <div className='min-h-screen'>
        <Navbar />
        <div className='container m-auto max-w-2xl'>
          <h1 className='mt-12 mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center'>
            Thank you for taking your time to send me a message. How can I help
            you?
          </h1>
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Contactme;
