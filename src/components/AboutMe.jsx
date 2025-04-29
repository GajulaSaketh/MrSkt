// components/AboutMe.jsx
import React from 'react';
import '../styles/AboutMe.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I am a Professional Software Developer</p>
          <div className="contact-info">
            <div className="info-item">
              <h3>Phone</h3>
              <p>9381407582</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>sakethgajula19@gmail.com</p>
            </div>
            <div className="info-item">
              {/* <h3>Website</h3>
              <p>https://www.frontlinesedutech.com/</p> */}
            </div>
          </div>
        </div>
        <div className="about-image-container">
          <div className="about-image">
            <img src="./gimblipic.jpeg" alt="Profile" />
          </div>
          <div className="social-links">
            {/* <a href="#" className="social-link">
              <FaFacebookF />
            </a> */}
            <a href="https://www.instagram.com/saketh_gajula/" target="_blank" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/saketh_gajula" target="_blank" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/gajulasaketh0219" target="_blank" className="social-link">
              <FaLinkedinIn />
            </a>
            {/* <a href="#" className="social-link">
              <FaGithub />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;