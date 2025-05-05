// components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ activeSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero"> Mr_ </a>
      </div>
      <div className="navbar-links">
        <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
          EDUCATION
        </a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
          SKILLS
        </a>
        <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
          EXPERIENCE
        </a>
        <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
          PORTFOLIO
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          CONTACT
        </a>
        <a href="#blog" className={activeSection === 'blog' ? 'active' : ''}>
        <p style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 800 }}>
           <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 900 }}>Bits</span>
           <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', marginLeft: '4px' }}>of Me</span>
        </p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;











