import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Documentation/Documentation.css';

const Documentation = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/Dashboard');
  };

  return (
    <div className="documentation">
      <button className="close-button" onClick={handleClose}>×</button>
      <main className="doc-content">
        <section className="doc-section">
          <h2>Introduction</h2>
          <p><strong>Overview:</strong> This document provides comprehensive guidance for administrators managing the logistics website. It covers user management, service administration, order handling, and more.</p>
          <p><strong>Purpose and Scope:</strong> To enable efficient administration of the logistics system, ensuring smooth operations and effective management of resources.</p>
          <p><strong>Key Features:</strong> User and service management, order tracking, payment processing, and reporting tools.</p>
        </section>

        <section className="doc-section">
          <h2>System Requirements</h2>
          <ul>
            <li><strong>Hardware Requirements:</strong>
              <ul>
                <li>Minimum server specifications (e.g., CPU, RAM, storage).</li>
                <li>Recommended hardware for optimal performance.</li>
              </ul>
            </li>
            <li><strong>Software Requirements:</strong>
              <ul>
                <li>Server OS and version (e.g., Linux, Windows Server).</li>
                <li>Database (e.g., MySQL, PostgreSQL).</li>
                <li>Web server (e.g., Apache, Nginx).</li>
              </ul>
            </li>
            <li><strong>Browser Compatibility:</strong>
              <ul>
                <li>Supported browsers (e.g., Chrome, Firefox, Safari).</li>
                <li>Recommended browser versions.</li>
              </ul>
            </li>
            <li><strong>System Dependencies:</strong>
              <ul>
                <li>Frameworks and libraries (e.g., React.js, Spring Boot).</li>
                <li>External services or APIs.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Getting Started</h2>
          <ul>
            <li><strong>Accessing the Admin Dashboard:</strong> URL for the admin login page and steps for logging in (username, password).</li>
            <li><strong>Initial Setup and Configuration:</strong> Setting up initial admin accounts and configuring site settings (e.g., currency, language).</li>
            <li><strong>User Roles and Permissions:</strong> Overview of admin roles (e.g., Super Admin, Service Manager) and assigning roles and managing permissions.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Dashboard Overview</h2>
          <ul>
            <li><strong>Layout Description:</strong> Navigation bar, widgets, and sections.</li>
            <li><strong>Widget Explanations:</strong> Overview of key widgets (e.g., service status, order summary).</li>
            <li><strong>Navigation Tips:</strong> How to navigate between different sections.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>User Management</h2>
          <ul>
            <li><strong>Adding and Managing User Accounts:</strong> Steps to create new user accounts, editing user details and roles.</li>
            <li><strong>Setting Roles and Permissions:</strong> Assigning roles (e.g., Admin, Manager, Viewer).</li>
            <li><strong>Deactivating or Deleting Users:</strong> Procedures for deactivating or removing users.</li>
            <li><strong>Resetting Passwords:</strong> Steps for password resets and recovery.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Service Management</h2>
          <ul>
            <li><strong>Adding New Logistics Services:</strong> Procedures for adding air, ship, and ground services.</li>
            <li><strong>Editing Service Details:</strong> Updating service information, pricing, and availability.</li>
            <li><strong>Managing Service Pricing:</strong> Adjusting pricing and service options.</li>
            <li><strong>Removing Services:</strong> Deleting services from the system.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Order Management</h2>
          <ul>
            <li><strong>Viewing and Tracking Orders:</strong> Accessing order lists and details.</li>
            <li><strong>Managing Order Statuses:</strong> Updating and tracking order statuses.</li>
            <li><strong>Handling Order Exceptions:</strong> Procedures for managing exceptions and issues.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Payment Management</h2>
          <ul>
            <li><strong>Reviewing Payment Transactions:</strong> Accessing and reviewing payment records.</li>
            <li><strong>Handling Refunds and Adjustments:</strong> Procedures for processing refunds and adjustments.</li>
            <li><strong>Managing Payment Options:</strong> Configuring available payment methods.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Reporting and Analytics</h2>
          <ul>
            <li><strong>Generating Reports:</strong> Steps to create reports (e.g., sales, traffic).</li>
            <li><strong>Analyzing Data:</strong> Interpreting data and trends.</li>
            <li><strong>Exporting Report Data:</strong> Exporting reports in various formats (e.g., CSV, PDF).</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>System Settings</h2>
          <ul>
            <li><strong>Configuring Site-wide Settings:</strong> Setting up currency, language, and other site preferences.</li>
            <li><strong>Managing Email Notifications:</strong> Configuring email templates and notification settings.</li>
            <li><strong>Setting Up Integrations:</strong> Integrating with other systems (e.g., payment gateways, CRM).</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Troubleshooting and Support</h2>
          <ul>
            <li><strong>Common Issues and Solutions:</strong> FAQs and solutions for common problems.</li>
            <li><strong>Contacting Support:</strong> How to get in touch with support teams.</li>
            <li><strong>Logging and Tracking Support Tickets:</strong> Procedures for creating and tracking support tickets.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Security and Privacy</h2>
          <ul>
            <li><strong>Security Measures:</strong> Overview of implemented security features (e.g., encryption, access controls).</li>
            <li><strong>Best Practices:</strong> Tips for maintaining system security.</li>
            <li><strong>Privacy Policies:</strong> Compliance with privacy regulations and policies.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Backup and Recovery</h2>
          <ul>
            <li><strong>Backup Procedures:</strong> Regular backup schedules and methods.</li>
            <li><strong>Data Recovery Processes:</strong> Steps for restoring data from backups.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Change Log</h2>
          <ul>
            <li><strong>System Updates and Changes:</strong> Record of recent updates and changes to the system.</li>
            <li><strong>New Features and Bug Fixes:</strong> Description of new features and resolved issues.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h2>Glossary</h2>
          <p><strong>Definitions:</strong> Key terms and acronyms used in the documentation.</p>
        </section>

        <section className="doc-section">
          <h2>Appendices</h2>
          <ul>
            <li><strong>Additional Resources:</strong> Links to related documentation and tools.</li>
            <li><strong>FAQs:</strong> Common questions and answers.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Documentation;
