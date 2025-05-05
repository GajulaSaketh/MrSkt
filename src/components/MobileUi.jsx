import React from "react";
import "../styles/MobileUi.css";

const MobileUi = () => {
  return (
    <div className="mobile-ui-container">
      <div className="atoz-project-card">
  <h2 className="project-title">AtoZ</h2>
  <p className="project-subtitle">Mobile Application UI Design using .NET MAUI</p>

  <ul className="project-details">
    <li><strong>Duration:</strong> 3 months</li>
    <li><strong>Technology Used:</strong> .NET MAUI, C#, XAML, MVVM</li>
  </ul>

  <p className="project-section">
    <strong>Project Overview:</strong> AtoZ is a cross-platform mobile application built using .NET MAUI.
    The app aims to provide a seamless experience across Android and iOS by focusing on clean, responsive UI design.
    My role involved crafting intuitive user interfaces and implementing key screens using XAML and C#.
  </p>

  <p className="project-section"><strong>Responsibilities:</strong></p>
  <ul className="project-details">
    <li>Designed and implemented UI screens with XAML and C#.</li>
    <li>Converted Figma designs into interactive mobile layouts.</li>
    <li>Applied MVVM architecture for clean separation of concerns.</li>
    <li>Ensured responsive UI across Android and iOS devices.</li>
    <li>Collaborated in sprint meetings and code reviews.</li>
  </ul>

  <p className="project-section">
    <strong>Key Screens Designed:</strong> Home, Login/Signup, Dashboard, Profile, and Settings.
  </p>

  <p className="project-section">
    <strong>Outcome:</strong> Gained solid experience with .NET MAUI and mobile UI best practices.
    Strengthened my understanding of responsive design challenges in cross-platform development.
  </p>
</div>
    </div>
  );
};

export default MobileUi;