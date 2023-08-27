const AboutMe = () => {
  return (
    <div
      id='aboutme'
      className='container mx-auto text-center flex flex-col'>
      <h1 className='text-3xl font-extrabold tracking-tight'>About me</h1>
      <div>
        <img
          src='./src/assets/javascript.svg'
          alt='picture'
          className='max-w-lg'
        />
        <div></div>
      </div>
    </div>
  );
};

export default AboutMe;
