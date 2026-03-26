import React, { useState } from "react";
import "./App.css";

const initialServices = [
  { name: "Frontend", status: "Running" },
  { name: "Backend", status: "Running" },
  { name: "Database", status: "Running" },
];

function App() {
  const [services, setServices] = useState(initialServices);

  const refreshStatus = () => {
    const updated = services.map((service) => ({
      ...service,
      status: Math.random() > 0.2 ? "Running" : "Down",
    }));
    setServices(updated);
  };

  return (
    <div className="container">
      <h1>🚀 DevOps Monitoring Dashboard</h1>

      <button onClick={refreshStatus}>Refresh Status</button>

      <div className="grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h2>{service.name}</h2>
            <p
              className={
                service.status === "Running" ? "status up" : "status down"
              }
            >
              {service.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
