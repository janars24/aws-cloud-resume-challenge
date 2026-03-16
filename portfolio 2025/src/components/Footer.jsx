import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="text-gradient">Janardhanam S.</h2>
          <p>Cloud & Integration Engineer</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/janars" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="glass-icon">in</a>
            <a href="mailto:janajana22222@gmail.com" aria-label="Email" className="glass-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Janardhanam Subramaniam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
