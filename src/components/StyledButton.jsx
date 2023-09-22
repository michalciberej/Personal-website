import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

const StyledButton = ({ submit, black, func, children, border }) => {
  return (
    <>
      <button
        type={submit ? 'submit' : 'button'}
        className={`group link max-w-fit duration-300 border-[1px] border-${border} py-2 px-2`}
        onClick={func}>
        <span className='mask'>
          <div className='link-container'>
            <span className={`link-title1 title ${black && 'text-text'}`}>
              {children}
            </span>
            <span className={`link-title2 title ${black && 'text-text'}`}>
              {children}
            </span>
          </div>
        </span>
        <Icon
          path={mdiArrowRight}
          size={1.2}
          className={`transition-transform -rotate-45 group-hover:rotate-0 group-focus:rotate-0 ${
            black && 'text-text'
          }`}
        />
      </button>
    </>
  );
};

export default StyledButton;
