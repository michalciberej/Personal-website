import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';

const ArchiveProject = ({ year, techs, links, children }) => {
  return (
    <>
      <tr className='border-b border-slate-300/10 last:border-none'>
        <td className='py-4 pr-8 text-slate-400 text-md'>{year}</td>
        <td className='py-4 pr-8 font-semibold leading-snug text-md'>
          {children}
        </td>
        <td className='py-4 pr-8 font-semibold text-slate-400 text-md flex items-center'>
          {techs != null
            ? techs.map((el, index) => (
                <img
                  src={el}
                  alt='react'
                  key={index}
                  className='w-8'
                />
              ))
            : null}
        </td>
        <td className='py-4 pr-8 font-semibold text-slate-400 text-md '>
          <a
            href='google.com'
            target='_blank'
            className='flex group leading-tight items-center text-md font-semibold text-slate-400 hover:text-primary'>
            {links}
            <Icon
              path={mdiArrowTopRight}
              size={0.75}
              className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform '
            />
          </a>
        </td>
      </tr>
    </>
  );
};

export default ArchiveProject;
