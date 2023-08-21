import React from 'react';
import Typed from 'typed.js';

const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['coffee lover', 'chess player', 'frontend developer'],
      typeSpeed: 100,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span ref={el} />
    </>
  );
};

export default Header;
