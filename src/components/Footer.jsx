import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      // Scroll to the section if already on the home page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure navigation completes
    }
  };

  return (
    <>
      <main className="footer max padding">
        <div className="footer-details">
          <div className="contact-info">
            <div className="title">
              <img src="/src/assets/logo.png" alt="Logo"></img>
              <h3>ROLE MODEL ACADEMY</h3>
            </div>
            <p>Start your journey today and join the Role Model Academy to unlock your full potential.</p>
            <div className="socials">
              <img src="/src/assets/facebook-icon.png" alt="Facebook"></img>
              <img src="/src/assets/telegram-icon.png" alt="Telegram"></img>
              <img src="/src/assets/instagram-icon.png" alt="Instagram"></img>
              <img src="/src/assets/youtube-icon.png" alt="YouTube"></img>
            </div>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul className="links">
              <li onClick={() => navigate('/about')}>About</li>
              <li onClick={() => handleScrollToSection('benefits')}>Benefits</li>
              <li onClick={() => handleScrollToSection('testimonials')}>Testimonial</li>
              <li>
                <a
                  href="https://www.drbrettdenkin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Brett’s Website
                </a>
              </li>
            </ul>
          </div>
          <div className="cta">
            <h3>Join Now</h3>
            <button>JOIN THE ACADEMY</button>
          </div>
        </div>
        <hr />
        <p>© 2025 ROLE MODEL ACADEMY. All rights reserved.</p>
      </main>
    </>
  );
};

export default Footer;
