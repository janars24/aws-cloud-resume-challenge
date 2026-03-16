import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title text-gradient">About Me</h2>
        
        <div className="about-content glass">
          <div className="about-text">
            <p className="highlight">
              Cloud & Integration Engineer with 4.5+ years of experience.
            </p>
            <p>
              I have a proven track record in building and managing enterprise scale integrations using Oracle Integration Cloud (OIC) and deploying highly available, scalable infrastructure on Amazon Web Services (AWS) and Oracle Cloud Infrastructure (OCI).
            </p>
            <p>
              My expertise lies in developing robust REST and SOAP integrations, designing secure architectures, troubleshooting complex integration workflows, and supporting end-to-end cloud deployments. I thrive in cross-functional environments, delivering comprehensive cloud and integration solutions.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number text-gradient-alt">4.5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-gradient-alt">3</span>
                <span className="stat-label">Cloud Platforms</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-gradient-alt">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
