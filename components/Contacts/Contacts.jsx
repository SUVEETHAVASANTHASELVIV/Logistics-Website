import React from 'react';
import './Contacts.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContactForm from './Contactform'; 

const Contacts = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-container">
        <ContactForm /> {/* Use the ContactForm component */}
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>193, Admin Street, Valayapati, Namakkal</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 23676 35471</p>
          </div>
          <div className="info-item">
            <h3>Email Address</h3>
            <p>trackpro@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Looking For Something In Particular?</h3>
            <p>
              We are here to help you with all of your queries related to Focus Softnet products. Get support by Call,
              Chat, Email or submit your feedback/complaints regarding our products and services to our experts for 
              instant support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
