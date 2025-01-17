import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="header max">
      <nav className="nav">
        <div className='mobile-header'>
          <img 
            src="favicon.ico" 
            alt="Your Logo" 
            className="logo-image" 
            onClick={() => handleScrollToSection('top')} 
            style={{ cursor: 'pointer' }} 
          />

          {/* Menu Icon */}
          <img 
            src="/assets/menu-icon.png" 
            alt="menu button icon" 
            className="menu-icon" 
            onClick={() => setIsMenuOpen(true)} // Open the menu
            style={{ cursor: 'pointer' }} 
          />
        </div>

        {/* Side Menu */}
        <div  className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
          {/* Close Icon */}
          <img 
            src="/assets/close-icon.png" 
            alt="close button icon" 
            className="close-icon" 
            onClick={() => setIsMenuOpen(false)} // Close the menu
            style={{ cursor: 'pointer' }} 
          />
          <ul className="nav-links">
            <li className="nav-link">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('top');
                  setIsMenuOpen(false); // Close menu after navigation
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)} // Close menu when About is clicked
              >
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('benefits');
                  setIsMenuOpen(false); // Close menu after navigation
                }}
              >
                Benefits
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('testimonials');
                  setIsMenuOpen(false); // Close menu after navigation
                }}
              >
                Testimonials
              </Link>
            </li>
          </ul>

          {/* Join Button */}
          <button
            className="join-button"
            onClick={() => {
              window.open('https://t.me/DrBrettmentalgamecoach', '_blank'); // Opens link in a new tab
              setIsMenuOpen(false); // Close menu when Join is clicked
            }}
            aria-label="Join Now"
          >
            JOIN
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Header;
