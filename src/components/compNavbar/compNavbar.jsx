import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import './compNavbar.css';

const CompNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
      return newState;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <div className="navbar-logo">
            <NavLink to="/home">
              <img src="/ddf-logo.png" alt="DDF Logo" />
            </NavLink>
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
          {[
            ['Home', '/home'],
            ['About Me', '/about'],
            ['Skills', '/skills'],
            ['Experience', '/experience'],
            ['Projects', '/project'],
            ['Testimonials', '/testimonials'],
            ['Contact', '/contact'],
          ].map(([label, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'navbar-link active' : 'navbar-link'
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* === Left Floating Contact Bar === */}
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dadaoluwawamiri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Mail size={18} />
            </a>
          </li>
        </ul>
      </div>

      {/* === Right Floating Social Bar === */}
      <div className="contact-wrapper right">
        <div className="vert-line"></div>
        <ul className="contact-icons">
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
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
