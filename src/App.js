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

      {/* New Monitoring Tools Card */}
      <div className="card">
        <h2>📊 Monitoring Tools</h2>
        <p className="description">
          This project uses Docker Compose to set up Grafana and Prometheus for monitoring.
        </p>
        <ul className="tools">
          <li>
            <a
              href="http://3.87.67.246:3000/d/adfjnmc/webapp-prometheus-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              📈 Grafana Dashboard
            </a>
          </li>
          <li>
            <a
              href="http://3.87.67.246:9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              🧮 Prometheus Metrics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
