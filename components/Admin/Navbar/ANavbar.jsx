import React from 'react';
import { FaSearch, FaBell, FaUserCircle, FaQuestionCircle } from 'react-icons/fa';
import './ANavbar.css';
import { Link } from 'react-router-dom';

const ANavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <div className="navbar-search">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-actions">
          <Link to='/warehouse'>Find A Space</Link>
        </div>
        <div className="navbar-icons">
        <Link to='/Quote' style={{
          textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', fontSize: '16px', margin: '0 5px', 
        }}><FaBell /></Link>
          <Link to='/Notibel' style={{
          textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', fontSize: '16px', margin: '0 5px', 
        }}><FaQuestionCircle /></Link>
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};
export default ANavbar;