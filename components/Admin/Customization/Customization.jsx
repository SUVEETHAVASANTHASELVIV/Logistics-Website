import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Customization/Customization.css';

const Customization = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/Dashboard');
  };

  return (
    <div className="customization-page">
      <button className="close-button" onClick={handleClose}>×</button>
      <main className="customization-content">
        <section className="customization-section">
          <h2>General Settings</h2>
          <form>
            <label>Site Title:
              <input type="text" placeholder="Enter site title" />
            </label>
            <label>Site Logo:
              <input type="file" />
            </label>
            <label>Favicon:
              <input type="file" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Theme Customization</h2>
          <form>
            <label>Color Scheme:
              <input type="color" />
            </label>
            <label>Typography:
              <input type="text" placeholder="Enter font family" />
            </label>
            <label>Background Image:
              <input type="file" />
            </label>
            <label>Layout Options:
              <select>
                <option value="full-width">Full-width</option>
                <option value="boxed">Boxed</option>
              </select>
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Header and Footer Settings</h2>
          <h3>Header Customization</h3>
          <form>
            <label>Header Logo:
              <input type="file" />
            </label>
            <label>Navigation Menus:
              <input type="text" placeholder="Enter menu items" />
            </label>
            <label>Header Background Color:
              <input type="color" />
            </label>
            <label>Header Transparency:
              <input type="range" min="0" max="100" />
            </label>
          </form>
          <h3>Footer Customization</h3>
          <form>
            <label>Footer Text:
              <textarea placeholder="Enter footer text" />
            </label>
            <label>Footer Links:
              <input type="text" placeholder="Enter footer links" />
            </label>
            <label>Footer Background Color:
              <input type="color" />
            </label>
            <label>Footer Layout:
              <select>
                <option value="default">Default</option>
                <option value="custom">Custom</option>
              </select>
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Contact Information</h2>
          <form>
            <label>Business Address:
              <input type="text" placeholder="Enter address" />
            </label>
            <label>Phone Numbers:
              <input type="text" placeholder="Enter phone numbers" />
            </label>
            <label>Email Addresses:
              <input type="email" placeholder="Enter email addresses" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Social Media Integration</h2>
          <form>
            <label>Social Links:
              <input type="text" placeholder="Enter social media profiles" />
            </label>
            <label>Social Media Icons:
              <input type="file" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Service Options</h2>
          <form>
            <label>Service Categories:
              <input type="text" placeholder="Enter service categories" />
            </label>
            <label>Service Descriptions:
              <textarea placeholder="Enter descriptions for services" />
            </label>
            <label>Pricing Models:
              <input type="text" placeholder="Enter pricing models" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Payment Settings</h2>
          <form>
            <label>Payment Methods:
              <input type="text" placeholder="Enter payment methods" />
            </label>
            <label>Payment Gateways:
              <input type="text" placeholder="Enter payment gateways" />
            </label>
            <label>Currency Settings:
              <input type="text" placeholder="Enter currency settings" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Notification Settings</h2>
          <form>
            <label>Email Templates:
              <textarea placeholder="Customize email templates" />
            </label>
            <label>Notification Preferences:
              <input type="text" placeholder="Set notification preferences" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>User Interface Customizations</h2>
          <form>
            <label>Button Styles:
              <input type="text" placeholder="Customize button styles" />
            </label>
            <label>Form Styles:
              <input type="text" placeholder="Customize form styles" />
            </label>
            <label>Table Styles:
              <input type="text" placeholder="Customize table styles" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Content Management</h2>
          <form>
            <label>Homepage Banners:
              <input type="file" />
            </label>
            <label>Featured Content:
              <textarea placeholder="Manage featured content" />
            </label>
            <label>News and Updates:
              <textarea placeholder="Update news or blog sections" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>SEO Settings</h2>
          <form>
            <label>Meta Tags:
              <textarea placeholder="Customize meta titles, descriptions, keywords" />
            </label>
            <label>Sitemap:
              <input type="text" placeholder="Configure sitemap settings" />
            </label>
            <label>Social Media Integration:
              <input type="text" placeholder="Set up Open Graph and Twitter Card settings" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Backup and Restore</h2>
          <form>
            <label>Backup Schedule:
              <input type="text" placeholder="Configure automatic backups" />
            </label>
            <label>Restore Settings:
              <input type="text" placeholder="Manage and restore backups" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Advanced Settings</h2>
          <form>
            <label>Custom Scripts:
              <textarea placeholder="Add or modify custom JavaScript and CSS scripts" />
            </label>
            <label>API Integrations:
              <input type="text" placeholder="Manage API keys and settings" />
            </label>
            <label>Custom Code:
              <textarea placeholder="Inject custom HTML or code snippets" />
            </label>
          </form>
        </section>

        <section className="customization-section">
          <h2>Support and Documentation</h2>
          <form>
            <label>Help Resources:
              <input type="text" placeholder="Access help guides or documentation" />
            </label>
            <label>Contact Support:
              <input type="text" placeholder="Details for contacting support" />
            </label>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Customization;
