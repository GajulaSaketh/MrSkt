// components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          HI<span className="accent-dot">,</span> I AM<br />
          SAKETH
        </h1>
        <p>Jr.SOFTWARE DEVELOPER</p>
        <a href="./SakethResume.pdf" download className="download-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;