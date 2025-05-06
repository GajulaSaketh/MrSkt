// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ activeSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero"> Mr_ </a>
      </div>
      <div className="navbar-links">
      <Link
         to="education"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'education' ? 'active' : ''}
      >
       EDUCATION
      </Link>
      <Link
         to="skills"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'skills' ? 'active' : ''}
      >
       SKILLS
      </Link>
      <Link
         to="experience"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'experience' ? 'active' : ''}
      >
       EXPERIENCE
      </Link>
      <Link
         to="portfolio"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'portfolio' ? 'active' : ''}
      >
       PORTFOLIO
      </Link>
      <Link
         to="contact"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'contact' ? 'active' : ''}
      >
       CONTACT
      </Link>
      <RouterLink to="/blog">
        <p style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 800 }}>
        <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 900 }}>Bits</span>
        <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', marginLeft: '4px' }}>of Me</span>
        </p>
      </RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;











