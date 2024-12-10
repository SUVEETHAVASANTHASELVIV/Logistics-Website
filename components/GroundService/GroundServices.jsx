import React from 'react';
import '../AirServices/AirService.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const GroundServices = () => {
  const services = [
    {
      title: "Full Truckload (FTL)",
      description: "Entire truck reserved for a single shipment.",
      idealFor: "Large shipments or time-critical deliveries.",
      features: "Direct route delivery, reduced transit time."
    },
    {
      title: "Less Than Truckload (LTL)",
      description: "Combines multiple shipments from different customers into one truck.",
      idealFor: "Smaller shipments.",
      features: "Cost-effective, longer transit times due to multiple stops."
    },
    {
      title: "Dedicated Fleet Services",
      description: "Dedicated trucks and drivers for specific customer needs.",
      idealFor: "Businesses with consistent shipping needs.",
      features: "Customized routes, dedicated support, improved reliability."
    },
    {
      title: "Expedited Ground Shipping",
      description: "Fast ground shipping service for urgent deliveries.",
      idealFor: "Time-sensitive shipments.",
      features: "Priority handling, guaranteed delivery times."
    },
    {
      title: "Cross-Docking Services",
      description: "Transfer of goods directly from inbound to outbound trucks with minimal storage time.",
      idealFor: "Reducing warehouse costs and speeding up delivery times.",
      features: "Efficient handling, reduced storage time, streamlined operations."
    },
    {
      title: "Intermodal Transportation",
      description: "Combination of multiple modes of transport (e.g., truck to rail) for efficient logistics.",
      idealFor: "Long-distance and international shipments.",
      features: "Cost-effective, environmentally friendly, flexible routing."
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

export default GroundServices;