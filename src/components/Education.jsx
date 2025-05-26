// components/Education.jsx
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-timeline">
        <div className="timeline-item">
          <div className="timeline-content left">
            <div className="year">2018-2022</div>
            <h3>Bachelor of Technology</h3>
            <div className="timeline-marker"></div>
            <h4>Jyothishmathi Institute of Technology and Science</h4>
            <p>Karimnagar Telangana</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content right">
            <div className="year">2016-2018</div>
            <h3>Intermediate</h3>
            <div className="timeline-marker"></div>
            <h4>Sadhana Junior College</h4>
            <p>Dharmaram Telangana</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content left">
            <div className="year">2015-2016</div>
            <h3>Secondary School Certificate</h3>
            <div className="timeline-marker"></div>
            <h4>Zilla Parishad High School</h4>
            <p>Endapalli Telangana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;