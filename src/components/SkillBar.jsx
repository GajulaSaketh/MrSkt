// components/SkillBar.jsx
import React from 'react';
import '../styles/SkillBar.css';

const SkillBar = ({ name, level }) => {
  return (
    <div className="skill-item">
      <h3>{name}</h3>
      <div className="skill-bar">
        <div className="skill-level" style={{ width: `${level}%` }}></div>
      </div>
      <span className="skill-percentage">{level}%</span>
    </div>
  );
};

export default SkillBar;