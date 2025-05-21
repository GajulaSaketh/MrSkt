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
import AutoScrollToTop from './components/AutoScrollToTop';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from './components/Blog';
import Videos from './components/Videos';
import Player from './components/Player';
import TechGate from './components/TechGate';
import Admin from './components/AdminAuth';
import Upload from './components/UploadVideo';

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
    <AutoScrollToTop />
    <Routes>
    <Route path="/" element={
    <div className="App">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <AboutMe />
        <section id="education">
        <Education />
        </section>
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
    <Route path="/videos" element={<Videos />} />
    <Route path="/player/:videoUrl" element={<Player />} />
    <Route path="/tech-gate" element={<TechGate />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="/education" element={<Education />} />
    <Route path="/skills" element={<Skilltest />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;




// import { useState, useEffect }  from 'react';
// import { BrowserRouter , Routes, Route } from "react-router-dom";
// import './App.css';
// import MobileUi from './components/MobileUi';
// import WebApp from './components/WebApp';
// import DataFactory from './components/DataFactory';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import AboutMe from './components/AboutMe';
// import Education from './components/Education';
// import Skilltest from './components/Skillstest';
// import Experience from './components/Experience';
// import ScrollToTop from './components/ScrollToTop';
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Blog from './components/Blog';
// import Videos from './components/Videos';
// import Player from './components/Player';
// import TechGate from './components/TechGate';
// import Admin from './components/AdminAuth';
// import Upload from './components/UploadVideo';

// function App() {
//   const [activeSection, setActiveSection] = useState('hero');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={
//           <div className="App">
//             <Navbar activeSection={activeSection} />
//             <main>
//               <Hero />
//               <AboutMe />
//               <Education />
//               <Skilltest />
//               <Experience />
//               <Portfolio />
//               <Contact />
//             </main>
//             <ScrollToTop />
//           </div>} 
//         />
//         <Route path="/mobile-ui" element={<MobileUi />} />
//         <Route path="/web-app" element={<WebApp />} />
//         <Route path="/data-factory" element={<DataFactory />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/videos" element={<Videos />} />
//         <Route path="/player/:videoUrl" element={<Player />} />
//         <Route path="/tech-gate" element={<TechGate />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/upload" element={<Upload />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;
