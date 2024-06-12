import React, { useState, useEffect } from 'react';

function Navbar() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]');
      let currentSection = 'Home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setCurrentPage(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial highlighting
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (page) => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage(page);
    }
  };

  const linkClasses = (page) => {
    return `border-b-2 mx-3 sm:mx-10 transition duration-200 ${
      currentPage === page ? 'text-gray-700 dark:text-gray-200 border-purple-500 text-lg font-bold' : 'border-transparent hover:text-gray-700 dark:hover:text-gray-200 hover:border-blue-500'
    }`;
  };

  return (
    <nav className="fixed min-w-full bg-gray-300 shadow dark:bg-gray-900 text-sm sm:text-lg z-50 justify-center">
      <div className="container flex items-center justify-center py-3 lg:py-5 mx-auto text-gray-700 capitalize dark:text-gray-200">
        <a
          href="#Home"
          className={linkClasses('Home')}
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </a>
        <a
          href="#About"
          className={linkClasses('About')}
          onClick={() => handleLinkClick('About')}
        >
          About
        </a>
        <a
          href="#Timeline"
          className={linkClasses('Timeline')}
          onClick={() => handleLinkClick('Timeline')}
        >
          Timeline
        </a>
        <a
          href="#Projects"
          className={linkClasses('Projects')}
          onClick={() => handleLinkClick('Projects')}
        >
          Projects
        </a>
        <a
          href="#Contact"
          className={linkClasses('Contact')}
          onClick={() => handleLinkClick('Contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
