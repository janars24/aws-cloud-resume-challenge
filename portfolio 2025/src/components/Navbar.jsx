import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <span className="text-gradient">JS</span>
          </a>
        </div>
        <ul className="navbar-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
        <div className="navbar-actions">
          <a href="#contact" className="btn-primary">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
