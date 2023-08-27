import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const data = [
    {
      thumbnail: './src/assets/javascript.svg',
      name: 'Test Test 1',
      position: 'General Manager',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi et, corporis commodi laboriosam magni vitae dolor libero similique dolorem suscipit maiores quia laborum? Veniam debitis numquam dicta quisquam omnis!',
    },
    {
      thumbnail: './src/assets/react.svg',
      name: 'Test Test 2',
      position: 'CEO of Company',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi et, corporis commodi laboriosam magni vitae dolor libero similique dolorem suscipit maiores quia laborum? Veniam debitis numquam dicta quisquam omnis!',
    },
  ];

  return (
    <div
      id='testimonials'
      className='container mx-auto flex flex-col justify-center items-center mb-20'>
      <h2 className='text-3xl tracking-tight font-semibold mb-16'>
        Testimonials
      </h2>
      <Carousel data={data} />
    </div>
  );
};

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <>
      <div className='h-80 w-full flex flex-col items-center relative'>
        <Testimonial
          thumbnail={data[currentIndex].thumbnail}
          name={data[currentIndex].name}
          position={data[currentIndex].position}
          quote={data[currentIndex].quote}
          direction={direction}
          index={currentIndex}></Testimonial>
      </div>
      <div className='flex justify-center gap-4 mt-12'>
        {data.length > 1
          ? data.map((el, index) => (
              <div
                key={index}
                className={`dot ${
                  currentIndex === index ? 'bg-accent' : 'bg-text dark:bg-textD'
                }`}
                onClick={() => handleDotClick(index)}></div>
            ))
          : null}
      </div>
    </>
  );
};

const Testimonial = ({
  thumbnail,
  name,
  position,
  quote,
  direction,
  index,
}) => {
  const slideVariants = {
    hiddenRight: {
      x: '50%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-50%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.33,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className='flex flex-col justify-center items-center absolute top-0'
        variants={slideVariants}
        animate='visible'
        exit='exit'
        initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
        key={index}>
        <img
          src={thumbnail}
          alt='placeholder'
          className='h-20 w-20 rounded-full mb-4'
        />
        <h2 className='font-extrabold text-2xl tracking-tight leading-2'>
          {name}
        </h2>
        <h3 className='font-semibold text-xl tracking-tight mb-8'>
          {position}
        </h3>
        <blockquote className='text-text/70 dark:text-textD/70 font-normal text-xl max-w-lg text-center tracking-tight leading-8 mb-4'>
          {quote}
        </blockquote>
      </motion.div>
    </AnimatePresence>
  );
};

export default Testimonials;
