import { motion } from 'framer-motion';

const Animation = ({ children, duration }) => {
  const variants = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: duration, delay: duration },
    },
    hidden: { opacity: 0, translateY: 50 },
  };

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};

export default Animation;
