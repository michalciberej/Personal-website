const SectionHeading = ({ text, children }) => {
  return (
    <>
      <h2 className='flex flex-col justify-center items-center mb-20 pt-20'>
        <span className="text-[3rem] font-extrabold tracking-wider after:h-1 after:w-8 after:bg-accent after:content-[''] after:block after:rounded-xl after:left-[50%] after:-translate-x-[50%] after:relative mb-2">
          {children}
        </span>
        <span className='text-[1.5rem] text-textD/90 max-w-prose text-center font-normal'>
          {text}
        </span>
      </h2>
    </>
  );
};

export default SectionHeading;
