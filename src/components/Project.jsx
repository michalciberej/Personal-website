const Project = ({ thumbnail, description, techs, right, children }) => {
  return (
    <>
      <div
        className={
          right === false
            ? 'container m-auto flex justify-evenly mb-8'
            : 'container m-auto flex justify-evenly mb-8'
        }>
        {right === false ? (
          <img
            src={thumbnail}
            alt=''
            className='h-60 left'
          />
        ) : null}
        <div className='flex flex-col justify-around'>
          <h4 className='text-xl font-bold'>{children}</h4>
          <p className='text-lg max-w-prose'>{description}</p>
          <div className='flex gap-2 items-center'>
            {techs != null
              ? techs.map((el, index) => (
                  <img
                    src={el}
                    alt='React'
                    key={index}
                    className='h-12'
                  />
                ))
              : null}
          </div>
          <div className='flex gap-8'>
            <a
              href=''
              className='button'>
              Code
            </a>
            <a
              href=''
              className='button'>
              Live demo
            </a>
          </div>
        </div>
        {right === true ? (
          <img
            src={thumbnail}
            alt=''
            className='h-60 right'
          />
        ) : null}
      </div>
    </>
  );
};

export default Project;
