import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
          <li>
            <Link to="/HomePage" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/Aboutus" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
          </li>
          <li>
            <HashLink to="/HomePage#services-section" style={{ color: 'white', textDecoration: 'none' }}>Services</HashLink>
          </li>
          <li>
            <Link to="/Review" style={{ color: 'white', textDecoration: 'none' }}>Testimonial</Link>
          </li>
          <li>
            <Link to="/Contacts" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </li>
          <li>
            <Link to="/Policy" style={{ color: 'white', textDecoration: 'none' }}>Refund_Privacy Policy</Link>
          </li>
        </ul>
        </div>
        <div className="footer-column">
          <h4>Open hours</h4>
          <ul>
            <li><a href="#about">Mon 6 to 8</a></li>
            <li><a href="#services">Tue 6 to 8</a></li>
            <li><a href="#testimonials">Wed 6 to 8</a></li>
            <li><a href="#contact">Thu 6 to 8</a></li>
            <li><a href="#contact">Fri 6 to 8</a></li>
            <li><a href="#contact">Sat 6 to 6</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li><a href="#home">Efficiency</a></li>
            <li><a href="#home">Visibility</a></li>
            <li><a href="#home">Scalability</a></li>
            <li><a href="#home">Intergration</a></li>
          </ul>
        </div>
        <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        <div className="footer-column">
          <h4>Subscribe Newsletter</h4>
          <form className="footer-form">
            <input type="email" placeholder="Enter Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved </p>
      </div>
    </footer>

  )
}

export default Footer