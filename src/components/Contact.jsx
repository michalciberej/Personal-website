import Form from './Form';
import SectionHeading from './SectionHeading';
import Socials from './Socials';

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <div className='flex flex-col items-start mx-[4vw] md:mx-[10vw] pb-20 bg-transparent text-text -mt-32'>
          <SectionHeading
            num='03'
            black={true}>
            Contact
          </SectionHeading>
          <div className='grid grid-rows-1 gap-20 lg:gap-0 lg:grid-cols-2 md:grid-rows-1 w-full'>
            <div>
              <p className='text-xl md:pl-12 flex flex-col gap-4'>
                <span className='block'>
                  I am currently looking for an opportunity.
                </span>
                <span className='block'>
                  Send me a messege and I will get to you asap.
                </span>
              </p>
              <p></p>
            </div>
            <div className='flex gap-8 w-full max-w-[35rem] mx-auto'>
              <Socials
                column={true}
                black={true}
              />
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
