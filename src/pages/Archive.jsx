import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiArrowLeftThin } from '@mdi/js';
import ArchiveProject from '../components/ArchiveProject';

const Archive = () => {
  return (
    <div className='container py-20 mx-auto'>
      <div>
        <Link
          to='/'
          className='group mb-1 inline-flex items-center font-semibold leading-tight text-primary'>
          <Icon
            path={mdiArrowLeftThin}
            size={1}
            className='group-hover:-translate-x-2 transition-transform'
          />
          <h3 className='text-xl '>Back</h3>
        </Link>
        <h1 className='text-6xl font-extrabold tracking-tight'>All Projects</h1>
      </div>
      <div className='overflow-x-scroll'>
        <table className='mt-12 w-full border-collapse text-left min-w-[50rem]'>
          <thead className='sticky -top-1 border-b bg-background dark:bg-backgroundD border-slate-300/10 pb-2 w-full'>
            <tr>
              <th className='font-semibold py-4 pr-8 text-slate-200 text-lg'>
                Year
              </th>
              <th className='font-semibold py-4 pr-8 text-slate-200 text-lg'>
                Project Name
              </th>
              <th className='font-semibold py-4 pr-8 text-slate-200 text-lg'>
                Built with
              </th>
              <th className='py-4 pr-8font-semibold text-slate-200 text-lg'>
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
            <ArchiveProject
              year={2023}
              techs={[
                './src/assets/react.svg',
                './src/assets/tailwind.svg',
                './src/assets/javascript.svg',
              ]}
              links={'www.google.com'}>
              My Awesome Project
            </ArchiveProject>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Archive;
