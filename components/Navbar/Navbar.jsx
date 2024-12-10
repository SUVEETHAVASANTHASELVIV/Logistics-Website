import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">TrackPro</div>
      <nav className="nav">
        <Link to="/HomePage">Home</Link>
        <Link to="/Aboutus">About Us</Link>
        <HashLink to="/HomePage#services-section">Services</HashLink>
        <div className="dropdownnav">
          <strong style={{color:'white'}}>Customer Needs</strong>
          <div className="dropdown-content-user">
            <Link to="/Order">Orders</Link>
            <Link to="/Track">Track</Link>
          </div>
        </div>
        <Link to="/Review">Testimonial</Link>
        <Link to="/Contacts">Contact</Link>
        <Link to='/profile'><FontAwesomeIcon icon={faUser}/></Link>
        <Link to='/'><FontAwesomeIcon icon={faSignOutAlt}/></Link>        
      </nav>
    </header>
  );
}

export default Navbar;
