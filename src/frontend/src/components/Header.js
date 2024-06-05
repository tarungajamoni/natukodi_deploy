import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (targetId) => {
    scroll.scrollTo(document.getElementById(targetId).offsetTop - 80, {
      duration: 700,
      smooth: 'easeInOutQuart',
    });

    if (window.innerWidth < 991) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="/" className="logo">
                <img
                  src="/assets/images/klassy-logo.png"
                  alt="NatukodiPulav logo"
                  align="Natukodi Pulav"
                />
              </a>
              <button className="menu-trigger" onClick={toggleMenu}>
                <span>Menu</span>
              </button>
              <ul className="nav" style={{ display: isMenuOpen ? 'block' : 'none' }}>
                <li className="scroll-to-section">
                  <a href="#top" className="active" onClick={() => scrollToSection('top')}>Home</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#reservation" onClick={() => scrollToSection('reservation')}>Contact Us</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#reviews" onClick={() => scrollToSection('reviews')}>Guest Reviews</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
