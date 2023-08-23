import Header from '../components/Header';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
      <div className='min-h-screen bg-secondaryD'>
        <Navbar />
        <div className='container m-auto'>
          <h1 className='mt-12 mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center'>
            I am Michal Ciberej and I am <Header />
          </h1>
        </div>
      </div>
      <Projects />
      <div
        className='min-h-1/3 py-8 bg-secondary dark:bg-secondaryD'
        id='kokos'>
        <Skills />
      </div>
      <Footer />
    </>
  );
}

export default Home;
