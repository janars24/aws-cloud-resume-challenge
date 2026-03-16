import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero fade-in">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting text-gradient-alt">Hello, I'm</p>
          <h1 className="hero-title">Janardhanam S.</h1>
          <h2 className="hero-subtitle">
            <span className="text-gradient">Cloud</span> & Integration Engineer
          </h2>
          <p className="hero-description">
            Building and managing secure, scalable enterprise integrations and cloud infrastructure on AWS & OCI. 4.5+ years of proven track record.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
