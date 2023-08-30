const Landing = () => {
  return (
    <div className='container flex flex-col mx-auto text-center justify-center items-center pt-12'>
      <h1 className='text-3xl font-extrabold leading-tight tracking-tight text-text md:text-4xl lg:text-6xl dark:text-white mb-8'>
        Hey, I am Michal Ciberej
      </h1>
      <p className='text-2xl text-text/70 dark:text-textD/70 font-normal leading-2 mb-48'>
        My journey to becoming a self-thought frontend developer started in 2021
        when I decided to build me a ecommerce website. After a year of making
        websites with Word Press and PrestaShop. I decided that I want to be
        able to create fully customized websites.
      </p>
      <div className={window.scrollY > 0 ? 'mouse opacity-0' : 'mouse'}></div>
    </div>
  );
};

export default Landing;
