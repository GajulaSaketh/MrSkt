// src/components/Experience.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  // State to control the active card
  const [currentCard, setCurrentCard] = useState(0);
  
  // Project data
  const projects = [
    { title: 'LoveMyLotto(Web Application with PayPal Integration)', description: 'Implemented PayPal payment flows, recurring billing, and post-payment communications through email and SMS.', year: '2025', company: 'Deccansoft Software Services Pvt.Ltd' },
    { title: 'Azure Data Engineering(Self)', description: 'Built end-to-end pipelines using ADF to import CSV files from Blob Storage.Applied transformations using data flows: Derived Columns, Filters, Lookups, Aggregates,Ranks, and Joins.Exported transformed data to Azure SQL Database for further analysis.Practiced monitoring and debugging pipeline runs via ADF monitoring features.Implemented parameterized datasets and pipelines for dynamic execution', year: '2024', company: '' },
    { title: 'AtoZ(Mobile App UI Development)', description: 'Designed and implemented interactive UI components for enhanced user experience across multiple screens.', year: '2024', company: 'Deccansoft Software Services Pvt.Ltd'},
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % projects.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const moveCard = (direction) => {
    setCurrentCard((prev) => (prev + direction + projects.length) % projects.length);
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">EXPERIENCE</h2>
      
      <div className="experience-cards">
        {/* Experience Card */}
        <div className="card experience-card">
          <h3>Jr.SOFTWARE DEVELOPER</h3>
          <p><strong>Oct 2023 - Present</strong></p>
          <p>Deccansoft Software Services Pvt.Ltd.</p>
          <p>Hyderabad, Telangana</p>
          <p>
  Deccansoft Software Services Pvt. Ltd. is a leading IT training and software development company based in Hyderabad. It’s a great place to learn, grow, and work on real-world technologies. Alongside development, the company provides excellent opportunities to train and mentor aspiring candidates in .NET, Java, and cloud platforms.
</p>
        </div>

        {/* Project Cards (only one visible at a time) */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`card project-card ${currentCard === index ? 'active' : ''}`}
          >
            <h3>{project.title}</h3>
            <p><strong>{project.year}</strong></p>
            <p>{project.company}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Carousel Buttons */}
      <div className="carousel-buttons">
        <button onClick={() => moveCard(-1)} className="carousel-btn prev-btn">Prev</button>
        <button onClick={() => moveCard(1)} className="carousel-btn next-btn">Next</button>
      </div>
    </section>
  );
};

export default Experience;
