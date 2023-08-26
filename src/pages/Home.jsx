import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
      <div className=''>
        <div className='min-h-screen container grid grid-cols-2 items-center mx-auto justify-center  col-span-2'>
          <div>
            <h1 className='mt-32 mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white text-center'>
              Hello, I am Michal Ciberej and I am <Header />
            </h1>
            <p className='text-2xl text-neutral-300 font-bold leading-2 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              hic ad tempora nobis! Quibusdam, repudiandae odio! Quam doloribus
              odit praesentium? Quibusdam sequi similique, saepe quod
              praesentium tempore suscipit perferendis quos.
            </p>
          </div>
          <div className='relative max-w-xl ml-20'>
            <img
              src='./src/assets/blob.svg'
              alt=''
              className='absolute rotate-180'
            />
            <img
              src='./src/assets/person.svg'
              alt='person'
              className=' h-96 relative left-32 top-24 rounded-b-full'
            />
          </div>
        </div>
      </div>
      <div>
        <Projects />
      </div>
      <div className='py-8'>
        <Skills />
      </div>
    </>
  );
}

export default Home;
