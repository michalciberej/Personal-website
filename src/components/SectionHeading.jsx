const SectionHeading = ({ text, children }) => {
  return (
    <>
      <h1 className='mb-40 flex gap-2 items-end justify-center'>
        <span className='text-xl text-accent'>01.</span>
        <span className='text-4xl'>About me</span>
      </h1>
    </>
  );
};

export default SectionHeading;
