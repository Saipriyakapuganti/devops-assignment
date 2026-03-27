import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🚀 DevOps Pipeline Dashboard</h1>
      <p className="author">
        Deployed by: <strong>Sai Priya Kolluru</strong>
      </p>

      <div className="card">
        <h2>📌 Project Overview</h2>
        <p className="description">
          This project demonstrates a complete DevOps pipeline implementation.
          The application is containerized using Docker and deployed on AWS EC2.
          CI/CD pipeline is configured using GitHub Actions to automate build,
          test, and deployment processes. Configuration management is handled
          using Ansible for efficient provisioning and deployment.
        </p>

        <h2>⚙️ Tools & Technologies</h2>
        <ul className="tools">
          <li>⚡ GitHub Actions - CI/CD Automation</li>
          <li>🐳 Docker - Containerization</li>
          <li>☁️ AWS EC2 - Deployment</li>
          <li>🛠️ Ansible - Configuration Management</li>
          <li>⚛️ React - Frontend</li>
        </ul>
      </div>

      <div className="card">
        <h2>📊 Services Status</h2>

        <div className="service running">
          <span>Frontend</span>
          <span>✅ Running</span>
        </div>

        <div className="service pending">
          <span>Backend</span>
          <span>⏳ Coming Soon</span>
        </div>
      </div>
    </div>
  );
}

export default App;
