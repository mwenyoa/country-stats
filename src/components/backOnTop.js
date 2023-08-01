import React, { useState, useEffect } from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`fixed bottom-10  z-10 right-8 dark:bg-gradient-to-r from-sky-400 to-sky-600 text-white py-3 px-4 rounded-xl ${
        showButton ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <BsArrow90DegUp />
    </button>
  );
};

export default BackToTopButton;
