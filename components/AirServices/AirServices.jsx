import React from 'react';
import './AirService.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AirServices = () => {
  const services = [
    {
      title: "Express Shipping",
      description: "Fastest air freight service with guaranteed delivery times, often within 1-3 days.",
      idealFor: "High-priority and time-sensitive shipments.",
      features: "Expedited handling, real-time tracking, priority boarding."
    },
    {
      title: "Standard Air Freight",
      description: "Cost-effective option for less urgent shipments.",
      idealFor: "Medium-priority cargo.",
      features: "Balanced speed and cost, 5-7 days delivery time."
    },
    {
      title: "Charter Services",
      description: "Customized air freight solutions using chartered aircraft.",
      idealFor: "Oversized, heavy, or urgent shipments requiring direct routes.",
      features: "Flexibility in scheduling, customized solutions, exclusive use of aircraft."
    },
    {
      title: "Door-to-Door Air Freight",
      description: "Comprehensive service from origin to final destination.",
      idealFor: "Businesses looking for end-to-end logistics solutions.",
      features: "Pickup, air transport, customs clearance, final delivery."
    },
    {
      title: "Perishable Goods Shipping",
      description: "Specialized service for temperature-sensitive products.",
      idealFor: "Pharmaceuticals, food, and other perishable items.",
      features: "Temperature control, expedited handling, regulatory compliance."
    },
  ];

  return (
    <div className="home-containers">
      <Navbar />
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Ideal For:</strong> {service.idealFor}</p>
            <p><strong>Features:</strong> {service.features}</p>
          </div>
        ))}
      </div>
      <div className="cta-section">
        <h3>Try Our Services</h3>
        <Link to='/Ordersum'><button className="cta-button">Order Here!</button></Link>
      </div>
      <Footer />
    </div>
  );
};

export default AirServices;