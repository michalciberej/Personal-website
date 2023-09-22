import SectionHeading from './SectionHeading';
import StyledLink from './StyledLink';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='flex flex-col items-start mx-[4vw] md:mx-[10vw] pb-40'>
        <SectionHeading num='02'>Projects</SectionHeading>
        <div className='flex flex-col pl-0 lg:pl-12 w-full py-8 gap-40'>
          <Project
            thumbnail='https://v2.seb-graf.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FcCzvwJjReaSMC0aSyjGO&w=1920&q=75'
            alt='project'
            header='My Awesome Project'
            description={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nisi quo obcaecati neque quidem, dignissimos nobis tempore, cupiditate nesciunt ipsum laborum doloribus itaque nihil possimus ad enim eos accusantium facere.'
            }
            left={true}
            links={[
              { title: 'Github', link: 'xyz' },
              { title: 'Live Demo', link: 'abc' },
            ]}
          />
          <Project
            thumbnail='https://v2.seb-graf.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FcCzvwJjReaSMC0aSyjGO&w=1920&q=75'
            alt='project'
            header='My Awesome Project'
            description={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nisi quo obcaecati neque quidem, dignissimos nobis tempore, cupiditate nesciunt ipsum laborum doloribus itaque nihil possimus ad enim eos accusantium facere.'
            }
            left={false}
            links={[
              { title: 'Github', link: 'xyz' },
              { title: 'Live Demo', link: 'abc' },
            ]}
          />
          <Project
            thumbnail='https://v2.seb-graf.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FcCzvwJjReaSMC0aSyjGO&w=1920&q=75'
            alt='project'
            header='My Awesome Project'
            description={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nisi quo obcaecati neque quidem, dignissimos nobis tempore, cupiditate nesciunt ipsum laborum doloribus itaque nihil possimus ad enim eos accusantium facere.'
            }
            left={true}
            links={[
              { title: 'Github', link: 'xyz' },
              { title: 'Live Demo', link: 'abc' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const Project = ({ thumbnail, alt, header, description, links, left }) => {
  return (
    <>
      {left && (
        <div className='flex w-full relative flex-col'>
          <div className='relative md:mr-auto md:ml-0 xl:ml-20'>
            <img
              src={thumbnail}
              alt={alt}
              className='md:translate-x-4 w-[92vw] md:w-[100vw] max-w-[700px] lg:max-w-[600px] h-full brightness-75 relative z-30'></img>
            <div className='md:translate-x-8 project-border border-2 bg-secondary/10 border-secondary w-[92vw] md:w-[100vw] max-w-[700px] lg:max-w-[600px] h-full absolute top-0 left-0'></div>
          </div>
          <div className='project-info flex flex-col justify-center md:absolute md:bottom-8 w-[100vw] max-w-[92vw] md:max-w-lg lg:max-w-xl lg:right-60 md:-mt-60 lg:-mt-0 lg:bottom-20 z-50'>
            <h3 className='text-2xl text-text ml-4 bg-primary -mb-2 relative z-50 max-w-fit px-4 py-1'>
              {header}
            </h3>
            <div className='bg-textD p-8 shadow-xl'>
              <p className='text-lg md:text-xl text-text border-b-[1px] break-all pb-4 border-backgroundD/50 mb-4'>
                {description}
              </p>
              <p className='flex  flex-wrap mb-8 gap-2 text-md md:text-lg text-sky-500 italic '>
                <span className='px-2 py-1'>React</span>
                <span className='px-2 py-1'>Typescript</span>
                <span className='px-2 py-1'>Tailwindcss</span>
                <span className='px-2 py-1'>NodeJS</span>
              </p>
              <div className='flex gap-8'>
                {links.map((el, index) => (
                  <StyledLink
                    black={true}
                    icon={true}
                    border={true}
                    key={index}
                    link={el.link}
                    currentSection={false}
                    id={index}>
                    {el.title}
                  </StyledLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {!left && (
        <div className='flex w-full relative flex-col-reverse xl:flex-col md:mb-20'>
          <div className='project-info flex flex-col justify-center md:absolute w-[100vw] max-w-[92vw] md:max-w-lg md:left-60 md:bottom-8 lg:mt-0 lg:max-w-xl lg:left-[15rem] xl:left-[18rem] lg:bottom-20 z-50'>
            <h3 className='text-2xl md:text-2xl text-text mr-4 -mb-2 bg-primary max-w-fit px-4 py-1 place-self-end relative z-50'>
              {header}
            </h3>
            <div className='bg-textD p-8 shadow-xl'>
              <p className='text-lg md:text-xl text-text border-b-[1px] pb-4 border-backgroundD/50 mb-8'>
                {description}
              </p>
              <p className='flex flex-wrap mb-4 gap-2 text-md md:text-lg text-sky-500 italic '>
                <span className='px-2 py-1'>React</span>
                <span className='px-2 py-1'>Typescript</span>
                <span className='px-2 py-1'>Tailwindcss</span>
                <span className='px-2 py-1'>NodeJS</span>
              </p>
              <div className='flex gap-8'>
                {links.map((el, index) => (
                  <StyledLink
                    black={true}
                    icon={true}
                    border={true}
                    key={index}
                    link={el.link}
                    currentSection={false}
                    id={index}>
                    {el.title}
                  </StyledLink>
                ))}
              </div>
            </div>
          </div>
          <div className='relative lg:ml-auto lg:mr-20'>
            <img
              src={thumbnail}
              alt={alt}
              className='md:translate-x-4 w-[92vw] lg:w-[100vw] max-w-[700px] lg:max-w-[600px] h-full brightness-75 relative z-30'></img>
            <div className='project-border border-2 bg-secondary/10 border-secondary w-[92vw] lg:w-[100vw] max-w-[700px] lg:max-w-[600px] h-full absolute top-0 left-0'></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
