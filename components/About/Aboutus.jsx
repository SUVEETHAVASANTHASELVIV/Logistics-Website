import React from 'react';
import './Aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import historyImage from '../images/history.jpg'; 
import client1 from '../images/client1.jpg';
import client2 from '../images/person_2.jpg';
import client3 from '../images/client3.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const teamMembers = [
    {
      name: "Christine Rooster",
      role: "CO-FOUNDER, PRESIDENT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatem deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: client1
    },
    {
      name: "Brandon Sharp",
      role: "CO-FOUNDER, COO",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatem deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: client2
    },
    {
      name: "Connor Hodson",
      role: "MARKETING",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatem deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: client3
    }
  ];

const Aboutus = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>ABOUT US</h1>
      </div>
      <div className="content-section">
        <div className="history-container">
          <div className="history-content">
            <h2>Mission</h2>
            <p>
              To provide efficient, reliable, and innovative logistics solutions that optimize the supply chain, 
              enhance customer satisfaction, and drive business growth through cutting-edge technology and exceptional 
              service.
            </p>
            <br />
            <h2>Vision</h2>
            <p>
              To be a global leader in logistics management, recognized for our commitment to sustainability, 
              technological innovation, and unparalleled service quality, ensuring seamless and sustainable supply 
              chain operations for businesses of all sizes.
            </p>
            <br />
            <div className="play-video-button">
      <div className="play-icon-container">
        <div className="play-icon"></div>
      </div>
      <span className="play-text"><a href="https://youtu.be/MMyZ9Pu01RI">Play Video</a></span>
      </div>
          </div>
          
          <div className="history-image">
          <img src={historyImage} alt="History" /> 
          </div>
        </div>
      </div>
      <div className="how-it-works-content">
        <h2>HOW IT WORKS</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Choose Your Service</h3>
            <p>
            Determine if you need warehousing, transportation, freight forwarding, inventory management, or a combination.
            </p>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /> Identify domestic or international destinations for your logistics needs.</li>
              <li><FontAwesomeIcon icon={faCheck} /> Estimate the volume of goods you need to handle.</li>
              <li><FontAwesomeIcon icon={faCheck} /> When you’re selecting a third-party logistic service provider, consider technology that works for you and with you. </li>
            </ul>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Select Your Payment</h3>
            <p>
              Selecting a payment method in a logistics management system involves several steps to ensure that the transaction 
              is secure, efficient, and meets the needs of both the service provider and the customer. 
            </p>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /> Ensure the user is logged into their account.</li>
              <li><FontAwesomeIcon icon={faCheck} /> Verify the user's credentials and access permissions.</li>
              <li><FontAwesomeIcon icon={faCheck} /> Use a payment gateway to process the transaction.</li>
            </ul>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Tracking Your Order</h3>
            <p>
            The process starts when a customer places an order. The system generates an order confirmation with a 
            unique tracking number.
            </p>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /> The system checks inventory levels to ensure the product is in stock.</li>
              <li><FontAwesomeIcon icon={faCheck} /> The items are picked from the inventory and packed for shipment.</li>
              <li><FontAwesomeIcon icon={faCheck} /> The system confirms delivery, either through carrier notification or customer confirmation.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="our-team-container">
      <h2>OUR TEAM</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Aboutus;
