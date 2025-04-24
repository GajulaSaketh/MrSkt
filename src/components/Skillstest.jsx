// components/SkillsCards.jsx
import React from 'react';
import '../styles/Skillstest.css';
import { FaCode, FaCloud, FaTools } from 'react-icons/fa';

const SkillsCards = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-title">
        <h4 className="section-subtitle">What I Know</h4>
        <h2 className="section-heading">My Skills</h2>
      </div>

      <div className="cards-container">
        <div className="skill-card">
          <FaCode className="card-icon" />
          <h3>Programming Skills</h3>
          <p className="card-text">
            Proficient in ASP.NET MVC, SQL, HTML, CSS, React. Experienced in building scalable applications with modern frameworks.
          </p>
        </div>

        <div className="skill-card">
          <FaCloud className="card-icon" />
          <h3>Cloud Skills</h3>
          <p className="card-text">
            Hands-on with Azure Data Factory, Azure Storage, Azure SQL Database.
          </p>
        </div>

        <div className="skill-card">
          <FaTools className="card-icon" />
          <h3>Tools</h3>
          <p className="card-text">
            Experienced with Visual Studio, SQL Server Management Studio, Postman.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SkillsCards;
