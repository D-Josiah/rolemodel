import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header_samp = () => {
  const navigate = useNavigate();

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
    <header className="desktop-header-samp max">
      <nav className="desktop-nav padding">
        
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
            src="/src/assets/menu-icon.png" 
            alt="menu button icon" 
            className="menu-icon" 
            style={{ cursor: 'pointer' }} 
          />
        </div>

        {/* Navigation Links */}
        <div className="side-menu">
          {/* Close Icon */}
          <img 
            src="/src/assets/close-icon.png" 
            alt="close button icon" 
            className="close-icon" 
            style={{ cursor: 'pointer' }} 
          />
          <ul className="nav-links">
            <li className="nav-link">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('top');
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('benefits');
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
                }}
              >
                Testimonials
              </Link>
            </li>
          </ul>

          {/* Join Button */}
          <button className="join-button" onClick={() => navigate('/contact')} aria-label="Join Now">
            JOIN
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header_samp;
