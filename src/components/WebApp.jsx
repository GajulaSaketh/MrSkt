// filepath: d:\Portfolio\port\my-app\src\components\MobileUi.jsx
import React from "react";
import "../styles/WebApp.css";

const WebApp = () => {
  return (
    <div className="webapp-container">
      <div className="lovemylotto-project-card">
  <h2 className="project-title">LoveMyLotto</h2>
  <p className="project-subtitle">Web Application | ASP.NET MVC</p>

  <ul className="project-details">
    <li><strong>Technology Used:</strong> ASP.NET MVC, C#, Razor, SQL Server, PayPal API</li>
  </ul>

  <p className="project-section">
    <strong>Project Overview:</strong> LoveMyLotto is a web-based lottery subscription platform that allows users to subscribe to lottery plans using both recurring and one-time payment methods. The application integrates with PayPal for secure payments and automates user notifications and invoice handling.
  </p>

  <p className="project-section"><strong>Key Features & My Responsibilities:</strong></p>
  <ul className="project-details">
    <li>Integrated PayPal payment gateway for both recurring and one-time payments.</li>
    <li>Implemented logic for creating PayPal products and subscription plans dynamically.</li>
    <li>Handled post-payment processes like saving subscription details to the local SQL database.</li>
    <li>Generated invoices upon successful transactions and emailed them to users.</li>
    <li>Developed email/SMS notification system to notify users after payment success/failure.</li>
    <li>Created a scheduled job (night trigger) to fetch daily transaction data using PayPal APIs.</li>
    <li>Stored transaction history and statuses (Completed, Cancelled, Failed) in a centralized table for reporting.</li>
  </ul>

  <p className="project-section">
    <strong>Outcome:</strong> Successfully streamlined the subscription flow with automated payments, improved user communication through real-time notifications, and ensured daily reconciliation of payments. Gained solid experience in payment integration and job scheduling in ASP.NET MVC.
  </p>
</div>
    </div>
  );
};
export default WebApp;