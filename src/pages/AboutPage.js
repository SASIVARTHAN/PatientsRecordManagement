import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About Jarurat Care</h1>
          <p className="about-subtitle">Revolutionizing Healthcare Management</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Jarurat Care, we are committed to providing healthcare professionals with 
              the tools they need to deliver exceptional patient care. Our Patient Records 
              Dashboard simplifies the process of managing patient information, making it 
              easier to access critical data when it matters most.
            </p>
          </section>

          <section className="about-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-number">01</div>
                <h3>Comprehensive Patient Records</h3>
                <p>Access complete patient information including contact details, medical history, and treatment plans.</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">02</div>
                <h3>Advanced Search</h3>
                <p>Quickly find patients using our powerful search functionality with real-time filtering.</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">03</div>
                <h3>Responsive Design</h3>
                <p>Access patient records from any device - desktop, tablet, or mobile.</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">04</div>
                <h3>Secure & Reliable</h3>
                <p>Your patient data is protected with industry-standard security measures.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Technology Stack</h2>
            <p>
              Built with modern web technologies including React, React Hooks for state 
              management, and responsive CSS to ensure a seamless experience across all devices.
            </p>
          </section>

          <section className="about-section contact-section">
            <h2>Contact Us</h2>
            <p>Have questions or need support? We're here to help!</p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> support@jaruratcare.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

