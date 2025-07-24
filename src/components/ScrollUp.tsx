'use client';

import { useState, useEffect } from 'react';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 z-tooltip bg-primary p-2 flex opacity-90 transition-all duration-400 hover:bg-primary-alt hover:opacity-100 ${
        isVisible ? 'bottom-20' : '-bottom-[20%]'
      }`}
    >
      <i className="ri-arrow-up-line text-white text-xl"></i>
    </button>
  );
};

export default ScrollUp;