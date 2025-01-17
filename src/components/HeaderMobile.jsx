import React, { useState } from "react";
import { Link } from "react-router-dom";


const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="mobile-header">
        <nav className="nav-mobile">
          <a
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <img
              className="menu-icon"
              src={isMenuOpen ? "../assets/close.png" : "../assets/menu.png"}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </a>
        </nav>
      </header>

      <div className={`slide-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links-mobile">
          <li className="nav-link-mobile">
            <Link to="/">About</Link>
          </li>
          <li className="nav-link-mobile">
            <Link to="/listen">Listen</Link>
          </li>
          <li className="nav-link-mobile">
            <Link to="/watch">Watch</Link>
          </li>
          <li className="nav-link-mobile">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;
