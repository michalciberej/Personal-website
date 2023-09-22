import lines from '../assets/lines.svg';

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-textD mx-auto justify-center items-center h-[100dvh] relative'>
        <img
          src={lines}
          alt='Picture of abstract lines'
          className='hero-image absolute opacity-0 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[800px] w-[100vw] rotate-90 mr-20 lg:mr-60'
        />
        <div className='overflow-hidden -translate-x-20 lg:-translate-x-64'>
          <div className='hero-title relative translate-y-full opacity-0 z-50 font-light tracking-wide dark:text-textD text-6xl sm:text-7xl md:text-8xl lg:text-9xl '>
            Michal
          </div>
        </div>
        <div className='overflow-hidden -translate-x-10 lg:-translate-x-40'>
          <div className='hero-title relative translate-y-full z-50 font-light tracking-wide dark:text-textD text-6xl sm:text-7xl md:text-8xl lg:text-9xl pb-2'>
            Ciberej
          </div>
        </div>
        <div className='overflow-hidden translate-x-6 lg:translate-x-0'>
          <div className='hero-title relative translate-y-full z-50 font-semibold tracking-wide dark:text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl md:-mb-4 text-primary'>
            Web
          </div>
        </div>
        <div className='overflow-hidden translate-x-4 lg:translate-x-20'>
          <div className='hero-title relative translate-y-full z-50 font-semibold tracking-wide dark:text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary'>
            Developer
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
