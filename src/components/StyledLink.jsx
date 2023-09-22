import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

const StyledLink = ({
  link,
  currentSection,
  id,
  icon,
  black,
  border,
  target,
  children,
}) => {
  return (
    <>
      <Link
        to={link}
        target={target && '_blank'}
        className={`group link max-w-fit duration-300 py-2 px-2  
        ${border && 'border-[1px]'}
        ${black ? 'border-backgroundD' : 'border-background'} 
        ${currentSection === id ? 'link active' : 'link'}`}>
        <span className='mask'>
          <div
            className={`link-container ${
              black ? 'text-backgroundD' : 'text-textD'
            }`}>
            <span className='link-title1 title'>{children}</span>
            <span
              className={`link-title2 title ${
                black ? 'text-backgroundD' : 'text-textD'
              }`}>
              {children}
            </span>
          </div>
        </span>
        {icon && (
          <Icon
            path={mdiArrowRight}
            size={1.2}
            className={`transition-transform duration-300 -rotate-45 group-hover:rotate-0 group-focus:rotate-0
              ${black ? 'text-backgroundD' : 'text-textD'}`}
          />
        )}
      </Link>
    </>
  );
};

export default StyledLink;
