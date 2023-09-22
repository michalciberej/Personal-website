const Error = () => {
  return (
    <>
      <div className='bg-backgroundD w-full h-screen flex justify-center items-center text-textD'>
        <h1 className='flex text-xl items-center'>
          <span className="after:content-[''] after:inline-block after:bg-red-300 after:h-full after:w-[1px] pr-4 border-r-2 border-textD leading-none">
            404
          </span>
          <span className='pl-4'>PAGE NOT FOUND</span>
        </h1>
      </div>
    </>
  );
};

export default Error;
