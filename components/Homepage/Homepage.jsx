import React from 'react';
import './Homepage.css';
import historyImage from '../images/history.jpg'; 
import airTransportImage from '../images/air_transport.jpg';
import cargoTransportImage from '../images/cargo_transport.jpg';
import cargoShipImage from '../images/cargo_ship.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { HashLink } from 'react-router-hash-link';
import PartnersSection from '../PatnersSection/PartnersSection';


const Homepage = () => {
  const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('/GetQ'); 
    };
  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>WORLDWIDE FREIGHT SERVICES</h1>
        <HashLink to="/HomePage#quote-section"><button className="cta-button">Get Started!</button></HashLink>
        
      </div>
      <div className="quote-section" id='quote-section'>
        <div className="quote-item">
          <div className="quote-icon ">₹</div>
          <h3>BEST PRICES</h3>
          <p>We offer competitive pricing tailored to your needs, ensuring cost-effective solutions without 
            compromising quality. Experience transparency and value as we optimize your supply chain for maximum 
            efficiency.</p>
        </div>
        <div className="quote-form">
          <h3>GET FREE QUOTE</h3>
            <Link to='/GetQ'><button type="submit">GET QUOTE</button></Link>
        </div>
        <div className="quote-item">
          <div className="quote-icon">📞</div>
          <h3>24/7 SUPPORT</h3>
          <p>Our dedicated team is available around the clock to assist with any inquiries or issues, ensuring a 
            seamless logistics experience.</p>
        </div>
      </div>
      <div className="content-section">
        <div className="history-container">
          <div className="history-content">
            <h2>ABOUT US</h2>
            <p>
            Mission <br />
               To provide efficient, reliable, and innovative logistics solutions that optimize the supply chain, 
               enhance customer satisfaction, and drive business growth through cutting-edge technology and exceptional 
               service.
            </p>
            <Link to='/Aboutus'>
            <p>Learn more</p>
            </Link>
          </div>
          <div className="history-image">
          <img src={historyImage} alt="History" /> 
          </div>
        </div>
      </div>
      <hr></hr>
        <div className="services-section" id='services-section'>
          <h2>OUR SERVICES</h2>
          <div className="services-container">
            <div className="service-item" style={{ backgroundImage: `url(${airTransportImage})` }}>
              <div className="service-content">
              <h3><a href="/AirServices" className="no-underline-link">AIR SERVICES</a></h3>

              </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${cargoShipImage})` }}>
              <div className="service-content">
              <h3><a href="/SeaServices" className="no-underline-link">SEA SERVICES</a></h3>
              </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${cargoTransportImage})` }}>
              <div className="service-content">
              <h3><a href="/GroundServices" className="no-underline-link">GROUND SERVICES</a></h3>
              </div>
            </div>
          </div>
        </div>
      
      <section className="more-services-section">
                <h2>MORE SERVICES</h2>
                <p>We Offer The Following Services</p>
                <div className="more-services-container">
                    <div className="more-service-item">
                        <div className="more-service-icon">✈</div>
                        <h3>Intermodal Transportation</h3>
                        <p>involves a transshipment of goods between different modes of transport using a single cargo unit.</p>
                        <Link to='/Payment'>Use Service</Link>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚢</div>
                        <h3>Last Mile Delivery</h3>
                        <p>It Refers to the process of delivering goods to a final destination, typically the end customer's doorstep.</p>
                        <Link to='/Payment'>Use Service</Link>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚚</div>
                        <h3>Freight Forwarding</h3>
                        <p>It is the process of organizing and coordinating the transfer of commodities across international borders on behalf of shippers and receivers.</p>
                        <Link to='/Payment'>Use Service</Link>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🏢</div>
                        <h3>Reverse Logistics</h3>
                        <p>It involves retrieving goods that have been sold so that they can be repurposed or recycled in some way.</p>
                        <Link to='/Payment'>Use Service</Link>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">📦</div>
                        <h3>Supply Chain Consultation</h3>
                        <p>It is the process of monitoring and optimization of the production and distribution of a company's products and services.</p>
                        <Link to='/Payment'>Use Service</Link>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚛</div>
                        <h3>Hazardous Material Shipping</h3>
                        <p>It is responsible for packaging and labeling hazardous materials correctly, and providing the required documentation.</p>
                        <Link to='/Payment'>Use Service</Link>
                    </div>
                </div>
            </section>
            <PartnersSection/>
          <Footer/>
    </div>
  );
};

export default Homepage;