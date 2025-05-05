import React, { useState, useEffect } from 'react';
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MobileUi from './components/MobileUi';
import WebApp from './components/WebApp';
import DataFactory from './components/DataFactory';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skilltest from './components/Skillstest';
import Experience from './components/Experience';
import ScrollToTop from './components/ScrollToTop';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from './components/Blog';


function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={
    <div className="App">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Skilltest />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <ScrollToTop />
    </div>} />
    <Route path="/mobile-ui" element={<MobileUi />} />
    <Route path="/web-app" element={<WebApp />} />
    <Route path="/data-factory" element={<DataFactory />} />
    <Route path="/blog" element={<Blog />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;