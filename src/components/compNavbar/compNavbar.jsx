import React, { useState } from 'react';
import { Phone, Mail, Github, Linkedin, ArrowUp, Pointer } from 'lucide-react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './compNavbar.css';

const CompNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.classList.toggle('menu-open', newState);
      return newState;
    });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: 'easeInOutQuad' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <div className="navbar-logo">
            <img src="/ddf-logo.png" alt="DDF Logo" />
          </div>

          <div
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id} style={{cursor: 'pointer'}}>
              <Link
                to={id}
                spy={true}           // Active link tracking
                smooth={true}        // Smooth scroll
                offset={-80}         // Optional: adjust for navbar height
                duration={600}       // Scroll duration
                className="navbar-link"
                activeClass="active" // Add 'active' class when section in view
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Left Floating Contact Bar */}
      <div className="contact-wrapper left">
        <div className="vert-line"></div>
        <ul className="contact-icons">
          <li>
            <a href="tel:+2349014345902" className="icon-link">
              <Phone size={18} />
            </a>
          </li>
          <li>
            <a
              href="mailto:dadaoluwawamiri@gmail.com"
              className="icon-link"
            >
              <Mail size={18} />
            </a>
          </li>
        </ul>
      </div>

      {/* Right Floating Social Bar */}
      <div className="contact-wrapper right">
        <div className="vert-line"></div>
        <ul className="contact-icons">
          <li>
            <a
              href="https://github.com/VoidVenerate"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/emmanuel-dada-29986324a"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <button className="icon-link scroll-top" onClick={scrollToTop}>
              <ArrowUp size={18} />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CompNavbar;
