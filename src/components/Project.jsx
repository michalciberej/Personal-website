import { useState } from 'react';

const Project = ({ thumbnail, description, techs, children }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleDisplay = () => {
    if (isDisplayed === false) setIsDisplayed(true);
    else setIsDisplayed(false);
  };

  return (
    <>
      <div className='group flex flex-col text-center bg-accent p-4 rounded-xl gap-4 projectContainer'>
        <img
          src={thumbnail}
          alt=''
          className=''
        />
        {isDisplayed && (
          <div>
            <h4 className='text-xl font-bold'>{children}</h4>
            <p className='text-lg max-w-prose'>{description}</p>
            <div className='flex gap-2 items-center justify-center'>
              {techs != null
                ? techs.map((el, index) => (
                    <img
                      src={el}
                      alt='React'
                      key={index}
                      className='h-12 rounded-lg'
                    />
                  ))
                : null}
            </div>
            <div className='flex gap-8 justify-center'>
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
        )}
      </div>
    </>
  );
};

export default Project;
