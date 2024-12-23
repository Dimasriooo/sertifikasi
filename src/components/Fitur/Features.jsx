import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Our Services</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Web Development</h3>
          <p>Building responsive and modern websites.</p>
        </div>
        <div className="feature-card">
          <h3>App Development</h3>
          <p>Creating mobile applications with the best user experience.</p>
        </div>
        <div className="feature-card">
          <h3>Cloud Solutions</h3>
          <p>Providing scalable cloud services for your business.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
