import React, { useState } from 'react';
import { FaTachometerAlt, FaCogs, FaChartPie, FaBook, FaTools, FaChevronRight, FaChevronLeft, FaCircle, FaTruck, FaUserCircle } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [managementOpen, setManagementOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);

  const toggleManagement = () => {
    setManagementOpen(!managementOpen);
  };

  const toggleTransfer = () => {
    setTransferOpen(!transferOpen);
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar-logo">TRACKPRO</h1>
      <div className="user-info">
        <FaUserCircle size={40} />
        <span className="username">XYZ</span>
      </div>
      <div className="menu">
        <h2>MENU</h2>
        <ul>
          <li>
          <Link to="/Dashboard" style={{ color: 'white', textDecoration: 'none' }}><FaTachometerAlt /> Dashboard</Link>
          </li>
          <li onClick={toggleManagement} className={`menu-item ${managementOpen ? 'open' : ''}`}>
            <div className="dropdown">
              <span className="dropdown-text"><FaCogs /> Management</span>
              <span className="dropdown-icon">{managementOpen ? <FaChevronLeft /> : <FaChevronRight />}</span>
            </div>
            <ul className={`submenu ${managementOpen ? 'show' : ''}`}>
              <li className='order'><Link to="/userdetails"><FaCircle /> Users & Services</Link></li>
              <li className='order'><Link to="/Orders"><FaCircle /> Order Management</Link></li>
              <li className='order'><Link to="/warehouse"><FaCircle /> Warehouse Management</Link></li>
            </ul>
          </li>
          <li onClick={toggleTransfer} className={`menu-item ${transferOpen ? 'open' : ''}`}>
            <div className="dropdown">
              <span className="dropdown-text"><FaTruck /> Transfer</span>
              <span className="dropdown-icon">{transferOpen ? <FaChevronLeft /> : <FaChevronRight />}</span>
            </div>
            <ul className={`submenu ${transferOpen ? 'show' : ''}`}>
              <li><FaCircle/> Create Transfer</li>
              <li><FaCircle/> Track Transfer</li>
            </ul>
          </li>
          <li>
            <FaChartPie />Reporting & Analytics</li>
          <li>
          <Link 
        to='/documentation'
        style={{
          textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', fontSize: '16px', margin: '0 5px', 
        }}
      >
        <FaBook style={{ marginRight: '5.5px' }} />Documentation
      </Link> 
          </li>
          <li>
          <Link 
          to='/customization'
        style={{
          textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', fontSize: '16px', margin: '0 5px', 
        }}
      >
        <FaTools style={{ marginRight: '5.5px' }} />Customization
      </Link> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;