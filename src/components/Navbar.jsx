// components/Navbar.jsx
import React from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import {useLocation, Link as RouterLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ activeSection }) => {
  const location = useLocation(); 
  const isHomePage = location.pathname === '/'; 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#"> Mr_ </a>
      </div>
      <div className="navbar-links">
        {isHomePage ? (
          <>
      <ScrollLink
         to="education"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'education' ? 'active' : ''}
      >
       EDUCATION
      </ScrollLink>
      <ScrollLink
         to="skills"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'skills' ? 'active' : ''}
      >
       SKILLS
      </ScrollLink>
      <ScrollLink
         to="experience"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'experience' ? 'active' : ''}
      >
       EXPERIENCE
      </ScrollLink>
      <ScrollLink
         to="portfolio"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'portfolio' ? 'active' : ''}
      >
       PORTFOLIO
      </ScrollLink>
      <ScrollLink
         to="contact"
         smooth={true}
         duration={500}
        offset={-80}
        className={activeSection === 'contact' ? 'active' : ''}
      >
       CONTACT
      </ScrollLink>
      </>
        ):(
          <>
            <HashLink to="/#education">EDUCATION</HashLink>
            <HashLink to="/#skills">SKILLS</HashLink>
            <HashLink to="/#experience">EXPERIENCE</HashLink>
            <HashLink to="/#portfolio">PORTFOLIO</HashLink>
            <HashLink to="/#contact">CONTACT</HashLink>
          </>
        )}
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











