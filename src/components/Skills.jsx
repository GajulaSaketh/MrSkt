

// components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';
import SkillBar from './SkillBar';

const Skills = () => {
  const skills = [
    { name: 'ADOBE PHOTOSHOP', level: 90 },
    { name: 'HTML 5', level: 90 },
    { name: 'ADOBE ILLUSTRATOR', level: 85 },
    { name: 'CSS 3 ANIMATION', level: 85 },
    { name: 'ADOBE AFTER EFFECTS', level: 97 },
    { name: 'COMMUNICATION', level: 97 },
    { name: 'SKETCH', level: 90 },
    { name: 'CREATIVITY', level: 90 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;