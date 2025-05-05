import React from "react";
import "../styles/DataFactory.css";

const DataFactory = () => {
  return (
    <div className="datafactory-container">
      <div className="dataengineering-project-card">
  <h2 className="project-title">Azure Data Engineering</h2>
  <p className="project-subtitle">Self-Learning & Certification</p>

  <ul className="project-details">
    <li><strong>Technology:</strong> Azure Data Factory, Azure Storage, Azure Monitor, Databricks (Basics)</li>
    <li><strong>Certification:</strong> Microsoft Certified: Azure Data Engineer Associate (DP-203)</li>
  </ul>

  <p className="project-section">
    <strong>Overview:</strong> As part of my personal growth journey, I explored data engineering using Azure services through hands-on practice and real-time scenarios. I worked on building end-to-end data pipelines and explored the core components involved in cloud-based data processing.
  </p>

  <p className="project-section"><strong>Key Concepts and Practice Areas:</strong></p>
  <ul className="project-details">
    <li>Created pipelines in Azure Data Factory for ingesting, transforming, and loading data.</li>
    <li>Imported sample datasets stored in Azure Blob Storage using Linked Services.</li>
    <li>Cleaned and transformed data using Data Flows and Data Sets in Data Factory.</li>
    <li>Used Trigger Services to automate pipeline execution based on schedule or event.</li>
    <li>Monitored pipeline executions and handled failures using Azure Monitor tools.</li>
    <li>Explored Databricks basics including notebooks and Spark-based transformations.</li>
  </ul>

  <p className="project-section">
    <strong>Outcome:</strong> Gained a solid understanding of building data pipelines using Azure services, managing data flow from source to sink, and developed a practical foundation for real-world data engineering projects.
  </p>
</div>
    </div>
  );
};

export default DataFactory;