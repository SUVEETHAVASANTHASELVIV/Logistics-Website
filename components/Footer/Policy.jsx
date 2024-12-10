import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Importing close icon from react-icons

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f0f0', // Light gray background for the container
    color: '#333', // Dark gray text color
    fontFamily: 'Arial, sans-serif',
    position: 'relative' // To position the close icon absolutely within the container
  },
  title: {
    color: '#000', // Black color for the main title
    fontSize: '24px',
    marginBottom: '20px'
  },
  section: {
    marginBottom: '20px'
  },
  sectionTitle: {
    color: '#000', // Black color for section titles
    fontSize: '20px',
    marginBottom: '10px'
  },
  sectionSubtitle: {
    color: '#555', // Gray color for section subtitles
    fontSize: '18px',
    marginBottom: '10px'
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px'
  },
  listItem: {
    color: '#333', // Dark gray color for list items
    fontSize: '16px',
    marginBottom: '10px'
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#333' // Dark gray color for close icon
  }
};

function Policy() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div style={styles.container}>
      <FaTimes style={styles.closeIcon} onClick={handleClose} /> {/* Close icon */}
      <h1 style={styles.title}>Cancellations & Refunds Policy</h1>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Cancellation Policy:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✓ If cancellation occurs more than 48 hours before the experience, you will receive a full 100% refund</li>
          <li style={styles.listItem}>✓ Cancellations made between 24 and 48 hours before the event will be eligible for a 70% refund</li>
          <li style={styles.listItem}>✓ If cancellation occurs between 6 and 24 hours before the experience, you will receive a 50% refund</li>
          <li style={styles.listItem}>✓ Unfortunately, cancellations made less than 6 hours before the event will not be eligible for a refund</li>
        </ul>
      </div>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Refund Policy:</h2>
        <h3 style={styles.sectionSubtitle}>WHAT ABOUT REFUNDS AFTER CANCELLATION?</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>✓ If the vendor did not show up after the booking amount is paid, on those unfortunate occasions we do refund 2x (2 times) the booking amount if only online payment is done through partone.in</li>
          <li style={styles.listItem}>✓ The refund amount for the service orders paid via online or credit/debit card will be refunded within 2-5 working days from the date of initiating the refund through the online account</li>
          <li style={styles.listItem}>✓ Please carefully review the Cancellation and Refund policies before making a purchase, as you will be held accountable to these policies. To cancel or reschedule, please send us an email at info@partyone.in or reach out to us via call or WhatsApp number at 9043133423</li>
        </ul>
      </div>
    </div>
  );
}  

export default Policy;
