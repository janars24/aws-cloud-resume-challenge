import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title text-gradient">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-desc">
              I'm open to discussing new opportunities, consulting engagements, or any exciting cloud and integration projects. Feel free to reach out.
            </p>
            
            <div className="contact-details">
              <div className="contact-item glass">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8903018380</p>
                </div>
              </div>
              <div className="contact-item glass">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>janajana22222@gmail.com</p>
                </div>
              </div>
              <div className="contact-item glass">
                <span className="contact-icon">🌐</span>
                <div>
                  <h4>Languages</h4>
                  <p>English, Tamil</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="achievements-section">
            <h3 className="contact-subtitle">Key Achievements</h3>
            <div className="achievement-card glass">
              <div className="achievement-icon text-gradient-alt">🏆</div>
              <div className="achievement-content">
                <h4>YAR Award</h4>
                <p>July 2024</p>
              </div>
            </div>
            
            <div className="achievement-card glass">
              <div className="achievement-icon text-gradient-alt">🌟</div>
              <div className="achievement-content">
                <h4>Customer Centric Award</h4>
                <p>FY25 Q1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
