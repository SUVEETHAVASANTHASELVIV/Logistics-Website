import React from 'react';
import '../AirServices/AirServices';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const SeaServices = () => {
  const services = [
    {
      title: "Full Container Load (FCL)",
      description: "Exclusive use of an entire container for a single shipment.",
      idealFor: "Large quantities of goods or heavy shipments.",
      features: "Cost-efficient for bulk shipments; flexible delivery timelines."
    },
    {
      title: "Less Than Container Load (LCL)",
      description: "Combines shipments from various customers into one container.",
      idealFor: "Smaller shipments.",
      features: "Cost-effective for smaller shipments; longer transit times due to consolidation."
    },
    {
      title: "Refrigerated Container Shipping",
      description: "Transport of temperature-sensitive goods using refrigerated containers.",
      idealFor: "Perishable foods, pharmaceuticals.",
      features: "Temperature control, humidity monitoring, compliance with regulations."
    },
    {
      title: "Roll-on/Roll-off (RoRo) Shipping",
      description: "Transport of vehicles and machinery that can be driven on and off the vessel.",
      idealFor: "Cars, trucks, heavy machinery.",
      features: "Efficient loading/unloading; secure transport."
    },
    {
      title: "Break Bulk Shipping",
      description: "Transport of oversized or heavy cargo that doesn’t fit in standard containers.",
      idealFor: "Large machinery, construction materials.",
      features: "Customized handling; special equipment for loading/unloading."
    },
    {
      title: "Project Cargo Shipping",
      description: "Specialized service for transporting large-scale, complex projects.",
      idealFor: "Industrial and infrastructure projects.",
      features: "Customized solutions; coordination of multiple shipments; specialized equipment."
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

export default SeaServices;