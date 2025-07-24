'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#discover', label: 'Discover' },
    { href: '#place', label: 'Places' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-fixed transition-all duration-300 ${
        isScrolled
          ? 'bg-body-DEFAULT dark:bg-body-dark shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container flex justify-between items-center h-header">
        <a
          href="#"
          className={`font-semibold text-lg ${
            isScrolled
              ? 'text-title-DEFAULT dark:text-title-dark'
              : 'text-white'
          }`}
        >
          Travel
        </a>

        <div
          className={`${
            isMenuOpen ? 'right-0' : '-right-full'
          } fixed md:static top-0 w-[70%] md:w-auto h-full md:h-auto bg-body-DEFAULT dark:bg-body-dark md:bg-transparent shadow-lg md:shadow-none p-12 md:p-0 transition-all duration-400 md:transition-none`}
        >
          <ul className="flex flex-col md:flex-row gap-10 md:gap-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-semibold uppercase text-sm transition-colors duration-300 ${
                    isScrolled
                      ? 'text-text-light hover:text-text-DEFAULT dark:text-text-dark dark:hover:text-title-dark md:text-text-DEFAULT md:hover:text-text-DEFAULT'
                      : 'text-white hover:text-white md:text-white md:hover:text-white'
                  } ${
                    activeSection === item.href.slice(1)
                      ? `${
                          isScrolled
                            ? 'text-title-DEFAULT dark:text-title-dark'
                            : 'text-white'
                        } after:content-[''] after:absolute after:w-full after:h-0.5 after:-bottom-3 after:left-0 ${
                          isScrolled
                            ? 'after:bg-title-DEFAULT dark:after:bg-title-dark'
                            : 'after:bg-white'
                        }`
                      : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-8 absolute left-12 bottom-16 md:static md:left-auto md:bottom-auto md:ml-8">
            <span className="text-small text-text-DEFAULT dark:text-text-dark md:hidden">
              Dark mode
            </span>
            <button
              onClick={toggleTheme}
              className={`text-lg cursor-pointer transition-colors duration-300 ${
                isScrolled
                  ? 'text-text-DEFAULT dark:text-text-dark'
                  : 'text-white'
              }`}
            >
              <i className={theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}></i>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-3 right-4 text-2xl text-title-DEFAULT dark:text-title-dark cursor-pointer md:hidden"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className={`text-xl cursor-pointer md:hidden ${
            isScrolled
              ? 'text-title-DEFAULT dark:text-title-dark'
              : 'text-white'
          }`}
        >
          <i className="ri-function-line"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;